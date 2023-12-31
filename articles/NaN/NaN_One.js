


জাভাস্ক্রিপ্টে খুবই কনফিউজিং 🙄 এবং বিদঘুটে একটা জিনিস হচ্ছে **`NaN`** । যদি এটার কনসেপ্ট বুঝতে পারেন তাহলে এটার যেকোন প্রবলেম সল্যুশন করতে পারবেন খুব সহজে 😎

```
NaN = Not a Number
```

✌️ এটা **`number`** তবে **legal কোন নাম্বার নয়** । **`NaN`** হচ্ছে জাস্ট একটা **`global property`**। যদি এটার ডাটা টাইপ চেক করেন **`typeof`** অপারেটর এর মাধ্যমে তাহলে দেখতে পাবেন **`number`**

```
console.log(typeof NaN); // number
```

এটা যদি কম্পেরিজন করতে যান তাহলে দেখবেন আরেক কনফিউজিং জিনিস 😱 নিজের সাথে নিজের কম্পেরিজনও হয় না 😁

```
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
```

এখন আপনার এমন প্রয়োজন হতে পারে এটা কম্পেয়ার করার তাহলে কি করবেন? 😛  
সল্যুশন 3টা হতে পারে ---

```
1. isNaN() ফাংশন দিয়ে চেক করা
2. Number.isNaN() মেথড দিয়ে চেক করা
3. Object.is() মেথড দিয়ে চেক করা
```

✅ তো আজকে আমরা `isNaN()` এর ব্যবহার জানব। `isNaN()` ফাংশন আর্গুমেন্ট হিসেবে ভ্যালু রিসিভ করে। এই ভ্যালু যদি `NaN` হয় তাহলে **`true`** রিটার্ন করবে। আর যদি ভ্যালু `NaN` না হয় তাহলে **`false`** রিটার্ন করবে। এখন ভ্যালু `NaN` কিনা এটা চেক করা ঘুরেফিরে একই প্রবলেম। টেনশনের কোন কারন নেই আপনাকে এটা ম্যানুয়ালি চেক করে বলতে হবে না এই ভ্যালু `NaN` কিনা। **জাভাস্ক্রিপ্ট অটোমেটিক্যালি করে দিবে** । জাভাস্ক্রিপ্ট অটোমেটিক্যালি কাজ করে দেয়ার আগে আমরা জাভাস্ক্রিপ্টের `Number()` কনস্ট্রাক্টর ফাংশন কে কাজে লাগিয়ে ম্যানুয়ালি আগে চেক করে দেখি চলেন ---

```
console.log(Number(10)); // 10
console.log(Number('Hello')); // NaN
```

👉 কনস্ট্রাক্টর ফাংশন `Number()` এর মাঝে আর্গুমেন্ট হিসেবে কোন ভ্যালু দিলে, এই ভ্যালুকে কনস্ট্রাক্টর ফাংশন যদি নাম্বারে কনভার্ট করতে পারে তাহলে **`number`** অন্যথায় **`NaN`** রিটার্ন করবে। এটা একটু মনে রাখবেন পরে কাজে দিবে।

এখন চলেন মূল কাজে ---

```
console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
```

👉 প্রথম কনসোল এ `isNaN()` ফাংশনে `10` ভ্যালু দেয়া হয়েছে । `isNaN()` ফাংশন এটাকে প্রথমে নাম্বারে কনভার্ট করার ট্রাই করে । সে ভ্যালুকে নাম্বারে কনভার্ট করতে পেরেছে। যেহেতু `10` একটা নাম্বার সংখ্যা তাই `false` রিটার্ন করেছে। আমি আগেই বলেছি ভ্যালু যদি `NaN` হয় তাহলে সে **`true`** রিটার্ন করবে অন্যথায় **`false`** ।

🚀 নিচে কিছু উদাহরণ দিয়ে দিলাম বুঝার জন্য। কোড রান করে একটা একটা করে চেক করেন তাহলে খুব সহজে বুঝতে পারবেন আসলে কি হচ্ছে কিভাবে হচ্ছে।

👇 প্রথমে `Number()` কনস্ট্রাক্টর ফাংশন কোন কোন ভ্যালুকে নাম্বারে কনভার্ট করতে পারে, কিভাবে করে এগুলো বুঝার চেষ্টা করেন

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
```

👇 এখন `Number()` কনস্ট্রাক্টর ফাংশন যে যে ভ্যালুকে নাম্বারে কনভার্ট করতে পারেনি সেগুলো `isNaN()` ফাংশন `true` রিটার্ন করেছে কিনা বুঝার ট্রাই করেন। ব্যাস এই তো

```
console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN([])); // false
console.log(isNaN('123ABC')); // true
console.log(isNaN('')); // false
console.log(isNaN(true)); // false
console.log(isNaN(false)); // false
```

🤝 তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন অথবা মতামত থেকে থাকে তাহলে 👇 কমেন্টে জানাতে পারেন।
**`JavaScript`** রিলেটেড আর্টিকেলে আপনি ইন্টারেস্টেড থাকলে Coders থেকে আমার অন্যান্য আর্টিকেলগুলোও পড়ে দেখতে পারেন😎😎







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










