আগের পর্বে আমরা জেনেছি `NaN` একটা `Number` তবে **legal কোন নাম্বার নয়** । NaN হচ্ছে জাস্ট একটা `global property` । যদি এটার টাইপ চেক করি `typeof` এর মাধ্যমে তাহলে দেখতে পাই `number`

```
console.log(typeof NaN); // number
```

এটা এমন এক জিনিস নিজের সাথে নিজের কম্পেরিজনও করা যায় না ।

```
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
```

মাঝে মধ্যে আমাদের এমন প্রয়োজন হতে পারে, যে এই ভ্যালু NaN কিনা। NaN হলে এটার উপর বেসড করে আমরা কন্ডিশন অনুযায়ী কাজ করতে পারি । মূলত এই প্রবলেম হ্যান্ডেল করার জন্য আগের পর্বে আমরা isNaN() ফাংশন ব্যবহার করে সমস্যার সমাধান করতে পেরেছিলাম । আজকে দেখব এই প্রবলেম হ্যান্ডেল করার আরেকটা ওয়ে। চলুন শুরু করা যাক ---

এটা জাভাস্ক্রিপ্টের নতুন ভার্সন **ES6** এ এসেছে `Number.isNaN()` মেথড । তার আগে আমরা দেখে নেই কিভাবে একটা `NaN` ভ্যালু পাওয়া যাবে

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

কনস্ট্রাক্টর ফাংশন `Number()` এর মাঝে কোন ভ্যালু দিলে, এই ভ্যালুকে Number() কনস্ট্রাক্টর ফাংশন নাম্বারে কনভার্ট করতে পারলে রিটার্ন হিসেবে ওই নাম্বার দিবে অথবা NaN । এটা মনে রাখবেন একটু পরে কাজ দিবে।

`Number.isNaN()` মেথড আর্গুমেন্ট হিসেবে ভ্যালু গ্রহন করে। এই ভ্যালুর টাইপ যদি `number` হয় এবং সেটা যদি `NaN` হয় তাহলে `Number.isNaN()` মেথড **`true`** রিটার্ন করবে অন্যথায় **`false`** রিটার্ন করবে।

আমরা কথায় বিশ্বাসী না কাজে বিশ্বাসী হয়ে যাক টেস্ট ---

```
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN('hello')); // false
console.log(Number.isNaN(NaN)); // true
```

প্রথমটাতে না হয় `10` দিয়েছি এটা একটা নাম্বার, তাই `false` রিটার্ন করল এটা মেনে নিলাম ২য়টাতে কেন `false` রিটার্ন করে ? হুমম কত বড় সাহস!a

আসুন একটু ব্যাখ্যা করি, আমি বলেছিলাম `Number.isNaN()` মেথড আর্গুমেন্ট হিসেবে শুধুমাত্র `NaN` ভ্যালু পেলে সে `true` রিটার্ন করবে otherwise `false`

প্রথম উদাহরনে `Number.isNaN()` মেথডে প্যারামিটার হিসেবে `10` দিছি । এটা একটা নাম্বার , কোন `NaN` ভ্যালু না তাই `false` রিটার্ন করে।

২য় উদাহরনে Number.isNaN() মেথডে প্যারামিটার হিসেবে একটা string দিছি এটা কোন NaN ভ্যালু না তাই false রিটার্ন করে।

৩য় উদাহরনে Number.isNaN() মেথডে প্যারামিটার হিসেবে ডিরেক্ট NaN ভ্যালু দিয়ে দিছি, এখন সে দেখতেছে আরে এটা তো আমার পরিচিত জিনিস NaN ভ্যালু । এই ভ্যালু সে খুব ভালোভাবে চিনতে পারে। এখন সে খুব সিরিয়াস ভাব নিয়ে চেক করতেছে দেখল আসলেই এটা NaN ভ্যালু কিনা । সে চেক করে দেখতে পেল এটা NaN তাই true রিটার্ন করল।

তার মানে Number.isNaN() মেথড ভ্যালু হিসেবে NaN পেলে true otherwise false রিটার্ন করবে।

এখন আমাদের কোন ভ্যালু NaN কিনা পাওয়ার জন্য আমরা Number() ফাংশন ব্যবহার করেছিলাম মনে আছে ? এই টেকনিকটাকে কাজে লাগিয়ে আমরা আমাদের সব প্রবলেম সলভ করতে পারি।
চলুন প্রাক্টিক্যালি দেখে নেই \_\_\_\_
const firstNumber = Number(10);
const firstNaN = Number('Hello');
console.log(Number.isNaN(firstNumber)); // false
console.log(Number.isNaN(firstNaN)); // true

চলুন আরো কিছু দেখে নেই \_\_\_\_
const secondNumber = Number(null);
const secondNaN = Number(undefined);
console.log(Number.isNaN(secondNumber)); // false
console.log(Number.isNaN(secondNaN)); // true

আপনি চাইলে কোন ভ্যারিয়েবল ডিক্লেয়ার না করে এভাবে করে দিতে পারেন \_\_\_\_
console.log(Number.isNaN(Number(10))); // false
console.log(Number.isNaN(Number('Hello'))); // true
console.log(Number.isNaN(Number('5'))); // false
console.log(Number.isNaN(Number(NaN))); // true
console.log(Number.isNaN(Number('NaN'))); // true
console.log(Number.isNaN(Number(null))); // false
console.log(Number.isNaN(Number(undefined))); // true
console.log(Number.isNaN(Number({}))); // true
console.log(Number.isNaN(Number('123ABC'))); // true
console.log(Number.isNaN(Number(''))); // false

যারা গত পর্ব পড়েছেন তারা এবার isNaN() function এর সাথে মিলিয়ে নিতে পারেন আসলেই কাজ করতেছে কিনা!
console.log(isNaN(10)); // false
console.log(isNaN('Hello')); // true
console.log(isNaN('5')); // false
console.log(isNaN(NaN)); // true
console.log(isNaN('NaN')); // true
console.log(isNaN(null)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN('123ABC')); // true
console.log(isNaN('')); // false
console.log(isNaN()); // true
console.log(isNaN(0/0)); // true

কেউ কেউ মনে ভাবতেছেন সবই বুঝলাম Number('Hi') এটা NaN বাট Number('5') কিভাবে 5 হলো এটা বুঝলাম না। এটাকে জাভাস্ক্রিপ্টের Coercion feathure বলে ।
ইনশা আল্লাহ কোন একদিন এটা নিয়ে লেখা হবে । সবাই ভালো থাকুন
