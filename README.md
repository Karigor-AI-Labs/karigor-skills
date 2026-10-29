# Karigor Skills

Every Karigor agent is engineered from skills: a written procedure, the rules it must follow, and the test cases it must pass. We engineer, evaluate and run the agents. The skills underneath, we give away.

The first three are written for Bangladeshi businesses. The next three teach any AI assistant to use Karigor's own karigors through Karigor's MCP server. They are packaged for Claude, ChatGPT, Gemini, Codex and any tool that reads the open Agent Skills format. Free under CC BY 4.0, no sign-up.

## The skills

| Skill | The job | What it does |
|---|---|---|
| [`customer-replies-bangla`](customer-replies-bangla/) | Customer replies for online shops, in Bangla | Short, polite replies (in Bangla, or English or Banglish when the customer writes that way) for price, delivery, stock, sizes, cash on delivery and bKash, orders and refusals. Works wherever customers message a shop: Facebook Messenger and comments, WhatsApp, Instagram. Uses only your own shop table, so it never invents a price. |
| [`post-captions-bangla`](post-captions-bangla/) | Post captions in Bangla | Captions in Bangla or English for products, offers and Bangladeshi occasions, for wherever the post goes, such as Facebook or Instagram. No fake urgency, no false claims. |
| [`business-email-english`](business-email-english/) | Professional business email in English | Clear, warm English emails for enquiries, follow-ups, quotations, payment reminders, apologies and meetings. Ask in Bangla, get the email in English. |

## Skills for using Karigor's karigors through MCP

These need a Karigor account and an AI assistant connected to Karigor's MCP server. Each one works only from the tools that are actually in the assistant's tool list, names the app button for every step that has no tool, and never approves or posts on its own.

| Skill | The job | What it does |
|---|---|---|
| [`content-karigor-mcp`](content-karigor-mcp/) | Content Karigor from your own AI | Plan a post with a brief that holds every fact, get Content Karigor's draft and your own, let the owner choose and approve in the app, then record the link a person posted, the text that went out and the numbers. |
| [`marketing-karigor-mcp`](marketing-karigor-mcp/) | Marketing Karigor from your own AI | Ask for a week plan or a day plan, let the owner keep or drop lines and approve in the app, hand kept lines to Content Karigor, and read the weekly report, with the credit cost of each step. |
| [`meeting-karigor-mcp`](meeting-karigor-mcp/) | Meeting Karigor from your own AI | Plan a meeting as a brief from your AI, start and record it in the app, then read its record from your AI and get the decisions, action items with owners, open questions and a follow-up draft you send yourself. Comes with `setup-prompt.md`, a prompt that walks a new user's AI through connecting Karigor and installing the skill. |

## How each skill is built

- **Written rules.** What to do, what never to do, and a check to run before anything is sent.
- **A test suite.** Each skill's `examples.md` is its test suite: 10 or more cases, each with "Must" and "Must not" lines, including at least one request the skill must refuse or hand to another skill.
- **Scored runs on more than one model.** Versions 1.0 and 1.1 were run against their test suites on a small model, as a stand-in for ChatGPT. The captions skill also had a full run on Gemini 3.8 Flash.
- **Fixed from the failures.** Versions 1.1 and 1.2 changed the rules wherever a case failed. A failed case changes the skill, never the test.

## What is in each folder

- `SKILL.md`: the skill itself, in the open Agent Skills format. Claude, Codex and other tools that read this format can use it directly.
- `chatgpt-instructions.md`: the same skill as instructions you paste into a ChatGPT Custom GPT, a Project, or a new chat. Includes a short guide in Bangla. For the three MCP skills, Karigor's tools work only in a chat where you picked Karigor with @ and pasted the box as the first message; a Custom GPT, a Project or a Gem with the box guides you through the app only.
- `examples.md`: the test suite. If the assistant's answers meet every "Must" and "Must not" line, the skill is working.
- `README.md`: who it is for and how to start.
- `setup-prompt.md` (in `meeting-karigor-mcp`): a prompt, in English and in Bangla, that a new user pastes into their own AI to connect Karigor's MCP server and install the skill, step by step.

## How to use a skill

- **Claude Code:** copy the skill folder to `~/.claude/skills/<skill-name>/`.
- **Claude apps:** zip the skill folder and upload it at Customize, Skills.
- **ChatGPT:** open the skill's `chatgpt-instructions.md` and follow the steps there.
- **Gemini:** create a Gem and paste the box from `chatgpt-instructions.md` into its instructions.
- **Codex and other Agent Skills tools:** copy the folder to `~/.agents/skills/` (for all your projects) or `.agents/skills/` inside one project.

## Principles every skill follows

- **Never invent facts.** Prices, stock, dates and numbers come from you. Where something is missing, the skill leaves a visible gap like `[price]` and tells you what to fill.
- **Bangladesh first.** Bangladeshi Bangla, Bangladeshi courier and payment realities, Bangladeshi occasions, Bangladeshi office habits.
- **Honest by default.** No fake urgency, no health or whitening claims, no pressure tactics.
- **Short and ready to use.** The output is something you can send or post as it is, after one read.

## License

Free under CC BY 4.0: use, share and adapt, including for business; credit Karigor AI Labs with a link. The full legal text is in [LICENSE](LICENSE).

**How to credit:** "Based on Karigor Skills by Karigor AI Labs (https://github.com/Karigor-AI-Labs/karigor-skills), CC BY 4.0." If you changed the skill, say so.

## Feedback

Found an answer that sounded wrong, or a situation a skill does not handle? Write to hello@karigor.ai with the message you gave it and what it answered. It helps us improve the skills.

Questions or want this done for you all day? hello@karigor.ai

From Karigor Skills by Karigor AI Labs (github.com/Karigor-AI-Labs/karigor-skills). Free under CC BY 4.0.
