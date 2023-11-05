what is the properties and method in JavaScript?

প্রথমে আমাদের জানতে হবে `properties` এবং `method` কি

জাভাস্ক্রিপ্টে অবজেক্ট এর মাঝে কোন ডাটা রাখতে হলে `name : value` pairs করে রাখতে হয়। `name : value` pairs কে এভাবে কোলন দিয়ে সেপারেট করে লেখতে হয়। এটাকে আবার `key : value` pairs ও বলা হয়। যেমনঃ

```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

অবজেক্ট হচ্ছে `named` ভ্যালুর একটা collection আর এরে হচ্ছে ইনডেক্স ভ্যালুর collection

এই `name : value` pairs বা `key : value` pairs কে জাভাস্ক্রিপ্টে `properties` বলে অভিহিত করা হয়। এই `properties` এ আপনি যা খুশি রাখতে পারবেন যেভাবে মন চায় সেভাবে ডাটা সাজিয়ে রাখতে পারবেন।

তাহলে মেথড কি জিনিস?😨

আমরা ফাংশন লেখতে পারি না? একটা ফাংশন কে Object এর ভিতরে লেখা হলে সেটাকে মেথড বলে। সেইম জিনিস জাস্ট প্লেস এর উপরে ডিপেন্ড করে নাম চেঞ্জ হয়ে যায় আর কিছু না। এই মেথডও কিন্তু Object এর `properties`

তাহলে আমরা এটা বুঝতে পেরেছি `properties` এবং মেথড কি জিনিস। তাহলে global properties এবং global মেথড সম্পর্কে কিছুটা আন্দাজ পাওয়া যাচ্ছে।

এখন জানব global properties এবং global মেথড সম্পর্কে।

global properties হলো এমন properties যেগুলো গ্লোবাল অবজেক্ট এর মাঝে আছে। জাভাস্ক্রিপ্টে(ব্রাউজার) গ্লোবাল অবজেক্ট হচ্ছে `window` । তার মানে `window` অবজেক্ট এর মাঝে `name : value` pairs আকারে যা আছে তাই এক্সেস করা যায় যেকোন জায়গায়। আর global মেথড বা ফাংশন হচ্ছে যে সমস্ত মেথড `window` অবজেক্ট এর মাঝে আছে এগুলো

## Global Properties:

`NaN`: এটা গ্লোবাল প্রোপার্টি `NaN = Not a Number` কে represent করে

```
console.log(window.NaN); // NaN
```

`window` অবজেক্ট এর মাঝে এই `NaN` আছে বিধায় আমরা এটাকে এভাবে এক্সেস করতে পারি

আর কোন কিছু `window` অবজেক্ট এর মাঝে যদি থাকে তাহলে সেটাকে `window` ধরে এক্সেস না করলেও চলবে
তাই এই `NaN` কে আমরা সহজে এভাবেও এক্সেস করতে পারি

```
console.log(NaN); // NaN
```

`null`: এটা `window` অবজেক্ট এর প্রোপার্টি যেটা `empty` অথবা `non-existent` ভ্যালুকে represent করে

`undefined`: প্রায়ই যেকোন একটা `variable` অথবা `property` এর ভ্যালু ডিফাইন করা আছে কি না চেক করে। যদি ভ্যালু না থাকে জাভাস্ক্রিপ্ট একটু স্মার্ট তাই নিজে এটার ভ্যালু `undefined` সেটা করে দেয়।

তাহলে `null` এবং `undefined` বিষয়টা কেমন জানি গোলমেলে হয়ে গেলো না?
সহজ একটা সমাধান হচ্ছে আমি যদি কোন ভ্যারিয়েবল এর ভ্যালু সেটা না করে ভ্যারিয়েবল ডিফাইন করার প্রয়োজন পড়ে তাহলে আমরা সবসময় এটার ভ্যালু `null` সেটা করে দিব তাহলে যেকোন সময় বুঝতে পারব আর যদি জাভাস্ক্রিপ্ট সেটা করে দেয় তাহলে তো সে `undefined` সেটা করে দিবে আমাদের আর বুঝতে প্রবলেম হবে না

## Global Methods:

parseInt(): Converts a string to an integer.
parseFloat(): Converts a string to a floating-point number.
isNaN(): Checks if a value is NaN.
isFinite(): Checks if a value is a finite number.
decodeURI(): Decodes a URI.
decodeURIComponent(): Decodes a URI component.
encodeURI(): Encodes a URI.
encodeURIComponent(): Encodes a URI component.
eval(): Evaluates a string as JavaScript code.
alert(): Displays a dialog box with a message and an OK button.
prompt(): Displays a dialog box that prompts the user for input.
confirm(): Displays a dialog box with a message and OK/Cancel buttons.
