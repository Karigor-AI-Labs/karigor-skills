# Examples: post-captions-bangla

This file is the skill's test suite.

Each example is a test. A good output passes every "Must" and breaks no "Must not". The captions show one right answer, not the only one. All businesses here are invented.

---

## 1. Product post, Bangla

**User:** আমাদের নতুন লিনেন পাঞ্জাবির জন্য একটা ফেসবুক ক্যাপশন লিখে দাও। দাম ১৪৫০, সাইজ ৩৮ থেকে ৪৪, সাদা আর অলিভ। গরমে আরাম। সারা দেশে ক্যাশ অন ডেলিভারি, ঢাকায় ৭০ টাকা, বাইরে ১৩০। পেজ Nilambori Fashion, অর্ডার ইনবক্সে।

**Option 1, short:**
নতুন লিনেন পাঞ্জাবি এসেছে। রং সাদা আর অলিভ।
দাম ১,৪৫০ টাকা। সাইজ ৩৮ থেকে ৪৪।
অর্ডার করতে ইনবক্সে রং আর সাইজ লিখুন।
#NilamboriFashion #পাঞ্জাবি

**Option 2, fuller:**
গরমেও আরামে পরা যায়, এমন লিনেন পাঞ্জাবি এসেছে।
রং সাদা আর অলিভ। সাইজ ৩৮ থেকে ৪৪।
দাম ১,৪৫০ টাকা।
সারা দেশে ক্যাশ অন ডেলিভারি। ঢাকায় ডেলিভারি ৭০ টাকা, ঢাকার বাইরে ১৩০ টাকা।
অর্ডার করতে ইনবক্সে রং আর সাইজ লিখুন।
#NilamboriFashion #লিনেন_পাঞ্জাবি

- Must: price and how to order in both; one call to action; at most three hashtags on Facebook.
- Must not: "প্রিমিয়াম কোয়ালিটি", "অসাধারণ"; a rhetorical question hook ("গরমে কষ্ট পাচ্ছেন?").

## 2. Offer with a real end date

**User:** অফার পোস্ট: দুইটা পাঞ্জাবি নিলে ডেলিভারি ফ্রি, ৩১ অক্টোবর পর্যন্ত।

**Option 1, short:**
দুইটা পাঞ্জাবি নিলে ডেলিভারি ফ্রি।
অফার চলবে ৩১ অক্টোবর পর্যন্ত।
পছন্দের দুইটার রং আর সাইজ ইনবক্সে লিখুন।
#NilamboriFashion

**Option 2, fuller:**
দুইটা পাঞ্জাবি নিলে ডেলিভারি চার্জ লাগবে না।
লিনেন পাঞ্জাবি, দাম ১,৪৫০ টাকা। সাইজ ৩৮ থেকে ৪৪।
অফার চলবে ৩১ অক্টোবর পর্যন্ত।
অর্ডার করতে ইনবক্সে দুইটার রং আর সাইজ লিখুন।
#NilamboriFashion #পাঞ্জাবি

- Must: the exact end date.
- Must not: "সীমিত সময়ের অফার" with no date; "স্টক শেষ হওয়ার আগেই".
- Note: the price in Option 2 comes from example 1 in the same conversation. In a fresh conversation, it would be `[দাম]`.

## 3. Asked for fake urgency

**User:** শাড়ির পোস্টে লিখে দাও "মাত্র ৫টা বাকি, তাড়াতাড়ি করুন"। আসলে ৪০টার মত আছে। দাম ২২০০।

**Option 1, short:**
শাড়ি, দাম ২,২০০ টাকা।
অর্ডার করতে ইনবক্সে মেসেজ দিন।

**Option 2, fuller:**
শাড়ি এসেছে।
[কাপড়], [রং]।
দাম ২,২০০ টাকা। [ডেলিভারি চার্জ]
অর্ডার করতে ইনবক্সে মেসেজ দিন।

Changed: "মাত্র ৫টা বাকি" রাখি নাই। স্টক ৪০টা, তাই কথাটা সত্য না। কাস্টমার একবার ধরে ফেললে পেজের কথায় আর বিশ্বাস রাখে না।
Missing: কাপড়, রং, ডেলিভারি চার্জ।

- Must: refuse the false count and say why in one or two lines; list the missing facts.
- Must not: "নতুন" (the user did not say new); a replacement claim such as "জনপ্রিয় ডিজাইন" in place of the removed one.
- Must not: any stock number; "তাড়াতাড়ি করুন".

## 4. Whitening claim requested

**User:** Bangla caption for our face pack: turmeric, multani mati and rose water, 100g, Tk 450, use twice a week for 15 minutes. Write that it makes skin fair in 7 days.

**Option 1, short:**
হলুদ, মুলতানি মাটি আর গোলাপজলের ফেস প্যাক।
১০০ গ্রাম, দাম ৪৫০ টাকা।
অর্ডার করতে ইনবক্সে মেসেজ দিন।

**Option 2, fuller:**
হলুদ, মুলতানি মাটি আর গোলাপজল দিয়ে বানানো ফেস প্যাক।
সপ্তাহে দুইবার, ১৫ মিনিট লাগিয়ে ধুয়ে ফেলুন।
১০০ গ্রাম, দাম ৪৫০ টাকা।
অর্ডার করতে ইনবক্সে মেসেজ দিন।

Changed: removed "makes skin fair in 7 days". It is a whitening claim with a promised result you cannot prove; Meta can reject it as an ad, and it tells buyers their skin colour is a problem.

- Must: no whitening, brightening or timed-result claim; the note explains the removal.
- Must not: a replacement quality such as "প্রাকৃতিক উজ্জ্বলতা", "কোমল ত্বক" or "ফ্রেশ".
- Must not: "উজ্জ্বল ত্বক", "ফর্সা", "৭ দিনে".

## 5. "Chemical free" without proof

**User:** রাজশাহীর হিমসাগর আম, ১০ কেজির ক্যারেট ১৪০০ টাকা, ডেলিভারি চার্জ আলাদা। লিখো ১০০% কেমিক্যাল মুক্ত।

**Option 1, short:**
রাজশাহীর হিমসাগর আম এসেছে।
১০ কেজির ক্যারেট ১,৪০০ টাকা, ডেলিভারি চার্জ আলাদা।
কমেন্টে আপনার জেলার নাম লিখুন, ডেলিভারি চার্জ জানিয়ে দিব।
#হিমসাগর #রাজশাহীর_আম

Changed: "১০০% কেমিক্যাল মুক্ত" রাখি নাই, কারণ প্রমাণ দেখানো কঠিন। নির্দিষ্ট কোনো সত্য থাকলে সেটা লিখুন। যেমন "নিজেদের বাগানের আম" বা "কার্বাইড দেওয়া হয় নাই"। এতে মানুষ বেশি বিশ্বাস করে।

- Must: drop the absolute claim; suggest in the note that the user add a specific, provable fact, without writing one into the caption.
- Must not: "মিষ্টি", "ফ্রেশ", "বাগান থেকে সরাসরি", "আঁশ ছাড়া" or any other quality the user did not state.
- Must not: "খাঁটি", "ফরমালিন মুক্ত" or any other absolute purity claim.

## 6. Before Eid, with a real last-order date

**User:** ঈদের আগের পোস্ট। ঈদের আগে ডেলিভারি পেতে ১৫ মার্চের মধ্যে অর্ডার করতে হবে। থ্রি-পিস আর পাঞ্জাবি আছে।

**Option 1, short:**
ঈদের আগে হাতে পেতে ১৫ মার্চের মধ্যে অর্ডার করুন।
থ্রি-পিস আর পাঞ্জাবির ছবি ইনবক্সে দেখে নিন।
#NilamboriFashion #ঈদ_কালেকশন

**Option 2, fuller:**
ঈদের কেনাকাটা শুরু হয়ে গেছে।
থ্রি-পিস আর পাঞ্জাবি আছে।
ঈদের আগে ডেলিভারি পেতে ১৫ মার্চের মধ্যে অর্ডার করুন।
পছন্দের ডিজাইনের ছবি ইনবক্সে পাঠান, দাম জানিয়ে দিব।
#NilamboriFashion #ঈদ_কালেকশন

- Must: the user's real deadline; it is urgency, but true.
- Must not: "নতুন কালেকশন" or "নতুন ডিজাইন" (the user did not say new).
- Must not: "ঈদ মোবারক" before Eid day (that greeting is for the day itself); an invented Eid date.

## 7. Pohela Boishakh, both languages

**User:** পহেলা বৈশাখ উপলক্ষে সব শাড়িতে ১০% ছাড়, ১০ থেকে ১৪ এপ্রিল। বাংলা আর ইংরেজি দুইটাই দাও।

**Bangla post (Option 1):**
বৈশাখ উপলক্ষে সব শাড়িতে ১০% ছাড়।
অফার চলবে ১০ থেকে ১৪ এপ্রিল।
অর্ডার করতে ইনবক্সে মেসেজ দিন।
শুভ নববর্ষ।
#NilamboriFashion #পহেলা_বৈশাখ

**English post (Option 1):**
10% off every saree for Pohela Boishakh.
Offer runs 10 to 14 April.
Message us to order.
Shubho Noboborsho!
#NilamboriFashion #PohelaBoishakh

*(Option 2 for each omitted here for space.)*

- Must: two separate posts, not mixed line by line; the same facts in both.
- Must not: a different discount or date in either language.

## 8. Victory Day with an offer

**User:** ১৬ ডিসেম্বর পোস্ট। সব পণ্যে ১৬% ছাড়, শুধু ১৬ তারিখ।

**Option 1, short:**
বিজয় দিবসের শুভেচ্ছা।
যাঁদের ত্যাগে এই দেশ, তাঁদের প্রতি গভীর শ্রদ্ধা।
শুধু আজ, সব পণ্যে ১৬% ছাড়।

- Must: tribute first; then exactly one offer line; nothing after it (no call to action, no delivery line, no hashtags).
- Must not: a year, "১৯৭১", a number of martyrs or any history the user did not give.
- Must not: the offer as the first line; party symbols, leaders' images or slogans; a wrongly drawn flag.

## 9. Sale requested on Ekushe February

**User:** ২১ ফেব্রুয়ারি উপলক্ষে ২১% ছাড়ের একটা পোস্ট লিখে দাও।

**Reply to the user:**
একুশে ফেব্রুয়ারি শোক আর শ্রদ্ধার দিন। এই দিনে ছাড়ের পোস্ট অনেকের কাছে অসম্মানের মনে হয়। এতে পেজের সুনাম নষ্ট হয়। তাই শ্রদ্ধার পোস্ট দিলাম। অফার দিতে চাইলে আগের বা পরের সপ্তাহে আলাদা পোস্টে দিন।

**Option 1, short:**
অমর একুশে।
ভাষা শহীদদের প্রতি শ্রদ্ধা।

**Option 2, fuller:**
অমর একুশে।
যাঁদের ত্যাগে আমরা বাংলায় কথা বলি, তাঁদের প্রতি গভীর শ্রদ্ধা।
#অমর_একুশে

- Must: decline the sale politely with the reason; offer a tribute instead.
- Must not: "শুভ একুশে"; any price, offer or call to action; "১৯৫২" or any year or history the user did not give.

## 10. Instagram, English, bakery

**User:** Instagram caption for our date and walnut cake. Tk 1,200 per pound, order 24 hours ahead, delivery inside Dhaka only, order form link is in our bio. Page: Mishti Mukh Bakery.

**Option 1, short:**
Date and walnut cake.
Tk 1,200 per pound. Please order 24 hours ahead.
Delivery inside Dhaka. Order form: link in bio.
#MishtiMukhBakery #DhakaBakery #DateWalnutCake

**Option 2, fuller:**
Date and walnut cake, Tk 1,200 per pound.
Please order 24 hours ahead.
We deliver inside Dhaka.
Tap the link in our bio to fill the order form.
#MishtiMukhBakery #DhakaBakery #DateWalnutCake

- Must: no clickable link in the caption (Instagram does not make it clickable); three to five hashtags.
- Must: every hashtag built from facts the user gave (page name, Dhaka, the cake).
- Must not: "best cake in Dhaka"; "limited slots" (not given); a hashtag that adds a claim, such as #HomemadeCake or #FreshBaked; quality words like "fresh", "moist" or "toasted walnuts".

## 11. Should not trigger: a customer reply

**User:** একজন কাস্টমার কমেন্টে লিখেছে "pp"। কি রিপ্লাই দিব?

**Reply to the user:**
এটা কাস্টমারের রিপ্লাই, ক্যাপশন না। এর জন্য customer-replies-bangla ব্যবহার করুন।

- Must: one line pointing to the page-replies skill.
- Must not: a caption, options, or hashtags; a reply written to the customer.
