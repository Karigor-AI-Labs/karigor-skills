# Examples: business-email-english

This file is the skill's test suite.

Each example is a test. A good output passes every "Must" and breaks no "Must not". The emails show one right answer, not the only one. All people, companies and numbers here are invented. Weekdays match the 2026 calendar.

---

## 1. Enquiry to a supplier, request in Bangla

**User:** চট্টগ্রামের একটা প্যাকেজিং কোম্পানিকে ইমেইল লিখো। ১০,০০০ কার্টন বক্স লাগবে, সাইজ 40 x 30 x 25 cm, ৫ প্লাই। ১৫ নভেম্বরের মধ্যে ডেলিভারি লাগবে। দাম আর লিড টাইম জানতে চাই। আমি তানভীর আহমেদ, প্রকিউরমেন্ট ম্যানেজার, Nodi Textiles।

**Email:**
Subject: Price and lead time for 10,000 five-ply cartons, delivery by 15 November

Dear Sales team,

I'm Tanvir Ahmed, Procurement Manager at Nodi Textiles. We need 10,000 five-ply carton boxes, 40 x 30 x 25 cm, delivered by Sunday, 15 November 2026.

Could you send us your unit price, your lead time and your payment terms by [reply-by date]? If you can share a sample carton, that would help us decide faster.

Best regards,
Tanvir Ahmed
Procurement Manager, Nodi Textiles
[phone]

To fill: reply-by date, phone. Notes: সাপ্লায়ারের কারো নাম জানলে "Dear Sales team" এর জায়গায় নাম দিন।

- Must: specific subject; who, what, how many, by when in the first paragraph; `[reply-by date]`, because the user gave none.
- Must not: any calendar date for the reply (inventing one fails the test).
- Must not: "Dear Concern", "Kindly", "I am writing this mail".

## 2. Fix a bad draft

**User:** Fix this: "Respected Sir, I am writing this mail to inform you that PFA the revised quotation as per your requirement. Kindly do the needful and revert back ASAP. Thanking you in anticipation. Regards, Nusrat"  *(to Mr Karim, Admin Manager at a client; quotation valid till 31 October)*

**Email:**
Subject: Revised quotation, valid until 31 October

Dear Mr Karim,

I've attached the revised quotation with the changes you asked for. The prices are valid until Saturday, 31 October 2026.

Could you let me know by [reply-by date] if you'd like to go ahead? I'm happy to walk you through it on a quick call.

Best regards,
Nusrat [surname]
[role, company]
[phone]

Main changes: named greeting instead of "Respected Sir"; the point in the first line; "do the needful" replaced with the actual ask and a date; "revert back ASAP" and "thanking you in anticipation" removed.

- Must: no habit from the table survives; a clear next step with a date (placeholder); at most three lines on changes.
- Must not: invent the reply-by date or the surname.

## 3. Follow-up to a foreign buyer

**User:** We sent knit samples to a buyer in Hamburg (Ms Anna Weber) on Friday 2 October, subject "Samples for AW27 knit polos". No reply. We need sample approval by 20 October to keep the December shipment. I'm Rafiq Hasan, Merchandiser, Brightline Garments Ltd.

**Email:**
Subject: Re: Samples for AW27 knit polos

Dear Ms Weber,

Have you had a chance to look at the knit polo samples we sent on Friday, 2 October?

To keep your December shipment on schedule, we need your approval or comments by Tuesday, 20 October. A short reply is enough, and I'm happy to take a 15-minute call if that's easier.

Best regards,
Rafiq Hasan
Merchandiser, Brightline Garments Ltd
+880 [phone]

- Must: subject is "Re: " plus the original subject, unchanged; the user's deadline (20 October) is the only reply-by date; an easy way to answer.
- Must not: a `[reply-by date]` next to the user's deadline; any other date the user did not give; "I'm writing to follow up" or "I'm following up" as the opener.
- Must not: "Just following up" with nothing else; "Gentle reminder!!!"; pressure about the buyer's silence.

## 4. Quotation cover note to a local corporate client

**User:** Cover note for quotation: 500 polo shirts with logo, 850 taka each, total 4,25,000, valid till 31 October, delivery 21 days after PO, 50% advance. Client: Ms Farhana Islam, HR, at a Dhaka bank.

**Email:**
Subject: Quotation for 500 logo polo shirts, valid until 31 October

Dear Ms Islam,

Thank you for your enquiry. I've attached our quotation for 500 polo shirts with your logo.

The total is BDT 425,000 (BDT 850 per shirt), valid until Saturday, 31 October 2026. We deliver within 21 days of your purchase order, with 50% paid in advance.

If this works for you, a purchase order is all we need to start.

Best regards,
[name]
[role, company]
[phone]

Notes: কোটেশনের দাম ভ্যাট সহ নাকি ছাড়া, এক লাইনে লিখে দিন। ব্যাংক আর বড় কোম্পানি সাধারণত এটাই প্রথমে জিজ্ঞেস করে।

- Must: total, unit price, validity, delivery and payment terms; one next step; under 120 words.
- Must not: assume VAT included or excluded; offer a sample or anything else the user did not mention; "PFA".

## 5. Friendly payment reminder

**User:** Payment reminder. Invoice INV-2026-118, BDT 180,000, due Wednesday 30 September, their PO 4500-2231. To Accounts, Mr Selim Reza. From Shila Akter, Accounts, Kolom Digital.

**Email:**
Subject: Invoice INV-2026-118 (PO 4500-2231), BDT 180,000, due 30 September

Dear Mr Reza,

I hope you're well. Invoice INV-2026-118 for BDT 180,000 against PO 4500-2231 was due on Wednesday, 30 September. I've attached a copy.

If anything is needed from our side to process it, such as the Mushak-6.3 VAT invoice or a work completion note, please let me know and I'll send it the same day. Could you share the expected payment date?

Best regards,
Shila Akter
Accounts, Kolom Digital
[phone]

Notes: I wrote the friendly reminder because you did not say which one. Ask for the firm or final one if you need it.

- Must: invoice number, PO, amount, due date, attachment; asks what is missing; asks them for a payment date; the friendly rung, with a note saying so.
- Must not: pick the firm or final rung because the due date has passed.
- Must not: a reply-by or payment date chosen by the writer (the user gave none).
- Must not: blame, threats, "URGENT".

## 6. Final payment reminder

**User:** Write the final reminder for the same invoice. Today is 30 October, so it is 30 days overdue. Reminders sent on 1 October and 15 October. Our agreement allows us to pause the service after notice. We will pause from Tuesday 10 November if not paid.

**Email:**
Subject: Final reminder: invoice INV-2026-118, service pause from 10 November

Dear Mr Reza,

Invoice INV-2026-118 for BDT 180,000 (PO 4500-2231) is now 30 days overdue. We wrote about it on 1 October and 15 October, and I've attached it again.

Under our agreement, we will have to pause the service from Tuesday, 10 November 2026 if the payment has not reached us by then. We would much rather not.

If there is a problem on your side, a missing document or an approval that is stuck, please tell me and I'll help sort it out this week.

Best regards,
Shila Akter
Accounts, Kolom Digital
[phone]

- Must: the consequence and its date, stated calmly and tied to the agreement; still offers help.
- Must not: legal threats the user did not mention; ALL CAPS; insulting tone.
- Variant test: if the user's numbers conflict (for example "45 days overdue" with a pause date that comes before day 45), the output must point out the conflict in a note, not pick one silently.

## 7. Apology for a wrong delivery

**User:** We delivered 200 navy shirts instead of black to Ms Rumana Chowdhury (Procurement, a retail chain). Our packing mistake. Replacement reaches them Thursday 22 October, we'll collect the navy ones at the same time at our cost. We've added a second colour check at packing.

**Email:**
Subject: Wrong colour in your order: black shirts arriving Thursday, 22 October

Dear Ms Chowdhury,

I'm sorry. We sent you 200 navy shirts instead of black. It was our packing mistake.

The black shirts will reach you on Thursday, 22 October, and our team will collect the navy ones at the same time, at our cost. We've added a second colour check at packing, so this does not happen again.

Please tell me if the new date causes any problem for your stores.

Best regards,
[name]
[role, company]
[phone]

- Must: owns the mistake plainly; the fix and its date; what changes; one next step.
- Must not: "Sorry for the inconvenience caused", "sorry for the trouble it has caused" or any rewording; blaming a staff member or the courier.
- Variant test: without the user's last sentence, the output must use `[what you've changed]` or ask, never invent a fix.

## 8. Meeting request across time zones

**User:** Ask Ms Weber (Hamburg) for a 30-minute video call about the AW27 order. Options: Tue 20 Oct or Wed 21 Oct, 4 pm Dhaka time. Google Meet.

**Email:**
Subject: 30-minute call about the AW27 order: Tuesday 20 or Wednesday 21 October?

Dear Ms Weber,

Could we have a 30-minute video call about the AW27 order?

Either of these times works for us:
- Tuesday, 20 October, 4:00 pm Dhaka time (12:00 noon in Hamburg)
- Wednesday, 21 October, 4:00 pm Dhaka time (12:00 noon in Hamburg)

I'll send a Google Meet link once you pick a time. If neither suits you, please suggest another.

Best regards,
Rafiq Hasan
Merchandiser, Brightline Garments Ltd

- Must: both time zones correct (Dhaka GMT+6, Hamburg on summer time until 25 October 2026, so 4 pm Dhaka is noon in Hamburg); purpose in one line; easy reply.
- Must not: "BST"; a time without a zone.

## 9. Request in Banglish: one day of sick leave

**User:** boss ke email korte hobe, kal office e aste parbo na, jor. 1 din sick leave chai. boss er nam Mr Habib. ami Sumaiya, executive.

**Email:**
Subject: Sick leave tomorrow, [date]

Dear Mr Habib,

I have a fever and won't be able to come to the office tomorrow, [date]. I'd like to take one day of sick leave.

I'll keep an eye on email for anything urgent, and [colleague's name] can cover [task] if needed. I expect to be back on [date].

Best regards,
Sumaiya [surname]
Executive, [team]

To fill: dates, colleague, task, surname. Notes: kono colleague cover na korle oi line ta bad diben.

- Must: English email, note to the user in Banglish (their script); short; "tomorrow, [date]" kept as written.
- Must not: turn "kal" into a calendar date.
- Must not: "Respected Sir, I beg to state that"; invented dates.

## 10. Saying no to a credit request

**User:** Client asked for 90-day credit. Our policy is 30 days. We can offer 30 days, or two instalments: 50% on delivery, 50% after 30 days. Client: Mr Arif Hossain, a distributor in Bogura.

**Email:**
Subject: Payment terms for your order

Dear Mr Hossain,

Thank you for asking about credit terms.

We can't offer 90 days, as our policy limit is 30. We can do either of these:
- full payment 30 days after delivery, or
- 50% on delivery and 50% 30 days later.

Please let me know which suits you better, and we'll prepare the invoice on that basis.

Best regards,
[name]
[role, company]
[phone]

- Must: a clear no in one sentence; the two real alternatives; a next step.
- Must not: apologise repeatedly; leave the door open to 90 days.

## 11. Not an email

**User:** ফেসবুক পেজে কাস্টমারের মেসেজের রিপ্লাই লিখে দাও: "dam koto?"

**Reply to the user:**
এই সহকারী শুধু ইমেইল লিখে। ফেসবুক মেসেজের রিপ্লাইয়ের জন্য customer-replies-bangla ব্যবহার করুন।

- Must: one line saying this helper writes emails; point to the page-replies skill.
- Must not: a Subject line, greeting, sign-off or any email format; a reply to the customer.
