#!/usr/bin/env node
// Build one ZIP per skill folder, ready to upload to Claude at Customize, Skills.
//
//   node scripts/build-zips.mjs [outDir]    writes <skill-name>.zip for every skill (default outDir: dist)
//   node scripts/build-zips.mjs --check     checks every skill and writes nothing
//
// Each ZIP holds the skill folder itself at its top level (<skill-name>/SKILL.md and the
// folder's other files), the shape Claude's skill upload looks for. A SKILL.md at the root
// of a ZIP is not recognised as a skill.
//
// Before writing anything, every SKILL.md is checked. Its front matter must be YAML in the
// small, strict form this script reads (see frontMatter below): anything else is an error,
// so an upload never meets a front matter a YAML parser refuses. Then the Agent Skills rules:
// the name is lowercase letters, numbers and hyphens, at most 64 characters, matches its
// folder and contains neither "anthropic" nor "claude"; the description is not empty, has
// at most 1,024 characters and no XML tags. One broken skill stops the whole build.
//
// No dependencies (Node 18 or later). The output is deterministic: the same files give the
// same bytes, because entries are sorted and every entry carries one fixed timestamp
// (SOURCE_DATE_EPOCH when set, otherwise 1 January 1980).

import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateRawSync, inflateRawSync } from 'node:zlib';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const NAME_MAX = 64;
const DESCRIPTION_MAX = 1024;
// One help page on claude.ai gives 200 characters for the description. The Agent Skills
// spec and Anthropic's developer docs give 1,024. Over 200 is reported, not refused.
const DESCRIPTION_SHORT_LIMIT = 200;
const SKILL_MD_LINES_ADVISED = 500;
const SKIP_DIRS = new Set(['.git', 'node_modules', 'dist', 'scripts']);

// ---------------------------------------------------------------------------
// Finding and checking skills
// ---------------------------------------------------------------------------

function skillFolders() {
  return readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.') && !SKIP_DIRS.has(d.name))
    .map((d) => d.name)
    .filter((name) => {
      try {
        return statSync(join(ROOT, name, 'SKILL.md')).isFile();
      } catch {
        return false;
      }
    })
    .sort();
}

/**
 * The YAML front matter of a SKILL.md, read strictly. Only a small part of YAML is accepted:
 * one `key: value` per line, where the value is a plain scalar on one line, a single- or
 * double-quoted scalar on one line, a folded (>) or literal (|) block, or nothing, followed by
 * an indented block (as for `metadata:`). Anything else is an error, never a silent guess, so a
 * front matter this script accepts is one a YAML parser reads the same way. For example, an
 * unquoted description holding ": " is refused here, as YAML parsers refuse it
 * ("mapping values are not allowed").
 */
function frontMatter(text) {
  const normalised = text.replace(/\r\n/g, '\n');
  if (!normalised.startsWith('---\n')) return { fields: null, errors: ['SKILL.md does not start with a front matter block between two --- lines'] };
  const end = normalised.indexOf('\n---', 4);
  if (end === -1) return { fields: null, errors: ['the front matter block has no closing --- line'] };
  const lines = normalised.slice(4, end).split('\n');
  const fields = {};
  const errors = [];
  const at = (i) => `front matter line ${i + 2}`;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '' || /^#/.test(line)) continue;
    if (/^\s/.test(line)) {
      errors.push(`${at(i)} is indented but belongs to no key; put each top-level key at the start of its line`);
      continue;
    }
    const m = line.match(/^([A-Za-z0-9_-]+):(?: (.*))?$/);
    if (!m) {
      errors.push(`${at(i)} is not a "key: value" line`);
      continue;
    }
    const key = m[1];
    const raw = (m[2] ?? '').replace(/\s+$/, '');
    if (Object.prototype.hasOwnProperty.call(fields, key)) errors.push(`${at(i)}: the key "${key}" appears twice`);
    const isIndented = (j) => j < lines.length && (/^\s+\S/.test(lines[j]) || lines[j].trim() === '');
    let value;
    if (/^[>|][-+]?$/.test(raw)) {
      const block = [];
      while (isIndented(i + 1)) block.push(lines[++i].trim());
      value = raw.startsWith('>') ? block.join(' ').replace(/\s+/g, ' ').trim() : block.join('\n').trim();
    } else if (raw === '') {
      // A nested block (metadata: and its indented lines) is kept as text and not checked further.
      const block = [];
      while (isIndented(i + 1)) block.push(lines[++i]);
      value = block.join('\n').trim();
    } else if (raw.startsWith('"')) {
      const parsed = doubleQuoted(raw);
      if (parsed.error) errors.push(`${at(i)}: ${parsed.error}`);
      value = parsed.value ?? '';
    } else if (raw.startsWith("'")) {
      if (!/^'(?:[^']|'')*'$/.test(raw)) errors.push(`${at(i)}: a single-quoted value must end with ' on the same line, and a ' inside it is written ''`);
      value = raw.slice(1, -1).replace(/''/g, "'");
    } else {
      const problem = plainScalarProblem(raw);
      if (problem) errors.push(`${at(i)}: the value of "${key}" ${problem}; put the whole value in double quotes`);
      value = raw;
    }
    if (!/^[>|]/.test(raw) && raw !== '' && isIndented(i + 1) && lines[i + 1].trim() !== '') {
      errors.push(`${at(i + 1)} continues the value of "${key}" on a new line; keep it on one line, or use >`);
      while (isIndented(i + 1)) i++;
    }
    fields[key] = value;
  }
  return { fields, errors };
}

/** Why a one-line plain (unquoted) YAML scalar would not be read as the text it shows, or null. */
function plainScalarProblem(value) {
  if (/^[\[\]{}#&*!|>'"%@`,]/.test(value)) return `starts with "${value[0]}", which YAML reads as syntax`;
  if (/^[-?:](\s|$)/.test(value)) return `starts with "${value[0]} ", which YAML reads as syntax`;
  if (/:(\s|$)/.test(value)) return 'holds a colon followed by a space (or ends with a colon), which YAML reads as a new key';
  if (/\s#/.test(value)) return 'holds " #", which YAML reads as the start of a comment';
  return null;
}

/** A one-line YAML double-quoted scalar: its text, or why it is not valid. */
function doubleQuoted(raw) {
  const simple = { '0': '\0', a: '\x07', b: '\b', t: '\t', '\t': '\t', n: '\n', v: '\v', f: '\f', r: '\r', e: '\x1b', ' ': ' ', '"': '"', '/': '/', '\\': '\\', N: '\x85', _: '\xa0', L: ' ', P: ' ' };
  const hex = { x: 2, u: 4, U: 8 };
  let out = '';
  for (let k = 1; k < raw.length; k++) {
    const c = raw[k];
    if (c === '"') {
      if (k !== raw.length - 1) return { error: 'a double-quoted value has text after its closing quote; write a " inside it as \\"' };
      return { value: out };
    }
    if (c !== '\\') {
      out += c;
      continue;
    }
    const e = raw[++k];
    if (e in simple) out += simple[e];
    else if (e in hex) {
      const digits = raw.slice(k + 1, k + 1 + hex[e]);
      if (!new RegExp(`^[0-9A-Fa-f]{${hex[e]}}$`).test(digits)) return { error: `"\\${e}" needs ${hex[e]} hex digits` };
      out += String.fromCodePoint(parseInt(digits, 16));
      k += hex[e];
    } else return { error: `"\\${e ?? ''}" is not a YAML escape; write a backslash as \\\\` };
  }
  return { error: 'a double-quoted value must end with " on the same line' };
}

function checkSkill(folder) {
  const errors = [];
  const warnings = [];
  const text = readFileSync(join(ROOT, folder, 'SKILL.md'), 'utf8');
  const { fields: fm, errors: yamlErrors } = frontMatter(text);
  errors.push(...yamlErrors);
  if (!fm) return { errors, warnings };
  const name = fm.name ?? '';
  const description = fm.description ?? '';
  const descriptionLength = [...description].length;

  if (!name) errors.push('name is missing');
  else {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) errors.push(`name "${name}" may hold only lowercase letters, numbers and single hyphens`);
    if (name.length > NAME_MAX) errors.push(`name has ${name.length} characters, the limit is ${NAME_MAX}`);
    if (name !== folder) errors.push(`name "${name}" does not match its folder "${folder}"`);
    if (/anthropic|claude/.test(name)) errors.push(`name "${name}" contains a reserved word (anthropic, claude)`);
  }
  if (!description) errors.push('description is missing');
  else {
    if (descriptionLength > DESCRIPTION_MAX) errors.push(`description has ${descriptionLength} characters, the limit is ${DESCRIPTION_MAX}`);
    if (/[<>]/.test(description)) errors.push('description holds < or >, which reads as an XML tag');
    if (descriptionLength > DESCRIPTION_SHORT_LIMIT && descriptionLength <= DESCRIPTION_MAX) {
      warnings.push(`description has ${descriptionLength} characters; one claude.ai help page says ${DESCRIPTION_SHORT_LIMIT}`);
    }
  }
  const lineCount = text.split('\n').length;
  if (lineCount > SKILL_MD_LINES_ADVISED) warnings.push(`SKILL.md has ${lineCount} lines; under ${SKILL_MD_LINES_ADVISED} is advised`);
  return { errors, warnings, descriptionLength };
}

/** Every file and folder under a skill folder, sorted, dot files left out. Paths use forward slashes. */
function entriesOf(folder) {
  const out = [{ path: `${folder}/`, dir: true }];
  const walk = (abs) => {
    const items = readdirSync(abs, { withFileTypes: true })
      .filter((d) => !d.name.startsWith('.'))
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
    for (const d of items) {
      const full = join(abs, d.name);
      const rel = relative(ROOT, full).split(sep).join('/');
      if (d.isDirectory()) {
        out.push({ path: `${rel}/`, dir: true });
        walk(full);
      } else if (d.isFile()) {
        out.push({ path: rel, dir: false, data: readFileSync(full) });
      }
    }
  };
  walk(join(ROOT, folder));
  return out;
}

// ---------------------------------------------------------------------------
// A small ZIP writer (PKWARE APPNOTE 6.3: local headers, central directory, end record)
// ---------------------------------------------------------------------------

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** DOS date and time of the fixed build timestamp. */
function dosStamp() {
  const epoch = Number(process.env.SOURCE_DATE_EPOCH);
  const d = Number.isFinite(epoch) && epoch > 315532800 ? new Date(epoch * 1000) : new Date(Date.UTC(1980, 0, 1));
  const time = (d.getUTCHours() << 11) | (d.getUTCMinutes() << 5) | Math.floor(d.getUTCSeconds() / 2);
  const date = ((d.getUTCFullYear() - 1980) << 9) | ((d.getUTCMonth() + 1) << 5) | d.getUTCDate();
  return { time, date };
}

function buildZip(entries) {
  const { time, date } = dosStamp();
  const UTF8_NAMES = 0x0800;
  const locals = [];
  const centrals = [];
  let offset = 0;

  for (const e of entries) {
    const name = Buffer.from(e.path, 'utf8');
    const raw = e.dir ? Buffer.alloc(0) : e.data;
    const deflated = e.dir ? raw : deflateRawSync(raw, { level: 9 });
    const useDeflate = !e.dir && deflated.length < raw.length;
    const body = useDeflate ? deflated : raw;
    const method = useDeflate ? 8 : 0;
    const crc = e.dir ? 0 : crc32(raw);
    const mode = e.dir ? 0o040755 : 0o100644;
    const externalAttrs = ((mode << 16) | (e.dir ? 0x10 : 0)) >>> 0;

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(UTF8_NAMES, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(raw.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, name, body);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE((3 << 8) | 20, 4); // made by: Unix, spec 2.0
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(UTF8_NAMES, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(date, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(body.length, 20);
    central.writeUInt32LE(raw.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(externalAttrs, 38);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, name);

    offset += local.length + name.length + body.length;
  }

  const centralDir = Buffer.concat(centrals);
  if (entries.length > 0xffff || offset > 0xffffffff || centralDir.length > 0xffffffff) {
    throw new Error('too large for a plain ZIP (no ZIP64 here)');
  }
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDir.length, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);
  return Buffer.concat([...locals, centralDir, end]);
}

/** Read a ZIP back through its central directory and check it holds exactly what was meant. */
function verifyZip(buf, folder, entries) {
  const endAt = buf.length - 22;
  if (buf.readUInt32LE(endAt) !== 0x06054b50) throw new Error('no end record');
  const count = buf.readUInt16LE(endAt + 10);
  let p = buf.readUInt32LE(endAt + 16);
  if (count !== entries.length) throw new Error(`holds ${count} entries, expected ${entries.length}`);
  const names = [];
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('broken central directory');
    const method = buf.readUInt16LE(p + 10);
    const crc = buf.readUInt32LE(p + 16);
    const size = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localAt = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nameLen);
    const dataAt = localAt + 30 + buf.readUInt16LE(localAt + 26) + buf.readUInt16LE(localAt + 28);
    const body = buf.subarray(dataAt, dataAt + size);
    const raw = method === 8 ? inflateRawSync(body) : body;
    if (crc32(raw) !== crc) throw new Error(`${name}: checksum does not match`);
    const expected = entries[i];
    if (expected.path !== name) throw new Error(`entry ${i} is ${name}, expected ${expected.path}`);
    if (!expected.dir && !raw.equals(expected.data)) throw new Error(`${name}: content differs from the file`);
    if (!name.startsWith(`${folder}/`)) throw new Error(`${name} is not inside ${folder}/`);
    names.push(name);
    p += 46 + nameLen + extraLen + commentLen;
  }
  if (!names.includes(`${folder}/SKILL.md`)) throw new Error(`${folder}/SKILL.md is missing`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const outDir = resolve(args.find((a) => !a.startsWith('--')) ?? join(ROOT, 'dist'));

const folders = skillFolders();
if (folders.length === 0) {
  console.error('No skill folders found (a skill folder holds a SKILL.md).');
  process.exit(1);
}

let failed = false;
const checked = folders.map((folder) => ({ folder, ...checkSkill(folder) }));
for (const c of checked) {
  for (const e of c.errors) {
    console.error(`ERROR  ${c.folder}: ${e}`);
    failed = true;
  }
  for (const w of c.warnings) console.warn(`note   ${c.folder}: ${w}`);
}
if (failed) {
  console.error('Nothing was written. Fix the errors above and run again.');
  process.exit(1);
}
if (checkOnly) {
  console.log(`${folders.length} skills pass the checks.`);
  process.exit(0);
}

mkdirSync(outDir, { recursive: true });
for (const folder of folders) {
  const entries = entriesOf(folder);
  const zip = buildZip(entries);
  verifyZip(zip, folder, entries);
  const file = join(outDir, `${folder}.zip`);
  writeFileSync(file, zip);
  const files = entries.filter((e) => !e.dir).length;
  console.log(`${folder}.zip  ${zip.length} bytes  ${files} files`);
}
console.log(`Wrote ${folders.length} ZIPs to ${outDir}`);
