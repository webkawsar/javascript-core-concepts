আগের একটা পোস্টে আমরা দেখেছি, কিভাবে `typeof` অপারেটর এর সাহায্যে কোন ভ্যারিয়েবল এর ডাটা টাইপ চেক করতে পারি।  
প্রিমিটিভ ডাটা টাইপের ক্ষেত্রে আমরা সবকিছু ঠিকঠাক দেখতে পাচ্ছি শুধুমাত্র null ছাড়া।

```
const msg = "Hi! Guys";
const number = 420;
const isDeveloper = true;
const nickName = null;
const age = undefined;
const uniqueId = Symbol('id');
const largeNumber = 420n;

// Primitive Data Type Checking
console.log(typeof msg); // string
console.log(typeof number); // number
console.log(typeof isDeveloper); // boolean
console.log(typeof nickName); // object
console.log(typeof age); // undefined
console.log(typeof uniqueId); // symbol
console.log(typeof largeNumber); // bigint
```

সমস্যা হলো প্রিমিটিভ ডাটা `null` এবং Reference/Complex টাইপের ডাটার ক্ষেত্রে।
কোনো একটা ভ্যারিয়েবল এর ভ্যালু `null` হলেও সেটার টাইপ কিন্তু `object`। এটা একটা বাগ, যেটা জাভাস্ক্রিপ্টের শুরু থেকেই চলে আসছে এভাবে, যেমনটা বলা হয়ে থাকে আরকি। এটা `null` হওয়া উচিৎ ছিল।

```
// Primitive Data
const nickName = null;
console.log(typeof nickName); // object


// Reference/Complex Data
const teams = ['Gias', 'Samim', 'Mustakim', 'Ruhi'];
const profile = {
    firsName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Developer'
}
const sayHi = () => 'Hi! Guys';

console.log(typeof teams); // object
console.log(typeof profile); // object
console.log(typeof sayHi); // function
```

এসব সলভ করার আগে আমাদের জানতে হবে জাভাস্ক্রিপ্টে অলমোস্ট সবকিছুই Object। এখানে teams একটা Array। এটার ডাটা টাইপ চেক করলে দেখা যাচ্ছে `object` আবার, profile হচ্ছে একটা Object। এটার ডাটা টাইপ চেক করলে দেখা যাচ্ছে `object`। এখন একটা Array হচ্ছে `object`, আবার, Object ও হচ্ছে `object`। তাহলে আমরা আসলেই বুঝব কিভাবে কোনটা Array আর কোনটা Object।

এর জন্য প্রথমে আমরা একটা ওয়ে দেখে নেই সেটা হচ্ছে `constructor` Property দিয়ে চেক করা। `constructor` Property যেকোন ভ্যারিয়েবল এর `constructor` ফাংশন রিটার্ন করে। এভাবে দেখে বুঝতে পারি এটা আসলে কি।

```
console.log(teams.constructor) // function Array() { [native code] }
console.log(profile.constructor) // function Object() { [native code] }
console.log(sayHi.constructor) // function Function() { [native code] }
```

একটা Array আসলেই Array কিনা তা বুঝার আরেকটা উপায় আছে `instanceof` অপারেটর এর মাধ্যেমে চেক করতে পারি। চলুন দেখে নেই কিভাবে চেক করা যায়।

এজন্য প্রথমে যে ভ্যারিয়েবল এর ডাটা টাইপ চেক করা হবে এটি দিতে হবে এর পরে `instanceof` অপারেটর বসিয়ে সাথে Array কনস্ট্রাক্টর দিয়ে দিলে আমরা `true/false` দেখতে পাব। যদি ভ্যারিয়েবল সত্যিকারের Array হয়ে থাকে তাহলে আমরা রেজাল্ট `true` দেখতে পাব আর যদি ভ্যারিয়েবল সত্যিকারের Array না হয়ে থাকে তাহলে `false` দেখতে পাব।

```
console.log(teams instanceof Array); // true
console.log(profile instanceof Array); // false
```

আর কোন একটা ফাংশনের ডাটা টাইপ আমরা `typeof` অপারেটরের মাধ্যমে চেক করলে Funcction দেখতে পাব। তাহলে তো সব ভেজাল
শেষ।

```
const sayHi = () => 'Hi! Guys';
console.log(typeof sayHi);
console.log(sayHi.constructor) // function Function() { [native code] }

const date = new Date();
console.log(typeof date) // object
console.log(date.constructor) // function Date() { [native code] }
```

লাস্ট আরেকটা ওয়ে আছে চলুন দেখে নেই একটা Array আসলেই Array কিনা। এটা হচ্ছে Array.isArray() মেথডের মাধ্যমে চেক করা

```
const teams = ['Gias', 'Samim', 'Mustakim', 'Ruhi'];
const profile = {
    firsName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Developer'
}

console.log(Array.isArray(teams)) // true
console.log(Array.isArray(profile)) // false
```

একটু প্রাক্টিকালভাবে দেখিয়ে দিয়ে শেষ করতে চাই

```
let teams = ['Gias', 'Samim', 'Mustakim', 'Ruhi'];
let profile = {
    firsName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Developer'
}

// array checking
if(Array.isArray(teams)) {
    console.log('এটা একটা Array')
} else {
    console.log('আমি জানিইইইইইই না!')
}

// object checking
if(typeof profile === 'object' && profile !== null && !Array.isArray(profile)) {
    console.log('এটা একটা Object')
} else {
    console.log('আমি জানিইইইইইই না!')
}
```

আমার মাথায় এই কয়টা আছে এই মুহুর্তে। যদি আরোও থেকে থাকে, ইনশা আল্লাহ এই পোস্ট আপডেট হবে।
তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন থেকে থাকে অথবা মতামত জানাতে পারেন।
