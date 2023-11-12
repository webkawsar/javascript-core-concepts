// case 1
console.log(0 === -0); // true
console.log(-0 === +0); // true
console.log(+0 === -0); // true
console.log(-0 === -0); // true

// case 2
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(Object.is(-0, +0));

console.log(Number(+0));
console.log(Number(-0));

// Object.is() doesn't coerce either value
// Object.is() and === is in their treatment of signed zeros and NaN values

// string is empty and no separator is specified
// console.log(emptyString.split(""));


👋 Hello `JavaScript Enthusiasts!` আজকে আমরা জাভাস্ক্রিপ্ট এর `NaN` নিয়ে আরোও একটু জানার চেষ্টা করব

✌️ আগের দুই পর্বে আমরা জেনেছি `NaN` একটা `Number` তবে **legal কোন নাম্বার নয়** । `NaN` হচ্ছে জাস্ট একটা `global property` । যদি এটার টাইপ চেক করি `typeof` এর মাধ্যমে তাহলে দেখতে পাব `number`

```
console.log(typeof NaN); // number
```

আগের দুই পর্বে আমরা `isNaN()` ফাংশন এবং `Number.isNaN()`  মেথড দিয়ে কিভাবে চেক করা যায় এটা দেখেছি। 
আজকে আমরা দেখব আরোও সুন্দর একটা হেন্ডি টেকনিক `Object.is()` এর ব্যবহার 


`Object.is()` মেথড দুইটা ভ্যালু সেইম কি সেইম না এটা নিশ্চিত করে  বলে দিতে পারে। 


```
console.log(Object.is('1', 1)); // false


console.log(Object.is(NaN, NaN)); // true

console.log(Object.is(-0, 0)); // false

const obj = {};
console.log(Object.is(obj, {})); // false
```

