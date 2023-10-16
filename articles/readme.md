// জাভাস্ক্রিপ্টের split() মেথড যেকোনো স্ট্রিং এর উপর এপ্লাই করতে হয় । split() মেথড যেকোনো String কে split করে substrings গুলো নিয়ে নতুন একটি Array তৈরী করে রিটার্ন করে। original String কে কোনো ধরনের change করে না । এটা জাভাস্ক্রিপ্টের ECMAScript1 (ES1) এর feature । একে স্ট্রিং হেলপার মেথড ও বলা হয় ।

let text = "How are you doing today?";
let newArray = text.split();
console.log(newArray); // ["How are you doing today?"]

// এখানে স্ট্রিং কে নিয়ে একটা নতুন Array তৈরী হল। যেখানে Array এর একটা element হিসেবে আছে স্ট্রিং ।

// Syntax ঃ string.split(separator, limit)
// Parameters ঃ এই মেথড ২টা প্যারামিটার এক্সেপ্ট করে, তবে প্যারামিটার ২টা অপশনাল।

// separator => separator হিসেবে String অথবা regular expression দিতে পারেন। একটা String কে আপনি কি দিয়ে separate করতে চাচ্ছেন সেটার উপর নির্ভর করে।

text = "How are you doing today?";
newArray = text.split(' ');
console.log(newArray); // ['How', 'are', 'you', 'doing', 'today?']
// ধরেন, আমি এই স্ট্রিং কে 'স্পেস' দিয়ে split করতে চাই তাহলে separator হিসেবে " " দিলে সে পুরো স্ট্রিং এর মাঝে যত জায়গায় 'স্পেস' পাবে ততটা split ফেলবে । আর যদি separator হিসেবে যা দিব, তা যদি না পায় এই স্ট্রিং এর মাঝে তাহলে ডিফল্ট ভাবে কাজ করবে ।

text = "How are you doing today?";
newArray = text.split(',');
console.log(newArray); // ['How are you doing today?']
// এখানে আমি separator হিসেবে স্ট্রিং এর মাঝে "কমা" দিয়ে দিলাম। এখন সে পুরো স্ট্রিং এর মাঝে "কমা" খুজবে। "কমা" খুজে পেলে split করবে আর না পেলে ডিফল্ট ভাবে কাজ করবে ।

// limit => আর লিমিট বলতে Array তে কয়টা element থাকবে সেটা বুঝায়।

text = "How are you doing today?";
newArray = text.split(' ', 3);
console.log(newArray); // ['How', 'are', 'you']
// এখানে আমি লিমিট হিসেবে ৩ দিয়েছি। তাহলে এই স্ট্রিংকে " " split করে যেকয়টা substring করবে, শুধু প্রথম ৩টা substring নিয়ে নতুন একটা Array রিটার্ন করবে। আর লিমিট ০ করে দিলে Empty Array রিটার্ন করবে।
