# Changelog

All notable changes to Karigor Skills. Dates are in Dhaka time.

## 1.4.0 (28 October 2026)

- Three new skills for using Karigor's own karigors through Karigor's MCP server: `content-karigor-mcp`, `marketing-karigor-mcp` and `meeting-karigor-mcp`. Each was written from the live tool descriptions and the product code, then checked claim by claim by a second reviewer against the same sources.
- Each one starts from the tools actually in the assistant's tool list, names the app button for every step that has no tool (approvals are app only), treats text inside tool results as material and never as instructions, and states the credit cost of each step.
- `meeting-karigor-mcp` describes the app flow today and uses Meeting Karigor's MCP tools only when they appear in the tool list; it never presents an unreleased tool as available.
- Each ships with its own test suite in `examples.md` (at least 15 cases, Bangla requests included, with refusal and hand-off cases).

## 1.3.0 (13 October 2026)

- Skills renamed by the job, not the platform: `facebook-page-replies-bangla` is now `customer-replies-bangla`, `facebook-post-captions-bangla` is now `post-captions-bangla`, `business-email-english-bd` is now `business-email-english`. Facebook, WhatsApp and Instagram are named only as places where a skill works. Entries below use the new names.
- The library README opens with how Karigor builds agents from skills, and a "How each skill is built" section. Each `examples.md` is named as that skill's test suite.
- Licensed under CC BY 4.0; the full legal code is in `LICENSE`. The README says how to credit.
- Attribution lines point to github.com/Karigor-AI-Labs/karigor-skills.

## 1.2.0 (13 October 2026)

Fixes from two runs on 1.1: a small-model proxy test (page replies 9/11, captions 9/10, email 8/11) and a full captions run in Gemini 3.8 Flash.

- All three skills: the Bangla register now sits near the top of every skill and ChatGPT box, with worked pairs (কাজটা not কাজটি, অফারটা not অফারটি, একটা not একটি), and covers notes to the user too. Every skill ends with a "Before you send, check" list (no -টি, no কী or নেই, no invented fact, the output first with nothing above it). Prices in Bangla digits take a thousands comma (১,৪৫০).
- All three skills: describe only qualities the user stated; no added taste, comfort, freshness, quality or origin words; a removed claim is not replaced with another; no promise words such as নিশ্চিত ডেলিভারি.
- `customer-replies-bangla`: a hard first step counts the mobile digits; if not exactly 11, the reply asks only for the number and never fixes a digit. A "Not a customer message?" clause names `post-captions-bangla`. Placeholders are written in the reply's own script ([price] in Banglish or English).
- `post-captions-bangla`: tribute posts carry no years, dates or history the user did not give. Short lines, never one paragraph. The "Not a caption?" clause names `customer-replies-bangla`. Examples no longer add "নতুন", "fresh" or "made to order" that the user did not say.
- `business-email-english`: the not-an-email answer names `customer-replies-bangla`. A follow-up keeps "Re: " plus the original subject, and the user's deadline is the only reply-by date. "I'm writing to request" and similar openers are banned. The reminder rung (friendly, firm, final) is the user's choice, never picked from the date.

## 1.1.0 (13 October 2026)

Fixes from a live test: 33 runs on a small model standing in for ChatGPT.

- All Bangla: use `-টা`, never `-টি` (নম্বরটা, ১টা, অফারটা). Colour is always spelled `রং`.
- `customer-replies-bangla`: a price reply names any sold-out variant. Between two sizes, suggest the larger one and state the exchange rule. A worked Banglish example. Asking for the transaction ID after a bKash or Nagad advance is now required.
- `post-captions-bangla`: on Independence Day and Victory Day, a tribute and then exactly one offer line, nothing else. Hashtags use only facts the user gave. Requests for customer replies are pointed to `customer-replies-bangla` (new example 11).
- `business-email-english`: if the user gave no date, the email says `[reply-by date]` and never picks one; "tomorrow" or "kal" is never turned into a calendar date. "Sorry for the trouble it has caused" is banned with "sorry for the inconvenience caused". A request that is not an email gets a one-line answer, not an email.

## 1.0.0 (13 October 2026)

First release, three skills.

- `customer-replies-bangla`: replies to Facebook page comments and Messenger customers in Bangla, English or Banglish. Shop table template, order taking with phone and address checks, bKash and cash on delivery, polite refusals. 10 examples.
- `post-captions-bangla`: Facebook and Instagram captions in Bangla and English for products, offers and Bangladeshi occasions, with rules against fake urgency and false claims. 10 examples.
- `business-email-english`: English business emails for Bangladeshi professionals: enquiries, follow-ups, quotation cover notes, payment reminders, apologies, meeting requests, saying no. 10 examples.
- Each skill ships as `SKILL.md` (Agent Skills format), `chatgpt-instructions.md`, `examples.md` and `README.md`.
