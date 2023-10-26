👋 Hello `JavaScript Enthusiasts!` আজকে আমরা জাভাস্ক্রিপ্ট এর `NaN` নিয়ে একটু জানার চেষ্টা করব

✌️ আগের পর্বে আমরা জেনেছি `NaN` একটা `Number` তবে **legal কোন নাম্বার নয়** । `NaN` হচ্ছে জাস্ট একটা `global property` । যদি এটার টাইপ চেক করি `typeof` এর মাধ্যমে তাহলে দেখতে পাব `number`

```
console.log(typeof NaN); // number
```

এটা এমন এক জিনিস নিজের সাথে নিজের কম্পেরিজনও করা যায় না 🙄

```
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
```

✅ মাঝে মধ্যে আমাদের এমন প্রয়োজন হতে পারে, যে এই ভ্যালু `NaN` কিনা। `NaN` হলে এটার উপর বেসড করে আমরা কন্ডিশন অনুযায়ী যেকোন কাজ করতে পারি । মূলত এই প্রবলেম হ্যান্ডেল করার জন্য আগের পর্বে আমরা `isNaN()` ফাংশন ব্যবহার করে দেখিয়েছিলাম । আজকে দেখব এই প্রবলেম হ্যান্ডেল করার আরেকটা ওয়ে। চলুন শুরু করা যাক ---

👉 এটা জাভাস্ক্রিপ্টের নতুন ভার্সন **ES6** এ এসেছে `Number.isNaN()` মেথড । তার আগে আমরা ম্যানুয়ালি দেখে নেই কিভাবে একটা `NaN` ভ্যালু পাওয়া যায়

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

👉 কনস্ট্রাক্টর ফাংশন `Number()` এর মাঝে আর্গুমেন্ট হিসেবে কোন ভ্যালু দিলে, এই ভ্যালুকে কনস্ট্রাক্টর ফাংশন যদি নাম্বারে কনভার্ট করতে পারে তাহলে **`number`** রিটার্ন করবে অন্যথায় **`NaN`** । এটা মনে রাখবেন একটু পরে কাজ দিবে।

👉 Coders `Number.isNaN()` মেথড আর্গুমেন্ট হিসেবে ভ্যালু গ্রহন করে। এই ভ্যালুর ডাটা টাইপ `number` হয় এবং সেটা যদি `NaN` হয় তাহলে `Number.isNaN()` মেথড **`true`** রিটার্ন করবে অন্যথায় **`false`** রিটার্ন করবে 😎

আমরা কথায় বিশ্বাসী না, কাজে বিশ্বাসী হয়ে যাক টেস্ট ---

```
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN('Hello')); // false
console.log(Number.isNaN(NaN)); // true
```

প্রথমটাতে না হয় `10` দিয়েছি এটা একটা নাম্বার, তাই `false` রিটার্ন করে এটা না হয় মেনে নিলাম ২য় কনসোল কেন `false` রিটার্ন করে ? হুমম কত বড় সাহস!

আসুন একটু ব্যাখ্যা করি, আমি বলেছিলাম `Number.isNaN()` মেথড আর্গুমেন্ট হিসেবে শুধুমাত্র `NaN` ভ্যালু পেলে সে `true` রিটার্ন করবে অন্যথায় `false`

👉 ১ম কনসোলে `Number.isNaN()` মেথডে আর্গুমেন্ট হিসেবে `10` দিয়েছি । এটা একটা নাম্বার , কোন `NaN` ভ্যালু না তাই `false` রিটার্ন করে।

👉 ২য় কনসোলে `Number.isNaN()` মেথডে আর্গুমেন্ট হিসেবে `Hello` দিয়েছি এটাও কোন `NaN` ভ্যালু না। এটা একটা স্ট্রিং তাই `false` রিটার্ন করে।

👉 ৩য় কনসোলে `Number.isNaN()` মেথডে আর্গুমেন্ট হিসেবে ডিরেক্ট `NaN` ভ্যালু দিয়ে দিয়েছি, এখন সে দেখতেছে আরে এটা তো আমার পরিচিত জিনিস `NaN` । এই ভ্যালু সে খুব ভালোভাবে চিনতে পারে। এখন সে খুব সিরিয়াস ভাব নিয়ে চেক করে দেখলো আসলেই এটা `NaN` ভ্যালু কিনা । সে চেক করে দেখতে পেল এটা `NaN` তাই `true` রিটার্ন করে।

> তার মানে `Number.isNaN()` মেথডে আর্গুমেন্ট হিসেবে কোন ভ্যালু দিলে সেটা যদি `NaN` হয় এবং টাইপ যদি `number` হয় তাহলে `true` রিটার্ন করবে অন্যথায় `false` রিটার্ন করবে।

তাহলে তো আমাদের প্রবলেম সল্ভ হলো না যেই লাউ সেই কদু হয়ে গেল! দুশ্চিন্তার কোন কারন নেই উপায় আছে 🤝

⚡ একটু আগে আমরা দেখেছি কিভাবে ম্যানুয়ালি `Number()` কনস্ট্রাক্টর ফাংশন ব্যাবহার করে `NaN` ভ্যালু পাওয়া যায়। এই টেকনিক কে কাজে লাগিয়ে আমরা আমাদের প্রবলেম সলভ করতে পারি। চলুন প্রাক্টিক্যালি দেখে নেই ---

```
const firstNumber = Number(10);
const firstNaN = Number('Hello');

console.log(Number.isNaN(firstNumber)); // false
console.log(Number.isNaN(firstNaN)); // true
```

চলুন আরো কিছু দেখে নেই

```
const emptyObject = Number({});
const undefinedValue = Number(undefined);

console.log(Number.isNaN(emptyObject)); // true
console.log(Number.isNaN(Number(undefinedValue))); // true
```

👇 নিচে আরোও কিছু এক্সাম্পল দিয়ে দিলাম বুঝার জন্য। কোড রান করে একটা একটা করে চেক করেন তাহলে খুব সহজে বুঝতে পারবেন আসলে কি হচ্ছে, কিভাবে হচ্ছে। ব্যাস এই তো ---

```
console.log(Number.isNaN(Number(10))); // false
console.log(Number.isNaN(Number('Hello'))); // true
console.log(Number.isNaN(Number('5'))); // false
console.log(Number.isNaN(Number(NaN))); // true
console.log(Number.isNaN(Number('NaN'))); // true
console.log(Number.isNaN(Number(null))); // false
console.log(Number.isNaN(Number(undefined))); // true
console.log(Number.isNaN(Number({}))); // true
console.log(Number.isNaN(Number([]))); // false
console.log(Number.isNaN(Number('123ABC'))); // true
console.log(Number.isNaN(Number(''))); // false
console.log(Number.isNaN(Number(true))); // false
console.log(Number.isNaN(Number(false))); // false
```

🎗️ কেউ কেউ মনে মনে হয়তো ভাবছেন সবই বুঝলাম `Number('Hello')` এটা `NaN` বাট `Number('5')` কিভাবে `5` হলো এটা বুঝলাম না। এটাকে জাভাস্ক্রিপ্টের `Coercion` ফিচার বলে । এটা নিয়ে পড়াশোনা করতে পারেন।

🤝 তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন অথবা মতামত থেকে থাকে তাহলে 👇 কমেন্টে জানাতে পারেন।
**`JavaScript`** রিলেটেড আর্টিকেলে আপনি ইন্টারেস্টেড থাকলে Coders থেকে আমার অন্যান্য আর্টিকেলগুলোও পড়ে দেখতে পারেন 😎😎






/************************Code Reference ***************************/

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
console.log(Number(10, 'Hi')) // 0


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


console.log(Number.isNaN(10)); // false
console.log(Number.isNaN('Hello')); // false
console.log(Number.isNaN('5')); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('NaN')); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN([])); // false
console.log(Number.isNaN('123ABC')); // false
console.log(Number.isNaN('')); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(false)); // false


console.log(Number.isNaN(Number(10))); // false
console.log(Number.isNaN(Number('Hello'))); // true
console.log(Number.isNaN(Number('5'))); // false
console.log(Number.isNaN(Number(NaN))); // true
console.log(Number.isNaN(Number('NaN'))); // true
console.log(Number.isNaN(Number(null))); // false
console.log(Number.isNaN(Number(undefined))); // true
console.log(Number.isNaN(Number({}))); // true
console.log(Number.isNaN(Number([]))); // false
console.log(Number.isNaN(Number('123ABC'))); // true
console.log(Number.isNaN(Number(''))); // false
console.log(Number.isNaN(Number(true))); // false
console.log(Number.isNaN(Number(false))); // false

