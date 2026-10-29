# Phone setup prompt: Meeting Karigor in Claude on your phone

**Who this is for:** a person who uses the Claude app on a phone and has a Karigor account in an organization that has Meeting Karigor. Paste the box below into a new chat. Claude checks whether Karigor and this skill are already there, tells you what to tap for anything missing, checks your access, and then offers you two things: plan a meeting, or analyse one afterwards. The same prompt in Bangla is further down. On a computer, or in another AI, use `setup-prompt.md` instead.

**Who does what:**
- **You tap.** Every button, every link, every sign-in. Your AI cannot add a connector or a skill to your account, and it never changes a Karigor setting.
- **Your AI checks and reads.** It looks at what it can reach in the chat, tells you the next tap, calls `myAccess` to see your access, and reads your meetings and briefs.

**Before you paste it:** accept your Karigor invitation and sign in to the Karigor app once, with the email the invitation was sent to. In the new chat, tap "+" in the message box, then Connectors, and turn Karigor on if it is listed.

## The prompt (English)

```
I use Claude on my phone and I want to use Meeting Karigor from here. Check my setup, help me add what is missing, then show me what I can do. One step at a time; wait for me after each step.

WHO DOES WHAT
- I tap every button and open every link. You cannot add a connector or a skill to my account, and you never change a Karigor setting. Tell me exactly what to tap.
- Never ask me for a password, an API key or a token.
- If you are not sure of a menu name in my app, say "look for" and describe it. Never invent a button name.

STEP 1: WHAT IS ALREADY HERE
Answer each with yes or no, from what you can see in this chat, never from a guess:
a) The Karigor connector: is myAccess in your tool list? If your tools load only when searched for, search for "myAccess" and "meeting" first.
b) The skill: is meeting-karigor-mcp among the skills you can use in this chat?
If both are yes, go to step 3.

STEP 2: ADD WHAT IS MISSING (I tap, you guide)
No Karigor connector in this chat:
- I tap "+" in the message box, then Connectors, and turn Karigor on. Then I open a new chat and paste this prompt again.
- If Karigor is not in that list, I add it once: Settings, Connectors, "+", Add custom connector. Name: Karigor. URL, exactly, with no slash at the end: https://rightful-elk-127.convex.site/mcp
  I keep the sign-in settings Claude finds ("Use Claude's published identity"), tap Add, and sign in with my own Karigor account, the one my invitation was sent to.
- On a Claude Team or Enterprise plan, an Owner of our Claude organization adds the connector first, in Organization settings, Connectors. Then I look for Karigor under Connectors and tap Connect.
No meeting-karigor-mcp skill (you cannot add it for me; I do this once):
1. Code execution must be on: I tap my name in the sidebar, then Settings, Capabilities, and turn on "Code execution and file creation".
2. I open this link in my browser. It downloads one file, meeting-karigor-mcp.zip, and I do not unzip it:
   https://github.com/Karigor-AI-Labs/karigor-skills/releases/download/v1.5.1/meeting-karigor-mcp.zip
3. I upload that file at Customize, Skills: "+", then "+ Create skill", then "Upload a skill". Anthropic documents this page on claude.ai and in the desktop app. If my phone app shows Skills, I do it there; if not, I do this one step on claude.ai or in the desktop app, and the skill then works in my phone chats too.
4. If the skill shows as off, I turn it on. Then I open a new chat and paste this prompt again.
If the link does not open, say so: the skill is the folder meeting-karigor-mcp at github.com/Karigor-AI-Labs/karigor-skills, and I ask Karigor at hello@karigor.ai.
If only the skill is missing, you may still do step 3 now.

STEP 3: CHECK MY ACCESS
Call myAccess. It changes nothing and costs nothing. Tell me in plain words:
- principalType should be "member", and Meeting Karigor's status should be "on".
- canUse is what I can use now.
If canUse names a tool your list lacks, nothing is off: your list was read when I connected. Ask me to open a new chat with Karigor on.
Say a switch is off only when myAccess or a refused call says so. Then quote Karigor's sentence word for word and tell me who turns it on: my organization's owner, in the Karigor app at Settings, MCP access, or a Karigor super admin, whom I ask at hello@karigor.ai.
If tools such as listAgents or kbSearch appear, I signed in with a Karigor team account: I sign out and connect again with my own.
Never retry a refused call in a loop.

STEP 4: SHOW ME WHAT I CAN DO
Call meetingBriefs and meetingList. Both only read. Then offer me two things, in a few lines:
1. Plan a meeting. I tell you the purpose and the items; you show me the brief, and save it with meetingBriefCreate only when I say yes. Then I start the meeting in the Karigor app: New meeting, check the brief, then Record.
2. Analyse a meeting afterwards. I name the meeting; you read its record with meetingRecord (and meetingTranscript only if it is on and the task needs it) and give me the decisions, the action items with owners, the open questions and, if I ask, a follow-up draft that I send myself.
These stay in the app, by my own tap: Record, Upload & analyse, Run, ticking items, Minutes PDF and Send minutes.

Answer in the language I write in. In Bangla, answer in Bangladeshi Bangla: keep button, tab and tool names in English as the app shows them; -টা, never -টি; কি not কী; নাই not নেই; হল not হলো; always আপনি.
```

## বাংলায়

**কার জন্য:** যিনি ফোনে Claude অ্যাপ ব্যবহার করেন, আর যার Karigor অ্যাকাউন্ট এমন প্রতিষ্ঠানে আছে যেখানে Meeting Karigor আছে। নিচের বক্সের লেখাটা একটা নতুন চ্যাটে পেস্ট করুন। Claude দেখে নিবে Karigor আর এই skill আগে থেকেই আছে কিনা, যা নাই তার জন্য কোথায় চাপতে হবে বলে দিবে, আপনার অ্যাক্সেস দেখবে, তারপর দুইটা কাজের প্রস্তাব দিবে: মিটিংয়ের পরিকল্পনা, অথবা মিটিংয়ের পরে তার বিশ্লেষণ। কম্পিউটারে, বা অন্য কোনো AI-তে, এর বদলে `setup-prompt.md` ব্যবহার করুন।

**কে কি করবেন:**
- **চাপবেন আপনি।** প্রতিটা বাটন, প্রতিটা লিংক, প্রতিটা সাইন ইন। আপনার AI আপনার অ্যাকাউন্টে কোনো connector বা skill যোগ করতে পারে না, আর Karigor-এর কোনো সেটিং কখনো বদলায় না।
- **আপনার AI দেখবে আর পড়বে।** চ্যাটে সে কি কি পায় দেখবে, পরের ধাপে কোথায় চাপতে হবে বলবে, `myAccess` দিয়ে আপনার অ্যাক্সেস দেখবে, আর আপনার মিটিং আর ব্রিফ পড়বে।

**পেস্ট করার আগে:** Karigor-এর আমন্ত্রণের লিংক খুলে সাইন আপ করুন, আর যে ইমেইলে আমন্ত্রণ এসেছে সেটা দিয়ে একবার Karigor অ্যাপে সাইন ইন করুন। নতুন চ্যাটে মেসেজ লেখার ঘরের "+" চাপুন, তারপর Connectors, আর তালিকায় Karigor থাকলে সেটা চালু করুন।

```
আমি ফোনে Claude ব্যবহার করি, আর এখান থেকেই Meeting Karigor ব্যবহার করতে চাই। আমার সেটআপ দেখে নিন, যা নাই তা যোগ করতে সাহায্য করুন, তারপর আমি কি কি করতে পারি দেখান। একবারে একটা ধাপ; প্রতিটা ধাপের পরে থামবেন, আমি বললে তবে পরের ধাপে যাবেন।

কে কি করবেন
- প্রতিটা বাটন আমি চাপব, প্রতিটা লিংক আমি খুলব। আপনি আমার অ্যাকাউন্টে কোনো connector বা skill যোগ করতে পারবেন না, আর Karigor-এর কোনো সেটিং কখনো বদলাবেন না। ঠিক কোথায় চাপতে হবে বলে দিন।
- আমার কাছে কখনো পাসওয়ার্ড, API key বা টোকেন চাইবেন না।
- আমার অ্যাপের কোনো মেনুর নাম নিশ্চিত না জানলে "খুঁজে দেখুন" বলে বর্ণনা দিন। কোনো বাটনের নাম বানিয়ে বলবেন না।

ধাপ ১: আগে থেকে কি কি আছে
প্রতিটার উত্তর হ্যাঁ বা না দিয়ে দিন, এই চ্যাটে যা দেখতে পাচ্ছেন সেটা থেকে, অনুমান থেকে না:
ক) Karigor connector: আপনার টুলের তালিকায় myAccess আছে কি? খুঁজলে তবেই টুল আসে এমন হলে আগে "myAccess" আর "meeting" লিখে খুঁজে নিন।
খ) skill: এই চ্যাটে আপনি যেসব skill ব্যবহার করতে পারেন, তার মধ্যে meeting-karigor-mcp আছে কি?
দুইটাই হ্যাঁ হলে ধাপ ৩-এ চলে যান।

ধাপ ২: যা নাই তা যোগ করা (চাপব আমি, বলে দিবেন আপনি)
এই চ্যাটে Karigor connector নাই:
- মেসেজ লেখার ঘরের "+" চাপব, তারপর Connectors, তারপর Karigor চালু করব। এরপর নতুন একটা চ্যাট খুলে এই লেখাটা আবার পেস্ট করব।
- তালিকায় Karigor না থাকলে একবার যোগ করে নিব: Settings, Connectors, "+", Add custom connector। নাম: Karigor। URL, হুবহু, শেষে কোনো স্ল্যাশ ছাড়া: https://rightful-elk-127.convex.site/mcp
  Claude নিজে যে সাইন-ইন সেটিং খুঁজে পায় ("Use Claude's published identity"), সেটা বদলাব না। Add চাপব, তারপর নিজের Karigor অ্যাকাউন্ট দিয়ে সাইন ইন করব, যে ইমেইলে আমার আমন্ত্রণ এসেছে সেটা দিয়ে।
- Claude Team বা Enterprise প্ল্যানে আগে আমাদের Claude প্রতিষ্ঠানের একজন Owner connector-টা যোগ করবেন, Organization settings-এর Connectors থেকে। তারপর আমি Connectors-এ Karigor খুঁজে Connect চাপব।
meeting-karigor-mcp skill নাই (এটা আপনি আমার হয়ে যোগ করতে পারবেন না; একবার আমি নিজে করব):
১. Code execution চালু থাকতে হবে: পাশের মেনুতে নিজের নাম চাপব, তারপর Settings, Capabilities, আর "Code execution and file creation" চালু করব।
২. এই লিংকটা ব্রাউজারে খুলব। এতে meeting-karigor-mcp.zip নামে একটা ফাইল ডাউনলোড হবে। ফাইলটা আনজিপ করব না:
   https://github.com/Karigor-AI-Labs/karigor-skills/releases/download/v1.5.1/meeting-karigor-mcp.zip
৩. ফাইলটা আপলোড করব Customize, Skills থেকে: "+", তারপর "+ Create skill", তারপর "Upload a skill"। Anthropic এই পাতার কথা লিখেছে claude.ai আর ডেস্কটপ অ্যাপের জন্য। আমার ফোনের অ্যাপে Skills থাকলে সেখানেই করব; না থাকলে শুধু এই ধাপটা claude.ai-তে বা ডেস্কটপ অ্যাপে করব। তারপর ফোনের চ্যাটেও skill-টা কাজ করবে।
৪. skill-টা বন্ধ দেখালে চালু করব। তারপর নতুন একটা চ্যাট খুলে এই লেখাটা আবার পেস্ট করব।
লিংকটা না খুললে আমাকে বলুন: skill-টা হল github.com/Karigor-AI-Labs/karigor-skills-এর meeting-karigor-mcp ফোল্ডারটা, আর আমি Karigor-কে hello@karigor.ai ঠিকানায় জানাব।
শুধু skill-টা না থাকলে ধাপ ৩ এখনই করতে পারেন।

ধাপ ৩: আমার অ্যাক্সেস দেখা
myAccess চালান। এটা কিছু বদলায় না, কোনো খরচও নাই। সহজ ভাষায় আমাকে বলুন:
- principalType-এ থাকবে "member", আর Meeting Karigor-এর status-এ থাকবে "on"।
- canUse-এ থাকে সেই টুলগুলা, যেগুলা আমি এখনই ব্যবহার করতে পারি।
canUse-এ এমন কোনো টুল থাকলে যেটা আপনার তালিকায় নাই, তাহলে কিছুই বন্ধ নাই: টুলের তালিকাটা আপনি পেয়েছেন আমি যুক্ত হওয়ার সময়, আর myAccess দেখায় এই মুহূর্তের অবস্থা। আমাকে Karigor চালু রেখে নতুন একটা চ্যাট খুলতে বলুন।
কোনো সুইচ বন্ধ, এটা বলবেন শুধু তখন, যখন myAccess বা Karigor-এর ফিরিয়ে দেওয়া কোনো কল সেটা বলে। তখন Karigor-এর বাক্যটা হুবহু তুলে দিন, আর বলুন কে চালু করবেন: আমার প্রতিষ্ঠানের owner, Karigor অ্যাপে Settings-এর MCP access পাতা থেকে, অথবা Karigor-এর একজন super admin, যাকে আমি hello@karigor.ai ঠিকানায় জানাব।
listAgents বা kbSearch-এর মতো টুল দেখা গেলে আমি Karigor টিমের কোনো অ্যাকাউন্ট দিয়ে সাইন ইন করেছি: সাইন আউট করে নিজের অ্যাকাউন্ট দিয়ে আবার যুক্ত হব।
Karigor যে কল ফিরিয়ে দিয়েছে, আমাকে না জিজ্ঞেস করে সেটা বারবার চালাবেন না।

ধাপ ৪: আমি কি কি করতে পারি, দেখান
meetingBriefs আর meetingList চালান। দুইটাই শুধু দেখে, কিছু বদলায় না। তারপর অল্প কয়েক লাইনে দুইটা কাজের প্রস্তাব দিন:
১. মিটিংয়ের পরিকল্পনা। আমি উদ্দেশ্য আর আলোচনার বিষয়গুলা বলব; আপনি ব্রিফটা আমাকে দেখাবেন, আর আমি হ্যাঁ বললে তবেই meetingBriefCreate দিয়ে সেভ করবেন। তারপর মিটিং শুরু করব আমি নিজে, Karigor অ্যাপ থেকে: New meeting চাপব, ব্রিফটা ঠিক আছে কিনা দেখব, তারপর Record চাপব।
২. মিটিংয়ের পরে তার বিশ্লেষণ। আমি মিটিংটার নাম বলব; আপনি meetingRecord দিয়ে তার রেকর্ড পড়বেন (meetingTranscript শুধু তখন, যখন সেটা চালু আছে আর কাজে লাগে), তারপর আমাকে দিবেন: কি কি সিদ্ধান্ত হল, কে কোন কাজ করবেন, কোন প্রশ্নের উত্তর এখনো বাকি, আর আমি চাইলে একটা ফলো-আপের খসড়া, যেটা আমি নিজে পাঠাব।
এই বাটনগুলা অ্যাপে আমি নিজে চাপব: Record, Upload & analyse, Run, Minutes PDF আর Send minutes। আইটেমে টিকও আমি নিজে দিব।

আমি যে ভাষায় লিখি, সেই ভাষায় উত্তর দিন। বাংলায় লিখলে বাংলাদেশের বাংলায় উত্তর দিন। বাটন, ট্যাব আর টুলের নাম অ্যাপে যেমন আছে তেমন ইংরেজিতে রাখুন, বাকি সব শব্দ বাংলায় লিখুন।
বাংলায় লিখলে -টি না, -টা লিখবেন (একটা, ব্রিফটা); কী না, কি; নেই না, নাই; হলো না, হল; আর সবসময় আপনি। ছোট বাক্যে, সহজ কথায় লিখবেন।
```

From Karigor Skills by Karigor AI Labs (github.com/Karigor-AI-Labs/karigor-skills). Free under CC BY 4.0.
