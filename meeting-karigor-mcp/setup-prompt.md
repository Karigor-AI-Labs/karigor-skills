# Setup prompt: connect your AI to Meeting Karigor

**Who this is for:** a person who has just accepted their invitation to Karigor and finished signing up. Copy the box below and paste it, as your first message, into the AI you want to use: Claude (web, desktop or Claude Code), ChatGPT, Gemini or Codex. Your AI then walks you through connecting Karigor and installing this skill, one step at a time, and checks what you can use. The same prompt in Bangla is further down. Using Claude on a phone? `phone-setup-prompt.md` is a shorter prompt made for that.

**Before you start:**
- Sign in to the Karigor app once, with the email your invitation was sent to.
- Your organization's owner and Karigor turn your access on. If something is not on yet, your AI tells you what is off and who turns it on, or that you only need to reconnect.

**Who does what:**
- **You tap.** Every button, every link and every sign-in: adding the Karigor connector, uploading the skill, reconnecting. Your AI cannot click in your browser or your settings, and it cannot add a connector or a skill to your account.
- **Your AI guides, checks and reads.** It tells you what to tap, calls `myAccess` to check your access, and reads your briefs and meetings. In a terminal app (Claude Code, Codex, Gemini CLI) it can also run the setup commands, each one only after you say yes.

## The prompt (English)

```
I have just accepted my invitation to Karigor and finished signing up. Please set me up to use Meeting Karigor from you, one step at a time. Wait for me after each step.

WHAT WE WILL DO
1. Connect Karigor's MCP server to you.
2. Install the meeting-karigor-mcp skill.
3. Reconnect, then check my access with the myAccess tool.
4. Show me what I can do.
First tell me which AI app you are (Claude on the web, desktop or phone, Claude Code, ChatGPT, Gemini, Codex or another), and use the steps for it below. If you are not sure, ask me.

WHO DOES WHAT
- I tap: every button, every link and every sign-in. That includes adding the Karigor connector, uploading the skill and reconnecting.
- You guide, check and read: you tell me what to tap, call myAccess, and read my briefs and meetings. You cannot add a connector or a skill to my account.

RULES FOR YOU
- You cannot click in my browser or open my settings for me. Tell me exactly what to press, and I press it.
- I connect with my own Karigor sign-in (OAuth), in my browser. Never ask me for a password, an API key or a token, and never put one in a chat or a configuration file.
- Never change a Karigor setting yourself, and never ask a browser tool to. Which tools I can use is decided only by people.
- If you are not sure of a menu name in your own app, say "look for" and describe it. Never invent a button name.
- In a terminal app, show me each command first, and run it only after I say yes.

STEP 1: CONNECT KARIGOR (I tap; in a terminal app, you run the command after my yes)
The server address, exactly, with no slash at the end:
https://rightful-elk-127.convex.site/mcp
I sign in with the same Karigor account I use in the app, in a browser where no other Karigor account is signed in.
- Claude on the web or desktop, Free, Pro or Max plan: open Customize, Connectors, press "+ Add", then "Add custom connector". Name: Karigor. URL: the address above. Press Continue and keep the sign-in settings Claude finds; for the OAuth client, "Use Claude's published identity (Recommended)". Press Add, then sign in when asked. If sign-in fails, remove the connector and add it again with "Register automatically" as the OAuth client, and send Karigor the exact error. In a chat, turn the connector on with the "+" button, then Connectors. The Free plan allows one custom connector.
- The Claude app on a phone: Settings, Connectors, "+", Add custom connector, with the same name, URL and sign-in settings, then Add and sign in. In a chat, tap "+" in the message box, then Connectors, and turn Karigor on.
- Claude Team or Enterprise plan: an Owner of our Claude organization first adds the connector under Organization settings, Connectors. Then I open Customize, Connectors, find Karigor and press Connect.
- Claude Code: in a terminal, run
  claude mcp add --transport http --scope user karigor https://rightful-elk-127.convex.site/mcp
  then sign in with
  claude mcp login karigor
  or open /mcp inside Claude Code and sign in there. If the name karigor is already used, pick another name.
- Codex: run
  codex mcp add karigor --url https://rightful-elk-127.convex.site/mcp
  then
  codex mcp login karigor
- Gemini CLI: run
  gemini mcp add --transport http --scope user karigor https://rightful-elk-127.convex.site/mcp
  then type /mcp auth karigor inside Gemini CLI.
- ChatGPT on the web: look for Plugins (chatgpt.com/plugins), the plus button, then "Add custom MCP server". Give it the name Karigor, put the address above under Connection, and choose sign-in by OAuth. Read the risk warning and press "I understand and want to continue", then "Create as a plugin". Find the plugin under my personal plugins and install it. To use it, type @ in the chat's prompt box and pick Karigor (if ChatGPT shows a Chat and a Work tab, in a Work chat). Whether this is offered depends on my plan and on my workspace's rules; OpenAI's help says tools that change things, such as writing a brief, need a Business, Enterprise or Edu workspace. If I do not have it, tell me so, and go on to step 2: the skill still guides me through the app.
- The Gemini app on the web: look for a way to add a custom MCP server or connector. If there is none, tell me so, and go on to step 2: the skill still guides me through the app.

STEP 2: INSTALL THE SKILL (I tap; you cannot add it to my account)
The skill is the folder meeting-karigor-mcp in github.com/Karigor-AI-Labs/karigor-skills.
- Claude Code: copy the folder to ~/.claude/skills/meeting-karigor-mcp/. For example: git clone https://github.com/Karigor-AI-Labs/karigor-skills, then copy karigor-skills/meeting-karigor-mcp into ~/.claude/skills/.
- Claude on the web, desktop or phone: I do this once.
  1. I open this link in my browser. It downloads one file, meeting-karigor-mcp.zip, and I do not unzip it:
     https://github.com/Karigor-AI-Labs/karigor-skills/releases/download/v1.5.1/meeting-karigor-mcp.zip
  2. I open Customize, Skills, press "+", then "+ Create skill", then "Upload a skill", and upload that file. If the skill shows as off, I turn it on.
  3. Anthropic documents this page on claude.ai and in the desktop app. If my phone app shows no Skills page, I do this one step on claude.ai or in the desktop app; the skill then works in my phone chats too.
  4. If the link does not open, I zip the meeting-karigor-mcp folder myself, from the folder above it, so that the ZIP holds the folder itself, and upload that ZIP.
  Code execution must be on: on my own plan, at Settings, Capabilities ("Code execution and file creation", called "Create and edit files" in newer settings; on a phone, I tap my name in the sidebar, then Settings, Capabilities); on Team or Enterprise, an Owner checks that both code execution ("Cloud code execution and file creation" on Team, "Code execution and file creation" on Enterprise) and Skills are on, at Organization settings, Plugins & skills, Policy tab.
- Codex: copy the folder to ~/.agents/skills/meeting-karigor-mcp/.
- Gemini CLI: copy the folder to ~/.gemini/skills/meeting-karigor-mcp/ (or ~/.agents/skills/meeting-karigor-mcp/).
- ChatGPT and the Gemini app: open chatgpt-instructions.md in that folder. With Karigor connected in ChatGPT, start a chat, pick Karigor with @, and paste that file's box (not this setup prompt) as the first message. A Custom GPT, a Project or a Gem with the box in its instructions only guides me through the app: it does not reach Karigor's tools.

STEP 3: RECONNECT, THEN CHECK MY ACCESS (I reconnect; you call myAccess)
Your tool list is read when you connect, and it does not refresh by itself. Ask me to reconnect Karigor (in Claude Code, open /mcp, pick Karigor, then Reconnect; in ChatGPT, refresh the Karigor plugin on its details page), or to start a new chat. Do not add Karigor a second time. Then call myAccess. It changes nothing and costs nothing.
In ChatGPT, this chat has no Karigor tools unless I picked Karigor in it. Ask me to open a new chat (a Work chat if ChatGPT shows the tabs), type @, pick Karigor, paste the box from step 2, and ask there for myAccess; the rest of step 3 and step 4 happen in that chat. A chat where Karigor was not picked has no Karigor tools, and that says nothing about my organization's switches.
Tell me in plain words:
- principalType should be "member", and Meeting Karigor's status should be "on".
- canUse is what I can use now.
If something is missing, first compare canUse with your tool list. Your tool list was read when I connected; myAccess is read now. If canUse names a tool your list lacks, nothing is off: ask me to reconnect. In ChatGPT, a tool that canUse names and ChatGPT still does not offer after a refresh is a ChatGPT limit (my plan, my workspace's rules or the plugin's own tool switches), not a Karigor switch. Say a switch is off only when myAccess or a refused call says so: then tell me which switch it is and who turns it on, and quote Karigor's own sentence word for word.
- No Karigor tools at all, or no myAccess: in ChatGPT, first check that I picked Karigor with @ in this chat. If I did, MCP or the tools are not on in my organization yet, or I connected before they were. My organization's owner turns MCP and each tool on in the Karigor app at Settings, MCP access. Or my account is not in the organization yet: check I accepted the invite and signed in to the Karigor app with that same email. Then I reconnect.
- Meeting Karigor "is not turned on for MCP in your organization", or "you do not have MCP access to Meeting Karigor": only a Karigor super admin can do this. I ask Karigor at hello@karigor.ai. If I cannot open Meeting Karigor in the app either, that comes first: my organization's owner or an admin adds it to my access, or Karigor if my organization does not have Meeting Karigor.
- A tool under offInYourOrg, for example meetingTranscript: my organization's owner turns it on at Settings, MCP access.
- Tools such as listAgents or kbSearch appear: I signed in with a Karigor team account. I sign out and connect again with my own account.
- "MCP caller has no organization.": my account has not joined my organization yet. I accept the invitation with the email it was sent to.
Never try to fix a switch yourself, and never retry a refused call in a loop.

STEP 4: SHOW ME WHAT I CAN DO (you read; I choose)
Call meetingBriefs and meetingList. Both only read. Then tell me, in a few lines:
- Before a meeting, I can plan it with you: you write a brief with an agenda (meetingBriefCreate). Starting the meeting stays mine, in the app: New meeting, check the brief, then Record.
- After a meeting, you can read its record (meetingRecord), and the transcript if my organization's owner turned meetingTranscript on, and give me the decisions, the action items with owners, the open questions and, when I ask, a follow-up draft that I send myself.
- These stay in the app, by my own click: Record, Upload & analyse, Run, ticking items, Minutes PDF and Send minutes. Meeting Karigor's own analysis runs in the app.

Answer in the language I write in. If I write in Bangla, answer in Bangladeshi Bangla: keep button, tab and tool names in English, as the app shows them, and write every other word in Bangla.
In Bangla: -টা, never -টি; কি not কী; নাই not নেই; হল not হলো; always আপনি; short sentences, ordinary words.
```

## বাংলায়

**কার জন্য:** যিনি এইমাত্র Karigor-এর আমন্ত্রণের লিংক খুলে সাইন আপ শেষ করেছেন। নিচের বক্সের লেখাটা কপি করে আপনার পছন্দের AI-তে (Claude, ChatGPT, Gemini বা Codex) প্রথম মেসেজ হিসেবে পেস্ট করুন। আপনার AI তখন ধাপে ধাপে দেখিয়ে দিবে কিভাবে Karigor যুক্ত করবেন আর এই skill ইনস্টল করবেন। তারপর দেখে নিবে আপনি কি কি ব্যবহার করতে পারেন। ফোনে Claude ব্যবহার করলে `phone-setup-prompt.md` দেখুন: সেটা ফোনের জন্য বানানো ছোট একটা লেখা।

**শুরু করার আগে:**
- যে ইমেইলে আমন্ত্রণ এসেছে, সেই ইমেইল দিয়ে একবার Karigor অ্যাপে সাইন ইন করুন।
- আপনার অ্যাক্সেস চালু করার কাজটা আপনার প্রতিষ্ঠানের owner আর Karigor-এর। কিছু চালু না থাকলে আপনার AI বলে দিবে কোনটা বন্ধ, আর কে চালু করবেন। অথবা বলে দিবে কখন শুধু সংযোগটা একবার বন্ধ করে আবার চালু করলেই হবে।

**কে কি করবেন:**
- **চাপবেন আপনি।** প্রতিটা বাটন, প্রতিটা লিংক, প্রতিটা সাইন ইন: Karigor connector যোগ করা, skill আপলোড করা, সংযোগটা আবার চালু করা। আপনার AI আপনার ব্রাউজারে বা সেটিংসে ক্লিক করতে পারে না, আর আপনার অ্যাকাউন্টে কোনো connector বা skill যোগ করতে পারে না।
- **আপনার AI পথ দেখাবে, যাচাই করবে আর পড়বে।** কোথায় চাপতে হবে বলে দিবে, `myAccess` দিয়ে আপনার অ্যাক্সেস দেখবে, আর আপনার ব্রিফ আর মিটিং পড়বে। টার্মিনাল অ্যাপে (Claude Code, Codex, Gemini CLI) সেটআপের কমান্ডও চালাতে পারবে, তবে প্রতিটা কমান্ড আপনি হ্যাঁ বলার পরে।

```
আমি এইমাত্র Karigor-এর আমন্ত্রণের লিংক খুলে সাইন আপ শেষ করেছি। আমি আপনার এখান থেকেই Meeting Karigor ব্যবহার করতে চাই। ধাপে ধাপে সব ঠিক করে নিতে আমাকে সাহায্য করুন। প্রতিটা ধাপের পরে থামবেন, আমি বললে তবে পরের ধাপে যাবেন।

আমরা যা করব
১. Karigor-এর MCP সার্ভার আপনার সাথে যুক্ত করব।
২. meeting-karigor-mcp skill ইনস্টল করব।
৩. Karigor-এর সংযোগটা একবার বন্ধ করে আবার চালু করব, তারপর myAccess টুল দিয়ে আমার অ্যাক্সেস দেখব।
৪. আমি কি কি করতে পারি, আপনি দেখাবেন।
শুরুতে বলুন আপনি কোন AI অ্যাপ (ওয়েব, ডেস্কটপ বা ফোনের Claude, Claude Code, ChatGPT, Gemini, Codex, নাকি অন্য কিছু), আর নিচে সেটার ধাপগুলা মেনে চলুন। নিশ্চিত না হলে আমাকে জিজ্ঞেস করুন।

কে কি করবেন
- চাপব আমি: প্রতিটা বাটন, প্রতিটা লিংক, প্রতিটা সাইন ইন। Karigor connector যোগ করা, skill আপলোড করা আর সংযোগটা আবার চালু করাও এর মধ্যে পড়ে।
- আপনি পথ দেখাবেন, যাচাই করবেন আর পড়বেন: কোথায় চাপতে হবে বলবেন, myAccess চালাবেন, আর আমার ব্রিফ আর মিটিং পড়বেন। আমার অ্যাকাউন্টে কোনো connector বা skill আপনি যোগ করতে পারবেন না।

আপনার জন্য নিয়ম
- আপনি আমার ব্রাউজারে ক্লিক করতে বা আমার সেটিংস খুলতে পারবেন না। ঠিক কোথায় চাপতে হবে বলে দিন, চাপব আমি।
- আমি নিজের ব্রাউজারে, নিজের Karigor অ্যাকাউন্টে সাইন ইন করে যুক্ত হব (OAuth)। আমার কাছে কখনো পাসওয়ার্ড, API key বা টোকেন চাইবেন না, আর চ্যাটে বা কোনো কনফিগারেশন ফাইলে কখনো সেগুলা বসাবেন না।
- Karigor-এর কোনো সেটিং নিজে কখনো বদলাবেন না, কোনো ব্রাউজার টুলকেও বদলাতে বলবেন না। কোন টুল আমি ব্যবহার করতে পারব, সেটা ঠিক করবে মানুষ, কোনো AI না।
- নিজের অ্যাপের কোনো মেনুর নাম নিশ্চিত না জানলে "খুঁজে দেখুন" বলে বর্ণনা দিন। কোনো বাটনের নাম বানিয়ে বলবেন না।
- টার্মিনাল অ্যাপে প্রতিটা কমান্ড আগে আমাকে দেখাবেন, আর আমি হ্যাঁ বললে তবেই চালাবেন।

ধাপ ১: KARIGOR যুক্ত করা (চাপব আমি; টার্মিনাল অ্যাপে আমি হ্যাঁ বললে কমান্ড চালাবেন আপনি)
সার্ভারের ঠিকানা, হুবহু, শেষে কোনো স্ল্যাশ ছাড়া:
https://rightful-elk-127.convex.site/mcp
অ্যাপে যে Karigor অ্যাকাউন্ট ব্যবহার করি, সেটা দিয়েই সাইন ইন করব। এমন ব্রাউজারে করব, যেখানে অন্য কোনো Karigor অ্যাকাউন্ট খোলা নাই।
- ওয়েব বা ডেস্কটপের Claude, Free, Pro বা Max প্ল্যান: Customize, Connectors খুলে "+ Add", তারপর "Add custom connector" চাপুন। নাম: Karigor। URL: উপরের ঠিকানা। Continue চাপুন। Claude নিজে যে সাইন-ইন সেটিং খুঁজে পায়, সেটা বদলাবেন না। OAuth client-এর জায়গায় "Use Claude's published identity (Recommended)" বেছে নিন। Add চাপুন, তারপর সাইন ইন করতে বললে সাইন ইন করুন। সাইন ইন কাজ না করলে connector-টা সরিয়ে ফেলুন (Remove), তারপর আবার যোগ করুন, এবার OAuth client-এ "Register automatically" বেছে নিন। যে ভুলের বার্তা দেখায়, সেটা হুবহু Karigor-কে পাঠান। চ্যাটে "+" বাটন, তারপর Connectors থেকে connector-টা চালু করুন। Free প্ল্যানে custom connector একটাই রাখা যায়।
- ফোনের Claude অ্যাপ: Settings, Connectors, "+", Add custom connector। নাম, URL আর সাইন-ইন সেটিং উপরের মতোই। তারপর Add চেপে সাইন ইন করুন। চ্যাটে মেসেজ লেখার ঘরের "+" চাপুন, তারপর Connectors, আর Karigor চালু করুন।
- Claude Team বা Enterprise প্ল্যান: আগে আমাদের Claude প্রতিষ্ঠানের একজন Owner connector-টা যোগ করবেন, Organization settings-এর Connectors থেকে। তারপর আমি Customize, Connectors খুলে Karigor খুঁজে Connect চাপব।
- Claude Code: টার্মিনালে চালান
  claude mcp add --transport http --scope user karigor https://rightful-elk-127.convex.site/mcp
  তারপর সাইন ইন করুন
  claude mcp login karigor
  অথবা Claude Code-এর ভিতরে /mcp খুলে সেখান থেকে সাইন ইন করুন। karigor নামটা আগে থেকে ব্যবহার হয়ে থাকলে অন্য একটা নাম দিন।
- Codex: চালান
  codex mcp add karigor --url https://rightful-elk-127.convex.site/mcp
  তারপর
  codex mcp login karigor
- Gemini CLI: চালান
  gemini mcp add --transport http --scope user karigor https://rightful-elk-127.convex.site/mcp
  তারপর Gemini CLI-এর ভিতরে লিখুন /mcp auth karigor
- ওয়েবের ChatGPT: Plugins (chatgpt.com/plugins), প্লাস বাটন, তারপর "Add custom MCP server" খুঁজে দেখুন। নাম দিন Karigor, Connection-এর ঘরে উপরের ঠিকানা বসান, আর সাইন-ইন হিসেবে OAuth বেছে নিন। সতর্কবার্তাটা পড়ে "I understand and want to continue" চাপুন, তারপর "Create as a plugin" চাপুন। এরপর নিজের personal plugins-এর মধ্যে প্লাগইনটা খুঁজে ইনস্টল করুন। ব্যবহার করতে, চ্যাটের লেখার ঘরে @ লিখে Karigor বেছে নিন (Chat আর Work দুইটা ট্যাব থাকলে Work-এর চ্যাটে)। এই অপশনটা আছে কিনা, সেটা আমার প্ল্যান আর ওয়ার্কস্পেসের নিয়মের উপর নির্ভর করে। OpenAI-এর সাহায্য পাতায় বলা আছে, যেসব টুল কিছু বদলায় (যেমন ব্রিফ লেখা), সেগুলার জন্য Business, Enterprise বা Edu ওয়ার্কস্পেস লাগে। না পেলে আমাকে বলুন, আর ধাপ ২-এ চলে যান: তখনো skill-টা আমাকে অ্যাপের প্রতিটা ধাপ বলে দিবে।
- ওয়েবের Gemini অ্যাপ: custom MCP server বা connector যোগ করার কোনো জায়গা খুঁজে দেখুন। না থাকলে আমাকে বলুন, আর ধাপ ২-এ চলে যান: তখনো skill-টা আমাকে অ্যাপের প্রতিটা ধাপ বলে দিবে।

ধাপ ২: SKILL ইনস্টল করা (চাপব আমি; আমার অ্যাকাউন্টে আপনি এটা যোগ করতে পারবেন না)
skill-টা হল meeting-karigor-mcp ফোল্ডারটা, এখানে আছে: github.com/Karigor-AI-Labs/karigor-skills
- Claude Code: ফোল্ডারটা এই জায়গায় কপি করুন: ~/.claude/skills/meeting-karigor-mcp/
  যেমন, প্রথমে এই কমান্ড চালান: git clone https://github.com/Karigor-AI-Labs/karigor-skills
  তারপর karigor-skills/meeting-karigor-mcp ফোল্ডারটা কপি করে রাখুন এই ফোল্ডারের ভিতরে: ~/.claude/skills/
- ওয়েব, ডেস্কটপ বা ফোনের Claude: এটা আমি একবার নিজে করব।
  ১. এই লিংকটা ব্রাউজারে খুলব। এতে meeting-karigor-mcp.zip নামে একটা ফাইল ডাউনলোড হবে। ফাইলটা আনজিপ করব না:
     https://github.com/Karigor-AI-Labs/karigor-skills/releases/download/v1.5.1/meeting-karigor-mcp.zip
  ২. Customize, Skills খুলে "+", তারপর "+ Create skill", তারপর "Upload a skill" চেপে ফাইলটা আপলোড করব। skill-টা বন্ধ দেখালে চালু করব।
  ৩. Anthropic এই পাতার কথা লিখেছে claude.ai আর ডেস্কটপ অ্যাপের জন্য। আমার ফোনের অ্যাপে Skills পাতা না থাকলে শুধু এই ধাপটা claude.ai-তে বা ডেস্কটপ অ্যাপে করব। তারপর ফোনের চ্যাটেও skill-টা কাজ করবে।
  ৪. লিংকটা না খুললে meeting-karigor-mcp ফোল্ডারটা নিজে ZIP করব, এর উপরের ফোল্ডার থেকে, যেন ZIP-এর ভিতরে ফোল্ডারটাই থাকে। তারপর সেই ZIP আপলোড করব।
  এর জন্য Code execution চালু থাকতে হবে। নিজের প্ল্যানে Settings-এর Capabilities-এ "Code execution and file creation" চালু করুন (নতুন সেটিংসে এর নাম "Create and edit files"; ফোনে পাশের মেনুতে নিজের নাম চাপুন, তারপর Settings, Capabilities)। Team বা Enterprise প্ল্যানে একজন Owner দেখে নিবেন যে code execution ("Cloud code execution and file creation" বা "Code execution and file creation") আর Skills দুইটাই চালু আছে। দুইটাই আছে Organization settings-এর Plugins & skills-এ, Policy ট্যাবে।
- Codex: ফোল্ডারটা এই জায়গায় কপি করুন: ~/.agents/skills/meeting-karigor-mcp/
- Gemini CLI: ফোল্ডারটা এই দুইটার যেকোনো একটায় কপি করুন: ~/.gemini/skills/meeting-karigor-mcp/ অথবা ~/.agents/skills/meeting-karigor-mcp/
- ChatGPT আর Gemini অ্যাপ: ওই ফোল্ডারের chatgpt-instructions.md ফাইলটা খুলুন। ChatGPT-তে Karigor যুক্ত থাকলে একটা চ্যাট খুলে @ দিয়ে Karigor বেছে নিন। তারপর ওই ফাইলের বক্সের লেখাটা (এই সেটআপের লেখাটা না) সেই চ্যাটের প্রথম মেসেজ হিসেবে পেস্ট করুন। Custom GPT, Project বা Gem-এর instructions-এ বসালে সেটা শুধু অ্যাপের ধাপগুলা বলে দিবে, Karigor-এর টুল পাবে না।

ধাপ ৩: সংযোগটা নতুন করে চালু করা, তারপর আমার অ্যাক্সেস দেখা (সংযোগ চালু করব আমি; myAccess চালাবেন আপনি)
যুক্ত হওয়ার সময়ই আপনি টুলের তালিকাটা একবার পান, পরে সেটা নিজে থেকে বদলায় না। তাই আমাকে বলুন Karigor-এর সংযোগটা একবার বন্ধ করে আবার চালু করতে (Claude Code-এ /mcp খুলে Karigor বেছে Reconnect; ChatGPT-তে Karigor প্লাগইনের নিজের পাতায় গিয়ে রিফ্রেশ), অথবা নতুন একটা চ্যাট খুলতে। Karigor নতুন করে যোগ করতে হবে না। তারপর myAccess চালান। এটা কিছু বদলায় না, কোনো খরচও নাই।
ChatGPT-তে এই চ্যাটে Karigor বেছে না নিলে এখানে Karigor-এর কোনো টুল থাকে না। তাই আমাকে বলুন একটা নতুন চ্যাট খুলতে (Chat আর Work দুইটা ট্যাব থাকলে Work-এর চ্যাট), @ লিখে Karigor বেছে নিতে, ধাপ ২-এর বক্সের লেখাটা পেস্ট করতে, আর সেখানেই myAccess চাইতে। ধাপ ৩-এর বাকিটা আর ধাপ ৪ সেই চ্যাটেই হবে। যে চ্যাটে Karigor বেছে নেওয়া হয় নাই, সেখানে Karigor-এর টুল থাকে না, আর তাতে আমার প্রতিষ্ঠানের সুইচগুলা নিয়ে কিছুই বোঝা যায় না।
সহজ ভাষায় আমাকে বলুন:
- principalType-এ থাকবে "member", আর Meeting Karigor-এর status-এ থাকবে "on"।
- canUse-এ থাকে সেই টুলগুলা, যেগুলা আমি এখনই ব্যবহার করতে পারি।
কিছু না থাকলে আগে canUse আর আপনার টুলের তালিকা মিলিয়ে দেখুন। টুলের তালিকাটা আপনি পেয়েছেন আমি যুক্ত হওয়ার সময়, আর myAccess দেখায় এই মুহূর্তের অবস্থা। canUse-এ এমন কোনো টুল থাকলে যেটা আপনার তালিকায় নাই, তাহলে কিছুই বন্ধ নাই: আমাকে সংযোগটা একবার বন্ধ করে আবার চালু করতে বলুন। ChatGPT-তে রিফ্রেশ করার পরও canUse-এর কোনো টুল ChatGPT না দেখালে সেটা ChatGPT-এর সীমা (আমার প্ল্যান, ওয়ার্কস্পেসের নিয়ম, বা প্লাগইনের নিজের টুল সুইচ), Karigor-এর কোনো সুইচ না। কোনো সুইচ বন্ধ, এটা বলবেন শুধু তখন, যখন myAccess বা Karigor-এর ফিরিয়ে দেওয়া কোনো কল সেটা বলে। তখন বলুন কোন সুইচ, আর কে চালু করবেন। Karigor-এর নিজের বাক্যটা হুবহু তুলে দিন।
- Karigor-এর কোনো টুলই নাই, বা myAccess নাই: ChatGPT-তে আগে দেখুন, এই চ্যাটে @ দিয়ে Karigor বেছে নিয়েছি কিনা। বেছে নিয়ে থাকলে কারণ হতে পারে: আমার প্রতিষ্ঠানে MCP বা টুলগুলা এখনো চালু হয় নাই, অথবা চালু হওয়ার আগেই আমি যুক্ত হয়েছি। MCP আর প্রতিটা টুল চালু করবেন আমার প্রতিষ্ঠানের owner, Karigor অ্যাপে Settings-এর MCP access পাতা থেকে। আরেকটা কারণ হতে পারে, আমার অ্যাকাউন্ট এখনো প্রতিষ্ঠানে যোগ হয় নাই: দেখে নিব আমন্ত্রণের লিংক খুলে সাইন আপ করেছি কিনা, আর সেই একই ইমেইল দিয়ে Karigor অ্যাপে সাইন ইন করেছি কিনা। তারপর আমি Karigor-এর সংযোগটা একবার বন্ধ করে আবার চালু করব।
- Meeting Karigor "is not turned on for MCP in your organization", অথবা "you do not have MCP access to Meeting Karigor": এটা শুধু Karigor-এর একজন super admin করতে পারেন। আমি Karigor-কে এই ঠিকানায় জানাব: hello@karigor.ai
  আমি অ্যাপেও Meeting Karigor খুলতে না পারলে আগে সেটা ঠিক করতে হবে: আমার প্রতিষ্ঠানের owner বা একজন admin আমার অ্যাক্সেসে সেটা যোগ করবেন। প্রতিষ্ঠানে Meeting Karigor না থাকলে সেটা করবে Karigor।
- offInYourOrg-এ থাকা কোনো টুল, যেমন meetingTranscript: আমার প্রতিষ্ঠানের owner সেটা চালু করবেন, Settings-এর MCP access পাতা থেকে।
- listAgents বা kbSearch-এর মতো টুল দেখা যাচ্ছে: আমি Karigor টিমের কোনো অ্যাকাউন্ট দিয়ে সাইন ইন করেছি। সাইন আউট করে নিজের অ্যাকাউন্ট দিয়ে আবার সাইন ইন করব।
- "MCP caller has no organization.": আমার অ্যাকাউন্ট এখনো আমার প্রতিষ্ঠানে যোগ হয় নাই। যে ইমেইলে আমন্ত্রণ এসেছে, সেই ইমেইল দিয়ে আমন্ত্রণের লিংকটা খুলে সাইন আপ করব।
কোনো সুইচ নিজে ঠিক করার চেষ্টা করবেন না। Karigor যে কল ফিরিয়ে দিয়েছে, আমাকে না জিজ্ঞেস করে সেটা আবার চালাবেন না।

ধাপ ৪: আমি কি কি করতে পারি, দেখান (পড়বেন আপনি; বেছে নিব আমি)
meetingBriefs আর meetingList চালান। দুইটাই শুধু দেখে, কিছু বদলায় না। তারপর অল্প কয়েক লাইনে বলুন:
- মিটিংয়ের আগে আপনার সাথে বসে পরিকল্পনা করতে পারি: আপনি এজেন্ডাসহ একটা ব্রিফ লিখে দিবেন (meetingBriefCreate)। মিটিং শুরু করব আমি নিজে, অ্যাপ থেকে: New meeting চাপব, ব্রিফটা ঠিক আছে কিনা দেখব, তারপর Record চাপব।
- মিটিংয়ের পরে আপনি তার রেকর্ড পড়তে পারবেন (meetingRecord)। আমার প্রতিষ্ঠানের owner meetingTranscript চালু করে থাকলে ট্রান্সক্রিপ্টও পড়তে পারবেন। তারপর আমাকে দিবেন: কি কি সিদ্ধান্ত হল, কে কোন কাজ করবেন, কোন প্রশ্নের উত্তর এখনো বাকি, আর আমি চাইলে একটা ফলো-আপের খসড়া, যেটা আমি নিজে পাঠাব।
- এই বাটনগুলা অ্যাপে আমি নিজে চাপব: Record, Upload & analyse, Run, Minutes PDF আর Send minutes। আইটেমে টিকও আমি নিজে দিব। Meeting Karigor-এর নিজের বিশ্লেষণ চলে অ্যাপে।

আমি যে ভাষায় লিখি, সেই ভাষায় উত্তর দিন। বাংলায় লিখলে বাংলাদেশের বাংলায় উত্তর দিন। বাটন, ট্যাব আর টুলের নাম অ্যাপে যেমন আছে তেমন ইংরেজিতে রাখুন, বাকি সব শব্দ বাংলায় লিখুন।
বাংলায় লিখলে -টি না, -টা লিখবেন (একটা, ব্রিফটা); কী না, কি; নেই না, নাই; হলো না, হল; আর সবসময় আপনি। ছোট বাক্যে, সহজ কথায় লিখবেন।
```

From Karigor Skills by Karigor AI Labs (github.com/Karigor-AI-Labs/karigor-skills). Free under CC BY 4.0.
