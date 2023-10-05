

const msg = "Hi! Guys";
const number = 420;
const teams = ['Gias', 'Samim', 'Kawsar', 'Mustakim', 'Ruhi'];
const profile = {
    firsName: 'Kawsar',
    lastName: 'Ahmed',
    profession: 'Developer'
}
const isMarried = false;
const girlfriend = undefined;
const nickName = null;
const uniqueId = Symbol('id');
const largeNumber = 420n;


console.log(teams instanceof Object); // true
console.log(profile instanceof Array); // false
console.log(profile instanceof Object); // true
console.log(msg instanceof Object); // false
console.log(msg instanceof String)

console.log(msg.constructor)
console.log(number.constructor)
console.log(teams.constructor)
console.log(profile.constructor)
console.log(isMarried.constructor)
console.log(uniqueId.constructor)
console.log(largeNumber.constructor)



আগের একটা পোস্টে আমরা দেখেছি, কিভাবে typeof অপারেটর এর সাহায্যে কোন ভ্যারিয়েবল এর ডাটা টাইপ চেক করতে পারি।  
প্রিমিটিভ ডাটা টাইপের ক্ষেত্রে আমরা সবকিছু ঠিকঠাক দেখতে পাচ্ছি। 

// Primitive Data
const msg = "Hi! Guys";
const number = 420;
const isMarried = false;
// const nickName = null;
const age = undefined;
const uniqueId = Symbol('id');
const largeNumber = 420n;

console.log(typeof msg); // string
console.log(typeof number); // number
console.log(typeof isMarried); // boolean
// console.log(typeof nickName); // object
console.log(typeof age); // undefined
console.log(typeof uniqueId); // symbol
console.log(typeof largeNumber); // bigint


কিন্তু সমস্যা হলো প্রিমিটিভ ডাটা `null` এবং Reference/Complex টাইপের ডাটার ক্ষেত্রে।
কোনো একটা ভ্যারিয়েবল এর ভ্যালু null হলে সেটার টাইপ্ কিন্তু object। এটা একটা বাগ। যেটা জাভাস্ক্রিপ্টের শুরু থেকেই চলে আসছে এভাবে, যেমনটা বলা হয়ে থাকে আরকি।  এটা Null হওয়া উচিৎ ছিল। 

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


এসব সলভ করার আগে আমাদের জানতে হবে জাভাস্ক্রিপ্টে অলমোস্ট সবকিছুই Object। এখানে teams একটা Array। এটার ডাটা টাইপ চেক করলে দেখা যাচ্ছে `object` আবার, profile হচ্ছে একটা `Object`। এটার ডাটা টাইপ চেক করলে দেখা যাচ্ছে `object`। এখন একটা Array হচ্ছে `object`, আবার, Object ও হচ্ছে `object`। তাহলে আমরা আসলেই বুঝব কিভাবে কোনটা Array আর কোনটা Object।


এর জন্য প্রথমে আমরা একটা ওয়ে দেখে নেই সেটা হচ্ছে `constructor` Property দিয়ে চেক করা। `constructor` Property যেকোন ভ্যারিয়েবল এর `constructor` ফাংশন রিটার্ন করে। এভাবে দেখে বুঝতে পারি এটা আসলে কি। 
```
console.log(teams.constructor) // function Array() { [native code] }
console.log(profile.constructor) // function Object() { [native code] }
console.log(sayHi.constructor) // function Function() { [native code] }
```


// একটা Array আসলেই Array কিনা তা বুঝার কয়েকটা উপায় আছে তার মধ্যে একটা উপায় হচ্ছে instanceof অপারেটর এর মাধ্যেমে চেক করতে পারি। চলুন দেখে নেই কিভাবে চেক করা যায়। 

// এজন্য প্রথমে যে ভ্যারিয়েবল এর ডাটা টাইপ চেক করা হবে এটি দিতে হবে এর পরে instanceof অপারেটর বসিয়ে সাথে Array কনস্ট্রাক্টর দিয়ে দিলে আমরা True/False দেখতে পাব। যদি ভ্যারিয়েবল সত্যিকারের Array হয়ে থাকে তাহলে আমরা রেজাল্ট True দেখতে পাব আর যদি ভ্যারিয়েবল সত্যিকারের Array না হয়ে থাকে তাহলে False দেখতে পাবেন।
console.log(teams instanceof Array); // true
console.log(profile instanceof Array); // false

// আর কোন একটা ফাংশনের ডাটা টাইপ আমরা typeof অপারেটরের মাধ্যমে চেক করলে Funcction দেখতে পাব। তাহলে তো সব ভেজাল শেষ।
const sayHi = () => 'Hi! Guys';
console.log(typeof sayHi);
console.log(sayHi.constructor)


const date = new Date();
console.log(typeof date)
console.log(date.constructor)


// আরোও একটা ভেজাল আছে সেটা হলো, 
console.log(typeof nickName)




// https://www.freecodecamp.org/news/javascript-data-types-typeof-explained/





if([]) {
    // code
} else {
    // code
}



