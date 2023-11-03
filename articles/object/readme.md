what is the properties and method in JavaScript?

প্রথমে আমাদের জানতে হবে `properties` এবং `method` কি

জাভাস্ক্রিপ্টে অবজেক্ট এর মাঝে কোন কিছু লেখতে হলে `name : value` pairs করে লেখতে হয়। `name : value` pairs কে এভাবে কোলন দিয়ে সেপারেট করে লেখতে হয়। এটাকে আবার `key : value` pairs ও বলা হয়। যেমনঃ

```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

অবজেক্ট হচ্ছে named ভ্যালুর একটা collection

এই `name : value` pairs বা `key : value` pairs কে জাভাস্ক্রিপ্টে `properties` বলে অভিহিত করা হয়

তাহলে আমরা এটা বুঝতে পেরেছি properties এবং মেথড কি জিনিস। এখন জানব global properties এবং global মেথড সম্পর্কে।

global properties হলো এমন properties যেগুলো গ্লোবাল অবজেক্ট এর মাঝে আছে। জাভাস্ক্রিপ্টে(ব্রাউজার) গ্লোবাল অবজেক্ট হচ্ছে `window` । তার মানে `window` অবজেক্ট এর মাঝে `name : value` pairs আকারে আছে তাই এক্সেস করা যায় যেকোন জায়গায়। আর global মেথড বা ফাংশন হচ্ছে যে সমস্ত মেথড `window` অবজেক্ট এর মাঝে আছে এগুলো

## Global Properties:

`NaN`: এটা গ্লোবাল প্রোপার্টি `NaN = Not a Number` কে represent করে

`null`: A global property representing an empty or non-existent value.

`undefined`: প্রায়ই যেকোন একটা `variable` অথবা `property` এর ভ্যালু ডিফাইন করা আছে কি না চেক করে
Represents an undefined value, often used to check if a variable or property is defined.

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
