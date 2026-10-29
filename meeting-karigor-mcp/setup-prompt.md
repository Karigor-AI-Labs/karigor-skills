# Setup prompt: connect your AI to Meeting Karigor

**Who this is for:** a person who has just accepted their invitation to Karigor and finished signing up. Copy the box below and paste it, as your first message, into the AI you want to use: Claude (web, desktop or Claude Code), ChatGPT, Gemini or Codex. Your AI then walks you through connecting Karigor and installing this skill, one step at a time, and checks what you can use. The same prompt in Bangla is further down.

**Before you start:**
- Sign in to the Karigor app once, with the email your invitation was sent to.
- Your organization's owner and Karigor turn your access on. If something is not on yet, your AI tells you what is off and who turns it on.
- Your AI cannot click in your browser or your settings. It tells you what to press, and you press it.

## The prompt (English)

```
I have just accepted my invitation to Karigor and finished signing up. Please set me up to use Meeting Karigor from you, one step at a time. Wait for me after each step.

WHAT WE WILL DO
1. Connect Karigor's MCP server to you.
2. Install the meeting-karigor-mcp skill.
3. Reconnect, then check my access with the myAccess tool.
4. Show me what I can do.
First tell me which AI app you are (Claude on the web or desktop, Claude Code, ChatGPT, Gemini, Codex or another), and use the steps for it below. If you are not sure, ask me.

RULES FOR YOU
- You cannot click in my browser or open my settings for me. Tell me exactly what to press, and I press it.
- I connect with my own Karigor sign-in (OAuth), in my browser. Never ask me for a password, an API key or a token, and never put one in a chat or a configuration file.
- Never change a Karigor setting yourself, and never ask a browser tool to. Which tools I can use is decided only by people.
- If you are not sure of a menu name in your own app, say "look for" and describe it. Never invent a button name.
- In a terminal app, show me each command first, and run it only after I say yes.

STEP 1: CONNECT KARIGOR
The server address, exactly, with no slash at the end:
https://rightful-elk-127.convex.site/mcp
I sign in with the same Karigor account I use in the app, in a browser where no other Karigor account is signed in.
- Claude on the web or desktop, Free, Pro or Max plan: open Customize, Connectors, press "+ Add", then "Add custom connector". Name: Karigor. URL: the address above. Press Continue and keep the sign-in settings Claude finds; for the OAuth client, "Use Claude's published identity (Recommended)". Press Add, then sign in when asked. In a chat, turn the connector on with the "+" button, then Connectors. The Free plan allows one custom connector.
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
- ChatGPT on the web: look for Plugins (chatgpt.com/plugins), the plus button, then "Add custom MCP server". Give it the name Karigor, put the address above under Connection, and choose sign-in by OAuth. Whether this is offered depends on my plan and on my workspace's rules. If I do not have it, tell me so, and go on to step 2: the skill still guides me through the app.
- The Gemini app on the web: look for a way to add a custom MCP server or connector. If there is none, tell me so, and go on to step 2: the skill still guides me through the app.

STEP 2: INSTALL THE SKILL
The skill is the folder meeting-karigor-mcp in github.com/Karigor-AI-Labs/karigor-skills.
- Claude Code: copy the folder to ~/.claude/skills/meeting-karigor-mcp/. For example: git clone https://github.com/Karigor-AI-Labs/karigor-skills, then copy karigor-skills/meeting-karigor-mcp into ~/.claude/skills/.
- Claude on the web or desktop: I zip the folder, open Customize, Skills, press "+", then "+ Create skill", then "Upload a skill", and upload the ZIP. Code execution must be on: on my own plan, at Settings, Capabilities ("Code execution and file creation", called "Create and edit files" in newer settings); on Team or Enterprise, an Owner turns Skills on under Organization settings, Plugins & skills.
- Codex: copy the folder to ~/.agents/skills/meeting-karigor-mcp/.
- Gemini CLI: copy the folder to ~/.gemini/skills/meeting-karigor-mcp/ (or ~/.agents/skills/meeting-karigor-mcp/).
- ChatGPT and the Gemini app: open chatgpt-instructions.md in that folder and follow it: a Custom GPT, a Project or a Gem, with its box pasted into the instructions.

STEP 3: RECONNECT, THEN CHECK MY ACCESS
Your tool list is read when you connect, and it does not refresh by itself. Ask me to reconnect Karigor (or start a new chat), then call myAccess. It changes nothing and costs nothing.
Tell me in plain words:
- principalType should be "member", and Meeting Karigor's status should be "on".
- canUse is what I can use now.
If something is missing, tell me which switch is off and who turns it on. Quote Karigor's own sentence word for word.
- No Karigor tools at all, or no myAccess: MCP or the tools are not on in my organization yet, or I connected before they were. My organization's owner turns MCP and each tool on in the Karigor app at Settings, MCP access. Then I reconnect.
- Meeting Karigor "is not turned on for MCP in your organization", or "you do not have MCP access to Meeting Karigor": only a Karigor super admin can do this. I ask Karigor at hello@karigor.ai.
- A tool under offInYourOrg, for example meetingTranscript: my organization's owner turns it on at Settings, MCP access.
- Tools such as listAgents or kbSearch appear: I signed in with a Karigor team account. I sign out and connect again with my own account.
- "MCP caller has no organization.": my account has not joined my organization yet. I accept the invitation with the email it was sent to.
Never try to fix a switch yourself, and never retry a refused call in a loop.

STEP 4: SHOW ME WHAT I CAN DO
Call meetingBriefs and meetingList. Both only read. Then tell me, in a few lines:
- Before a meeting, I can plan it with you: you write a brief with an agenda (meetingBriefCreate). Starting the meeting stays mine, in the app: New meeting, check the brief, then Record.
- After a meeting, you can read its record (meetingRecord), and the transcript if my owner turned meetingTranscript on, and give me the decisions, the action items with owners, the open questions and a follow-up draft that I send myself.
- These stay in the app, by my own click: Record, Upload & analyse, Run, ticking items, Minutes PDF and Send minutes. Meeting Karigor's own analysis runs in the app.

Answer in the language I write in. If I write in Bangla, answer in Bangladeshi Bangla, and keep button names in English, as the app shows them.
```

## বাংলায়

**কার জন্য:** যিনি এইমাত্র Karigor-এর আমন্ত্রণ গ্রহণ করে সাইন আপ শেষ করেছেন। নিচের বক্সের লেখাটা কপি করে আপনার পছন্দের AI-তে (Claude, ChatGPT, Gemini বা Codex) প্রথম মেসেজ হিসেবে পেস্ট করুন। আপনার AI তখন এক ধাপ করে Karigor যুক্ত করা আর এই skill ইনস্টল করার কাজে আপনাকে গাইড করবে, তারপর দেখে নিবে আপনি কি কি ব্যবহার করতে পারেন।

**শুরু করার আগে:**
- যে ইমেইলে আমন্ত্রণ এসেছে, সেই ইমেইল দিয়ে একবার Karigor অ্যাপে সাইন ইন করুন।
- আপনার অ্যাক্সেস চালু করেন আপনার প্রতিষ্ঠানের owner আর Karigor। কিছু চালু না থাকলে আপনার AI বলে দিবে কোনটা বন্ধ, আর কে চালু করবেন।
- আপনার AI আপনার ব্রাউজারে বা সেটিংসে ক্লিক করতে পারে না। কোথায় চাপতে হবে সে বলে দিবে, চাপবেন আপনি।

```
আমি এইমাত্র Karigor-এর আমন্ত্রণ গ্রহণ করে সাইন আপ শেষ করেছি। আপনার মাধ্যমে Meeting Karigor ব্যবহার করার জন্য আমাকে এক ধাপ করে সেটআপ করিয়ে দিন। প্রতিটা ধাপের পরে আমার জন্য অপেক্ষা করবেন।

আমরা যা করব
১. Karigor-এর MCP সার্ভার আপনার সাথে যুক্ত করব।
২. meeting-karigor-mcp skill ইনস্টল করব।
৩. আবার যুক্ত করে myAccess টুল দিয়ে আমার অ্যাক্সেস দেখব।
৪. আমি কি কি করতে পারি, আপনি দেখাবেন।
শুরুতে বলুন আপনি কোন AI অ্যাপ (ওয়েব বা ডেস্কটপের Claude, Claude Code, ChatGPT, Gemini, Codex, নাকি অন্য কিছু), আর নিচে সেটার ধাপগুলা মেনে চলুন। নিশ্চিত না হলে আমাকে জিজ্ঞেস করুন।

আপনার জন্য নিয়ম
- আপনি আমার ব্রাউজারে ক্লিক করতে বা আমার সেটিংস খুলতে পারবেন না। ঠিক কোথায় চাপতে হবে বলে দিন, চাপব আমি।
- আমি যুক্ত হব আমার নিজের Karigor সাইন-ইন (OAuth) দিয়ে, আমার ব্রাউজারে। আমার কাছে কখনো পাসওয়ার্ড, API key বা টোকেন চাইবেন না, আর চ্যাটে বা কোনো কনফিগারেশন ফাইলে কখনো সেগুলা বসাবেন না।
- Karigor-এর কোনো সেটিং নিজে কখনো বদলাবেন না, কোনো ব্রাউজার টুলকেও বদলাতে বলবেন না। আমি কোন টুল ব্যবহার করতে পারব, সেটা ঠিক করেন শুধু মানুষ।
- নিজের অ্যাপের কোনো মেনুর নাম নিশ্চিত না জানলে "খুঁজে দেখুন" বলে বর্ণনা দিন। কোনো বাটনের নাম বানিয়ে বলবেন না।
- টার্মিনাল অ্যাপে প্রতিটা কমান্ড আগে আমাকে দেখাবেন, আর আমি হ্যাঁ বললে তবেই চালাবেন।

ধাপ ১: KARIGOR যুক্ত করা
সার্ভারের ঠিকানা, হুবহু, শেষে কোনো স্ল্যাশ ছাড়া:
https://rightful-elk-127.convex.site/mcp
আমি সাইন ইন করব অ্যাপে যে Karigor অ্যাকাউন্ট ব্যবহার করি সেটা দিয়ে, এমন ব্রাউজারে যেখানে অন্য কোনো Karigor অ্যাকাউন্টে সাইন ইন করা নাই।
- ওয়েব বা ডেস্কটপের Claude, Free, Pro বা Max প্ল্যান: Customize, Connectors খুলে "+ Add", তারপর "Add custom connector" চাপুন। নাম: Karigor। URL: উপরের ঠিকানা। Continue চাপুন, Claude যে সাইন-ইন সেটিং খুঁজে পায় সেটাই রাখুন; OAuth client-এ "Use Claude's published identity (Recommended)"। Add চাপুন, তারপর সাইন ইন করতে বললে সাইন ইন করুন। চ্যাটে "+" বাটন, তারপর Connectors থেকে connector-টা চালু করুন। Free প্ল্যানে একটা custom connector রাখা যায়।
- Claude Team বা Enterprise প্ল্যান: আগে আমাদের Claude প্রতিষ্ঠানের একজন Owner, Organization settings, Connectors-এ connector-টা যোগ করবেন। তারপর আমি Customize, Connectors খুলে Karigor খুঁজে Connect চাপব।
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
- ওয়েবের ChatGPT: Plugins (chatgpt.com/plugins), প্লাস বাটন, তারপর "Add custom MCP server" খুঁজে দেখুন। নাম দিন Karigor, Connection-এর ঘরে উপরের ঠিকানা বসান, আর সাইন-ইন হিসেবে OAuth বেছে নিন। এটা পাওয়া যাবে কিনা, তা আমার প্ল্যান আর আমার workspace-এর নিয়মের উপর নির্ভর করে। না পেলে আমাকে বলুন, আর ধাপ ২-এ চলে যান: তখনো skill-টা আমাকে অ্যাপের প্রতিটা ধাপ বলে দিবে।
- ওয়েবের Gemini অ্যাপ: custom MCP server বা connector যোগ করার কোনো জায়গা খুঁজে দেখুন। না থাকলে আমাকে বলুন, আর ধাপ ২-এ চলে যান: তখনো skill-টা আমাকে অ্যাপের প্রতিটা ধাপ বলে দিবে।

ধাপ ২: SKILL ইনস্টল করা
skill-টা হল github.com/Karigor-AI-Labs/karigor-skills-এর meeting-karigor-mcp ফোল্ডার।
- Claude Code: ফোল্ডারটা ~/.claude/skills/meeting-karigor-mcp/-এ কপি করুন। যেমন: git clone https://github.com/Karigor-AI-Labs/karigor-skills, তারপর karigor-skills/meeting-karigor-mcp ফোল্ডারটা ~/.claude/skills/-এর ভিতরে কপি করুন।
- ওয়েব বা ডেস্কটপের Claude: আমি ফোল্ডারটা ZIP করব, Customize, Skills খুলে "+", তারপর "+ Create skill", তারপর "Upload a skill" চেপে ZIP ফাইলটা আপলোড করব। Code execution চালু থাকতে হবে: নিজের প্ল্যানে Settings, Capabilities-এ ("Code execution and file creation", নতুন সেটিংসে নাম "Create and edit files"); Team বা Enterprise-এ একজন Owner, Organization settings, Plugins & skills-এ Skills চালু করবেন।
- Codex: ফোল্ডারটা ~/.agents/skills/meeting-karigor-mcp/-এ কপি করুন।
- Gemini CLI: ফোল্ডারটা ~/.gemini/skills/meeting-karigor-mcp/-এ (অথবা ~/.agents/skills/meeting-karigor-mcp/-এ) কপি করুন।
- ChatGPT আর Gemini অ্যাপ: ওই ফোল্ডারের chatgpt-instructions.md খুলে সেটা মেনে চলুন: একটা Custom GPT, Project বা Gem বানিয়ে তার instructions-এ বক্সের লেখাটা পেস্ট করুন।

ধাপ ৩: আবার যুক্ত করা, তারপর আমার অ্যাক্সেস দেখা
আপনার টুলের তালিকা পড়া হয় যুক্ত হওয়ার সময়, আর সেটা নিজে থেকে বদলায় না। আমাকে Karigor আবার যুক্ত করতে বলুন (বা নতুন চ্যাট খুলতে), তারপর myAccess চালান। এটা কিছু বদলায় না, কোনো খরচও নাই।
সহজ ভাষায় আমাকে বলুন:
- principalType হওয়া উচিত "member", আর Meeting Karigor-এর status হওয়া উচিত "on"।
- canUse হল এখন আমি যা ব্যবহার করতে পারি।
কিছু না থাকলে বলুন কোন সুইচ বন্ধ, আর কে চালু করবেন। Karigor-এর নিজের বাক্যটা হুবহু তুলে দিন।
- Karigor-এর কোনো টুলই নাই, বা myAccess নাই: আমার প্রতিষ্ঠানে MCP বা টুলগুলা এখনো চালু হয় নাই, অথবা চালু হওয়ার আগেই আমি যুক্ত হয়েছি। আমার প্রতিষ্ঠানের owner, Karigor অ্যাপের Settings, MCP access-এ MCP আর প্রতিটা টুল চালু করবেন। তারপর আমি আবার যুক্ত হব।
- Meeting Karigor "is not turned on for MCP in your organization", অথবা "you do not have MCP access to Meeting Karigor": এটা শুধু Karigor-এর একজন super admin করতে পারেন। আমি hello@karigor.ai-তে Karigor-কে জানাব।
- offInYourOrg-এ থাকা কোনো টুল, যেমন meetingTranscript: আমার প্রতিষ্ঠানের owner, Settings, MCP access-এ সেটা চালু করবেন।
- listAgents বা kbSearch-এর মতো টুল দেখা যাচ্ছে: আমি Karigor টিমের কোনো অ্যাকাউন্ট দিয়ে সাইন ইন করেছি। সাইন আউট করে নিজের অ্যাকাউন্ট দিয়ে আবার যুক্ত হব।
- "MCP caller has no organization.": আমার অ্যাকাউন্ট এখনো আমার প্রতিষ্ঠানে যোগ হয় নাই। যে ইমেইলে আমন্ত্রণ এসেছে, সেটা দিয়ে আমন্ত্রণটা গ্রহণ করব।
কোনো সুইচ নিজে ঠিক করার চেষ্টা করবেন না, আর আটকে যাওয়া কোনো কল বারবার চালাবেন না।

ধাপ ৪: আমি কি কি করতে পারি দেখানো
meetingBriefs আর meetingList চালান। দুইটাই শুধু পড়ে। তারপর অল্প কয়েক লাইনে বলুন:
- মিটিংয়ের আগে আপনার সাথে মিটিংয়ের পরিকল্পনা করতে পারি: আপনি এজেন্ডাসহ একটা ব্রিফ লিখবেন (meetingBriefCreate)। মিটিং শুরু করাটা আমার কাজ, অ্যাপ থেকে: New meeting, ব্রিফটা দেখে নেওয়া, তারপর Record।
- মিটিংয়ের পরে আপনি তার রেকর্ড পড়তে পারবেন (meetingRecord), আর আমার owner meetingTranscript চালু করে থাকলে ট্রান্সক্রিপ্টও। তারপর আমাকে দিবেন সিদ্ধান্তগুলা, কে কোন কাজ করবেন, খোলা প্রশ্নগুলা, আর একটা ফলো-আপের খসড়া, যেটা আমি নিজে পাঠাব।
- এগুলা অ্যাপেই থাকবে, আমার নিজের ক্লিকে: Record, Upload & analyse, Run, আইটেমে টিক দেওয়া, Minutes PDF আর Send minutes। Meeting Karigor-এর নিজের বিশ্লেষণ চলে অ্যাপে।

আমি যে ভাষায় লিখি, সেই ভাষায় উত্তর দিন। বাংলায় লিখলে বাংলাদেশের বাংলায় উত্তর দিন, আর বাটনের নাম অ্যাপে যেমন আছে তেমন ইংরেজিতে রাখুন।
```

From Karigor Skills by Karigor AI Labs (github.com/Karigor-AI-Labs/karigor-skills). Free under CC BY 4.0.
