# Karigor Skills

Every Karigor agent is engineered from skills: a written procedure, the rules it must follow, and the test cases it must pass. We engineer, evaluate and run the agents. The skills underneath, we give away.

These three are written for Bangladeshi businesses. They are packaged for Claude, ChatGPT, Gemini, Codex and any tool that reads the open Agent Skills format. Free under CC BY 4.0, no sign-up.

## The skills

| Skill | The job | What it does |
|---|---|---|
| [`customer-replies-bangla`](customer-replies-bangla/) | Customer replies for online shops, in Bangla | Short, polite replies (in Bangla, or English or Banglish when the customer writes that way) for price, delivery, stock, sizes, cash on delivery and bKash, orders and refusals. Works wherever customers message a shop: Facebook Messenger and comments, WhatsApp, Instagram. Uses only your own shop table, so it never invents a price. |
| [`post-captions-bangla`](post-captions-bangla/) | Post captions in Bangla | Captions in Bangla or English for products, offers and Bangladeshi occasions, for wherever the post goes, such as Facebook or Instagram. No fake urgency, no false claims. |
| [`business-email-english`](business-email-english/) | Professional business email in English | Clear, warm English emails for enquiries, follow-ups, quotations, payment reminders, apologies and meetings. Ask in Bangla, get the email in English. |

## How each skill is built

- **Written rules.** What to do, what never to do, and a check to run before anything is sent.
- **A test suite.** Each skill's `examples.md` is its test suite: 10 or more cases, each with "Must" and "Must not" lines, including at least one request the skill must refuse or hand to another skill.
- **Scored runs on more than one model.** Versions 1.0 and 1.1 were run against their test suites on a small model, as a stand-in for ChatGPT. The captions skill also had a full run on Gemini 3.8 Flash.
- **Fixed from the failures.** Versions 1.1 and 1.2 changed the rules wherever a case failed. A failed case changes the skill, never the test.

## What is in each folder

- `SKILL.md`: the skill itself, in the open Agent Skills format. Claude, Codex and other tools that read this format can use it directly.
- `chatgpt-instructions.md`: the same skill as instructions you paste into a ChatGPT Custom GPT, a Project, or a new chat. Includes a short guide in Bangla.
- `examples.md`: the test suite. If the assistant's answers meet every "Must" and "Must not" line, the skill is working.
- `README.md`: who it is for and how to start.

## How to use a skill

- **Claude Code:** copy the skill folder to `~/.claude/skills/<skill-name>/`.
- **Claude apps:** zip the skill folder and upload it under Skills in settings.
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
