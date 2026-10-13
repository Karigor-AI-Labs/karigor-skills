# Examples: customer-replies-bangla

This file is the skill's test suite.

Each example is a test. Give the skill the shop table and the customer message; a good output passes every "Must" and breaks no "Must not". The good replies show one right answer, not the only one. All shops and customers here are invented.

## The shop table used by examples 1 to 9

```
SHOP TABLE
Page name: Nilambori Fashion
Products:
  Cotton three-piece (blue, maroon) | 1850 | M, L, XL | in stock, except blue L (sold out) | soft cotton, stitched
  Linen panjabi (white, olive) | 1450 | 38, 40, 42, 44 | in stock |
  Kids frock | 950 | 2-3y, 4-5y | in stock |
Delivery inside Dhaka: Tk 70 | 1 to 2 days
Delivery outside Dhaka: Tk 130 | 3 to 5 days
Areas with a different charge or time: Savar, Gazipur, Narayanganj Tk 100 | 2 to 3 days
Courier used: Steadfast
Advance needed? Outside Dhaka: delivery charge in advance by bKash
Payment: cash on delivery yes | bKash 01XXXXXXXXX personal (Send Money) | Nagad no
Can the customer check before paying? Yes, in front of the delivery person
Return or exchange: size exchange within 3 days, customer pays delivery
Current offers: free delivery on 2 or more items, until 31 October
Size chart: M chest 38, L chest 40, XL chest 42 (inches)
Price in public comments: yes
Reply hours: 10am to 10pm
```

---

## 1. Plain price ask in Messenger

**Customer:** দাম কত?  *(sent from the three-piece post)*

**Good reply:**
জি, এই থ্রি-পিসের দাম ১,৮৫০ টাকা।
রং নীল আর মেরুন, সাইজ M, L, XL। নীলে L এখন শেষ।
কোন রং আর কোন সাইজ লাগবে?

- Must: price in the first line; Bangla digits with a thousands comma (১,৮৫০); the sold-out variant (blue L) stated; one closing question.
- Must not: "থ্রি-পিসটির" or any other -টি form; "রঙ" spelling.
- Must not: a greeting paragraph first; "অসাধারণ"; markdown.

## 2. "pp" in a public comment

**Customer (comment):** pp

**Good reply (comment):**
দাম ১,৮৫০ টাকা। অর্ডার করতে ইনবক্সে মেসেজ দিন।

- Must: a real answer in public (the table allows it); one or two lines.
- Must not: only "ইনবক্স চেক করুন" with no price.

## 3. Delivery charge, place named

**Customer:** গাজীপুরে ডেলিভারি চার্জ কত? কয়দিন লাগবে?

**Good reply:**
গাজীপুরে ডেলিভারি চার্জ ১০০ টাকা, সময় লাগে ২ থেকে ৩ দিন।
দুইটা নিলে ৩১ অক্টোবর পর্যন্ত ডেলিভারি ফ্রি।
কোনটা নিতে চান?

- Must: the Gazipur charge and time (Tk 100, 2 to 3 days), not the inside or outside Dhaka figures.
- Must not: invent a different charge or a fixed delivery date.

## 4. Stock: a sold-out variant

**Customer:** নীল, L সাইজ আছে?

**Good reply:**
দুঃখিত, নীলে L সাইজটা এখন স্টকে নাই।
মেরুনে L আছে। নীলে M আর XL আছে।
কোনটা দেখবেন?

- Must: say plainly it is out; offer the nearest options from the table.
- Must not: "শীঘ্রই আসছে" (the table does not say so).

## 5. Size help

**Customer:** আমার বুকের মাপ ৩৯ ইঞ্চি, কোন সাইজ নিব?

**Good reply:**
সাইজ চার্টে M হল ৩৮ ইঞ্চি, L হল ৪০।
৩৯ হলে L নিন, একটু ঢিলা থাকবে।
না মিললে ৩ দিনের মধ্যে সাইজ বদলাতে পারবেন, ডেলিভারি চার্জ আপনার।

- Must: reason from the chart; between two sizes, suggest the larger one (L); state the exchange rule in the same reply.
- Must not: promise "একদম পারফেক্ট ফিট হবে".

## 6. Banglish customer, outside Dhaka, payment question

**Customer:** apu ami sylhet theke. cash on delivery hobe?

**Good reply:**
Ji, cash on delivery hobe. Sylhet e delivery charge 130 taka, 3 theke 5 din lage.
Dhakar baire delivery charge ta age bKash e pathate hoy: 01XXXXXXXXX (personal, Send Money).
Pathiye transaction ID ta din, tarpor order nibo.

- Must: reply in Banglish with English digits; COD yes; the advance rule; Send Money; **ask for the transaction ID** (a reply without it fails).
- Must not: echo "apu" back (the customer used it for the seller, not for themselves); switch to Bangla script.

## 7. Taking the order, phone number wrong

**Customer:** নাম রুমানা আক্তার। ০১৭০০০০০০০। বাসা ১২, রোড ৫, ধানমন্ডি, ঢাকা। নীল M একটা, ক্যাশ অন ডেলিভারি।

**Good reply:**
ধন্যবাদ। মোবাইল নম্বরে একটা ডিজিট কম মনে হচ্ছে।
১১ ডিজিটের নম্বরটা আরেকবার দিবেন?

- Must: catch that ০১৭০০০০০০০ has 10 digits; ask again politely; do not ask again for fields already given.
- Must: count the digits first; ask only for the number; send nothing else.
- Must not: add, drop or fix a digit yourself (for example turning it into 01700000000); build a summary; write "নম্বরটি".

## 8. Order summary after correct details

**Customer:** sorry, 01700000000

**Good reply:**
আপনার অর্ডারটা একবার মিলিয়ে নিন:
থ্রি-পিস, নীল, সাইজ M, ১টা
দাম ১,৮৫০ টাকা, ডেলিভারি ৭০ টাকা, মোট ১,৯২০ টাকা
নাম: রুমানা আক্তার, মোবাইল: 01700000000
ঠিকানা: বাসা ১২, রোড ৫, ধানমন্ডি, ঢাকা
পেমেন্ট: ক্যাশ অন ডেলিভারি
সব ঠিক থাকলে "কনফার্ম" লিখুন।

- Must: correct total (1,850 + 70 = 1,920); phone in English digits; ask for "কনফার্ম".
- Must not: say the order is confirmed yet; reply in Banglish because the customer's last message was a short English fix (the conversation is in Bangla).

## 9. Bargaining

**Customer:** ১৫০০ দিলে দিবেন? দুইটা নিব।

**Good reply:**
দুঃখিত, দামটা ফিক্সড, কমানো যাচ্ছে না।
তবে দুইটা নিলে ৩১ অক্টোবর পর্যন্ত ডেলিভারি চার্জ লাগবে না।
কোন দুইটা নিবেন?

- Must: refuse once, politely; offer only the listed free-delivery offer.
- Must not: invent a discount; apologise repeatedly.

## 10. Missing table, English customer, unknown product

*(No shop table given. The customer sends a photo of a handbag.)*

**Customer:** Hi, how much is this bag and do you deliver to Chattogram?

**Good reply:**
Hi, thanks for asking. This bag is [price]. We deliver to Chattogram for [delivery charge], usually in [delivery time].
Would you like to order one?

Seller note: I don't have your shop table yet. Please send the bag's price and stock, and your outside-Dhaka delivery charge and time, or fill the shop table template once.

- Must: placeholders in square brackets, in the reply's own script ([price], not [দাম], because the reply is in English); never invented numbers; a seller note naming exactly what is missing.
- Must not: guess a price from the photo.

## 11. Not a customer message

**Seller:** Write a Facebook caption for our new panjabi collection.

**Good reply:**
This helper writes replies to customers. For a caption, use post-captions-bangla.

- Must: one line; names post-captions-bangla.
- Must not: a caption, hashtags or a customer reply.
