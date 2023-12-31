👋 Hello `JavaScript Enthusiasts!` আজকে আমরা জাভাস্ক্রিপ্ট এর `split()` মেথড কিভাবে কাজ করে এটা একটু জানার চেষ্টা করব

✅ জাভাস্ক্রিপ্টের `split()` মেথড যেকোনো স্ট্রিং এর উপর এপ্লাই করতে হয় । এই মেথড যেকোনো স্ট্রিং কে বিভক্ত করে `substrings` গুলো নিয়ে নতুন একটি `Array` তৈরী করে রিটার্ন করে। অরিজিনাল স্ট্রিং কে কোনো ধরনের পরিবর্তন করে না । কেননা, আমরা সবাই এটা জানি যে JavaScript এর সকল Primitive Data হচ্ছে `immutable` । সো অরিজিনাল স্ট্রিং কে পরিবর্তন করার কোন প্রশ্নই আসে না।   

এটা জাভাস্ক্রিপ্টের `ECMAScript1 (ES1)` এর ফিচার । একে স্ট্রিং হেলপার মেথড ও বলা হয় ।

```
let text = "How are you doing today?";
let newArray = text.split();
console.log(newArray); // ["How are you doing today?"]
```

এখানে স্ট্রিং কে নিয়ে নতুন একটা `Array` তৈরী হল। যেখানে `Array` এর ইলিমেন্ট হিসেবে আছে পুরো স্ট্রিং

```
Syntax: string.split(separator, limit)
Parameters: এই মেথড ২টা প্যারামিটার এক্সেপ্ট করে, তবে প্যারামিটার ২টা অপশনাল।
```

👉 separator => Separator হিসেবে স্ট্রিং অথবা `Regular Expression` দিতে পারেন। একটা স্ট্রিং কে আপনি কি দিয়ে Separate করতে চাচ্ছেন সেটার উপর নির্ভর করে Separator দিবেন

```
text = "How are you doing today?";
newArray = text.split(' ');
console.log(newArray); // ['How', 'are', 'you', 'doing', 'today?']
```

ধরেন, আমি এই স্ট্রিং কে **"স্পেস"** দিয়ে বিভক্ত করতে চাচ্ছি তাহলে `Separator` হিসেবে `Empty String` দিলে সে পুরো স্ট্রিং এর মাঝে যত জায়গায় **"স্পেস"** পাবে ততটা ভাগে বিভক্ত করে ফেলবে । আর যদি `Separator` হিসেবে যা দিব তা যদি না পায় এই স্ট্রিং এর মাঝে তাহলে পুরো স্ট্রিং কে নিয়ে `Array` এর একটা ইলিমেন্ট হিসেবে দিয়ে দিবে।

```
text = "How are you doing today?";
newArray = text.split(',');
console.log(newArray); // ['How are you doing today?']
```

এখানে আমি `separator` হিসেবে স্ট্রিং এর মাঝে **"কমা"** দিয়ে দিয়েছি। এখানে সে পুরো স্ট্রিং এর মাঝে **"কমা"** খুজবে। **"কমা"** খুজে পেলে বিভক্ত করবে আর না পেলে পুরো স্ট্রিং কে নিয়ে `Array` এর একটা ইলিমেন্ট হিসেবে দিয়ে দিবে।

👉 limit => আর লিমিট বলতে এখানে `Array` তে কয়টা ইলিমেন্ট থাকবে সেটা বুঝায়।

```
text = "How are you doing today?";
newArray = text.split(' ', 3);
console.log(newArray); // ['How', 'are', 'you']
```

এখানে আমি লিমিট হিসেবে ৩ দিয়েছি। তাহলে এই স্ট্রিং কে **"স্পেস"** দিয়ে বিভক্ত করে যেকয়টা `substring` করবে, শুধু প্রথম ৩টা `substring` নিয়ে নতুন একটা `Array` রিটার্ন করবে। আর লিমিট 0 করে দিলে `Empty Array` রিটার্ন করবে।

🤝 তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন অথবা মতামত থেকে থাকে তাহলে 👇 কমেন্টে জানাতে পারেন।
**`JavaScript`** রিলেটেড আর্টিকেলে আপনি ইন্টারেস্টেড থাকলে Coders থেকে আমার অন্যান্য আর্টিকেলগুলোও পড়ে দেখতে পারেন😎😎











/********************************************** Reference Text ***************************************/

const emptyString = "";
console.log(emptyString.split(' '))
console.log(emptyString.split(' ').length)


''.split(''); // returns []

// Returns an empty array
''.split(''); // returns []

// Returns an array with an empty string
''.split() // returns [""]
