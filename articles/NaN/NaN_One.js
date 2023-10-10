


জাভাস্ক্রিপ্টে খুবই কনফিউজিং 🙄 এবং বিদঘুটে একটা জিনিস হচ্ছে **`NaN`** । যদি এটার কনসেপ্ট বুঝতে পারেন তাহলে এটার যেকোন প্রবলেম সল্যুশন করতে পারবেন খুব সহজে 😉

```
NaN = Not a Number
```

এটা **`number`** তবে **legal কোন নাম্বার নয়** । **`NaN`** হচ্ছে জাস্ট একটা **`global property`** । যদি এটার টাইপ চেক করেন **`typeof`** এর মাধ্যমে তাহলে দেখতে পাবেন **`number`**

```
console.log(typeof NaN); // number
```

এটা যদি কম্পেরিজন করতে যান তাহলে দেখবেন আরেক কনফিউজিং জিনিস

```
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
```

এখন আপনার এমন প্রয়োজন হতে পারে এটা কম্পেয়ার করার তাহলে কি করবেন?
সল্যুশন ২টা হতে পারে ---

```
1. isNaN() global function দিয়ে চেক করা
2. Number.isNaN() মেথড দিয়ে চেক করা
```

তো আজকে আমরা isNaN() এর ব্যবহার জানব। isNaN() function আর্গুমেন্ট হিসেবে `value` রিসিভ করে । এই ভ্যালু যদি `NaN` হয় তাহলে isNaN() function **`true`** রিটার্ন করবে । আর যদি ভ্যালু NaN না হয় তাহলে **`false`** রিটার্ন করবে । এখন ভ্যালু NaN কিনা এটা চেক করা ঘুরেফিরে একই প্রবলেম । টেনশনের কোন কারন নেই আপনাকে এটা ম্যানুয়ালি চেক করে বলতে হবে না এই ভ্যালু NaN কিনা। **জাভাস্ক্রিপ্ট অটোমেটিক্যালি করে দিবে** । জাভাস্ক্রিপ্ট অটোমেটিক্যালি কাজ করে দেয়ার আগে আমরা জাভাস্ক্রিপ্টের `Number()` ফাংশন কে কাজে লাগিয়ে ম্যানুয়ালি চেক করে দেখি চলেন ---

```
console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
```

প্রথম উদাহরণ এ জাভাস্ক্রিপ্ট এটাকে number এ কনভার্ট করতে পেরেছে তাই number `10` রিটার্ন করেছে । পরের উদাহরণ এ এটাকে সে number এ কনভার্ট করতে পারেনি তাই `NaN` রিটার্ন করেছে ।

এখন চলেন মূল কাজে ---

```
console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
```

এই উদাহরণে isNaN() ফাংশনে `10` ভ্যালু হিসেবে দেয়া হয়েছে । isNaN() ফাংশন এটাকে প্রথমে নাম্বারে কনভার্ট করার ট্রাই করে । সে ভ্যালুকে নাম্বারে কনভার্ট করতে পেরেছে। যেহেতু 10 একটা নাম্বার সংখ্যা তাই `false` রিটার্ন করেছে। আমি আগেই বলেছি ভ্যালু যদি `NaN` হয় তাহলে সে **`true`** রিটার্ন করবে অন্যথায় **`false`** ।

নিচে কিছু উদাহরণ দিয়ে দিলাম বুঝার জন্য। কোড রান করে একটা একটা করে চেক করেন তাহলে খুব সহজে বুঝতে পারবেন আসলে কি হচ্ছে কিভাবে হচ্ছে। ব্যাস এই তো

```
console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
console.log(Number('5')); // 5
console.log(Number(NaN)); // NaN
console.log(Number('NaN')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({})); // NaN
console.log(Number([])); // 0
console.log(Number('123ABC')); // NaN
console.log(Number('')); // 0
console.log(Number(true)) // 1
console.log(Number(false)) // 0

console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN([])); // false
console.log(isNaN('')); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false
```

তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন থেকে থাকে অথবা মতামত জানাতে পারেন।








// ================================ Reference Code ==========================



// Number.isNaN() is an ECMAScript6 (ES6) feature.
// Number.isNaN() returns true if a number is Not-a-Number.
// In JavaScript, NaN is a number that is not a legal number.
// The Number.isNaN() method returns true if the value is NaN, and the type is a Number.


// isNaN(value) er value NaN hole true or false return korbe
// isNaN() er value ke se first e  Number e convert korar try kore. converted value NaN hole isNaN() true or false




// first part code examples

console.log(typeof NaN);
console.log(NaN == NaN);
console.log(NaN === NaN);

console.log(NaN == null);
console.log(Number.NaN === NaN);



console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
console.log(Number('5')); // 5
console.log(Number(NaN)); // NaN
console.log(Number('NaN')); // NaN
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number({})); // NaN
console.log(Number([])); // 0
console.log(Number('123ABC')); // NaN 
console.log(Number('')); // 0
console.log(Number(true)) // 1
console.log(Number(false)) // 0



console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN([])); // false
console.log(isNaN('')); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false



console.log(isNaN(0/0)); // true
console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN()); // true


console.log(NaN == Number('Hello'));










