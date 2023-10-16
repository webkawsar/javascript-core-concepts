


/**************************** Reference Text Start ***************************/

// Array constructor:
const a = Array(5); // [ <5 empty items> ]
console.log(a)
a.find(element => {
    console.log('Empty slot')
})


// Consecutive commas in array literal:
const b = [1, 2, , undefined, 5]; // [ 1, 2, <2 empty items>, 5 ]
console.log(b)
console.log(b[2] == b[3])
console.log(b[2] === b[3])

b.forEach((num) => {
    console.log(num)
})


/**************************** Reference Text End ***************************/





জাভাস্ক্রিপ্টে একটা Array তৈরী করা যায় তিন ভাবে --

```
১. বিল্ট ইন কনস্টাক্টর দিয়ে যেমনঃ new Array();
২. বিল্ট ইন কনস্টাক্টর দিয়ে তবে new কিওয়ার্ড ছাড়া যেমনঃ Array();
৩. লিটারেল সিনট্যাক্স দিয়ে যেমনঃ [1, 2, 3]  এটি স্ট্যান্ডার্ড।
```

👉 আমরা জাভাস্ক্রিপ্টে বিল্ট ইন কনস্ট্রাক্টর **`new Array();`** দিয়ে ইনিশিয়েট করে এভাবে একটা Array তৈরী করতে পারি

```
let newArr = new Array();
console.log(newArr) // []
console.log(newArr.length) // 0
```

যদি এভাবে একটা `Array` ইনিশিয়েট করি তাহলে এর আর্গুমেন্ট হিসেবে একাধিক ভ্যালু দিয়ে দিতে পারি। তাহলে প্রতিটা ভ্যালু `Array` এর ইলিমেন্ট হিসেবে বসে যাবে।

```
newArr = new Array(1, 3, 5);
console.log(newArr) // [1, 3, 5]
```

এখন `length` প্রোপার্টি দিয়ে চেক করলে Array এর `length` দেখা যাবে

```
console.log(newArr.length) // 3
```

এভাবে তৈরী করলে কিছু অপ্রত্যাশিত রেজাল্ট পাবেন । যেমনঃ এভাবে বিল্ট ইন কনস্টাক্টর দিয়ে Array তৈরী করা হলে সেটা **`Empty Slot`** এর এতটা ইলিমেন্ট তৈরী করে ফেলে।

```
newArr = new Array(1, 3, 5);
console.log(newArr) // [1, 3, 5]
```

```
newArr = new Array(1, 40, 420);
console.log(newArr) // [1, 40, 420]
```

এভাবে শুধুমাত্র একটা আর্গুমেন্ট দিলে সে এতটা **`Empty Slot`** এর ইলিমেন্ট তৈরী করে ফেলে। **`Empty Slot`** আর `undefined` ভ্যালু এক জিনিস না

```
newArr = new Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]
```

`length` প্রোপার্টি দিয়ে চেক করলে `length` ঠিকই দেখাবে

```
console.log(newArr.length) // 3
```

কিন্তু ইনডেক্স ধরে এক্সেস করলে `undefined` পাবেন

```
console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined
```

পুরাতন কিছু মেথড **`Empty Slot`** কে ইটারেশনের সময় স্কিপ করে চলে যায়, তবে নতুন ভার্শনের কিছু কিছু মেথড `undefined` হিসেবে ট্রিট করে ফলে ব্যবহার করা যায়। Array এর মাঝে **`Empty Slot`** থাকতে পারে তবে, এটা আর `undefined` সেট আছে এমন কোন স্লটের ভ্যালু **এক জিনিস না**

```
// Empty slot skip on iteration
newArr = new Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]

newArr.forEach(element => {
    console.log('Treat as an Empty Slot') // console হবে না
})

newArr.map(element => {
    console.log('Treat as an Empty Slot') // console হবে না
    return true;
})
```

কিছু মেথড `undefined` হিসেবে ট্রিট করে যেমনঃ

```
newArr = new Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]

newArr.find(element => {
    console.log('Treat as an undefined') // console হবে
})
```

এখন আপনি চাচ্ছেন যেকোন মেথড ই এটাকে `undefined` হিসেবে ট্রিট করে ইটারেট করে যাবে তাহলে এই ট্রিক ফলো করতে হবে

```
// modify for a treat as an undefined
newArr = Array(4);
newArr = [...newArr];
console.log(newArr) // [undefined, undefined, undefined, undefined]
console.log(newArr.length); // 4

console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined
console.log(newArr[3]) // undefined

newArr.forEach(element => {
    console.log('Treat as an undefined') // console হবে
})
```

এখন আপনি একটু দুষ্টুমি করলেন Array এর সাথে। Array এর ইনডেক্স ধরে একটা ইলিমেন্ট ডিলিট করে দিলেন। যদিও এটা করা ঠিক না। কি আছে জীবনে যা হবার হয় হবে!

```
newArr = Array(3);
newArr = [...newArr];
console.log(newArr) // [undefined, undefined, undefined]

delete newArr[1]
console.log(newArr) // [undefined, <empty element>, undefined]
console.log(newArr.length) // 3

console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined
```

এভাবে ইনডেক্স ধরে কোন ইলিমেন্ট ডিলিট করে দিলে **`Empty Slot`** হয়ে যাবে।  
এখন আপনি চাচ্ছেন এই Array কে লুপ করলে **`Empty Slot`** কে স্কিপ করে চলে যায় নাকি দেখতে

```
newArr = Array(3);
newArr = [...newArr];
console.log(newArr) // [undefined, undefined, undefined]

delete newArr[1]
console.log(newArr) // [undefined, <empty element>, undefined]
console.log(newArr.length) // 3

console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined

newArr.forEach(element => {

    // Only empty slot skip on iteration
    console.log('few elements iterate only')
})
```

লুপ এর **`Empty Slot`** ছাড়া বাকি ইলিমেন্টগুলো ইটারেট হবে শুধুমাত্র

👉 এভাবেও বিল্ট ইন কনস্টাক্টর দিয়ে তবে new কিওয়ার্ড ছাড়া Array তৈরী করতে পারবেন । এটা আর প্রথম পদ্ধতি পুরোপুরি সেইমভাবে কাজ করে

```
newArr = Array();
console.log(newArr) // []
console.log(newArr.length) // 0
```

```
// Created array with element
newArr = Array(1, 3, 5);
console.log(newArr) // [1, 3, 5]
console.log(newArr.length) // 3
```

যখন একটা আর্গুমেন্ট পাস করা হবে তখন ঐ আগের প্রবলেমটা হয়ে যাবে

```
newArr = Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]
console.log(newArr.length) // 3

console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined
```

ইটারেশনের সময় স্কিপ করে যাবে

```
newArr.forEach(element => {
    console.log('Treat as an Empty Slot') // console হবে না
})

newArr.map(element => {
    console.log('Treat as an Empty Slot') // console হবে না
    return true;
})
```

এভাবে একটু ট্রিক খাটিয়ে নিলে তাহলে **`Empty Slot`** কে `undefined` ট্রিট করে যাবে

```
newArr = Array(4);
newArr = [...newArr];
console.log(newArr) // [undefined, undefined, undefined, undefined]
console.log(newArr.length); // 4

console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined
console.log(newArr[3]) // undefined

newArr.forEach(element => {
    console.log('Treat as an undefined') // console হবে
})
```

যদি একটা ইলিমেন্ট ধরে ডিলিট করা হয় তাহলে **`Empty Slot`** হয়ে যাবে

```
delete newArr[1]
console.log(newArr) // [undefined, <empty element>, undefined, undefined]
console.log(newArr.length) // 4

console.log(newArr[0]) // undefined
console.log(newArr[1]) // undefined
console.log(newArr[2]) // undefined
console.log(newArr[3]) // undefined
```

শুধুমাত্র **`Empty Slot`** কে স্কিপ করে যাবে ইটারেশনের সময় বাকি গুলো ইটারেট হবে

```
newArr.forEach(element => {
    console.log('Empty Slot') // console হবে না Empty Slot
})
```

👉 আর ৩ নাম্বার ওয়ে `লিটারেল সিনট্যাক্স` নিয়ে লেখলাম না, এটা সবাই ব্যবহার করে এবং সেইফ জোনে থাকতে হলে লিটারেল সিনট্যাক্সে লেখা স্ট্যান্ডার্ড

এমন সিচুয়েশনে পড়তে পারেন যেমন ধরেন আপনি React এ `Declarative` এপ্রোচে একটা `integer` নাম্বার এর উপর বেইজ করে লুপ করবেন। আজকে আমি এমন সিচুয়েশনে পড়ে জাভাস্ক্রিপ্টে বিল্ট ইন কিছু আছে কিনা দেখতে দেখতে এই ফিচারকে কাজে লাগিয়ে প্রবলেমটা সলভ করি।

তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন থেকে থাকে অথবা মতামত জানাতে পারেন।






