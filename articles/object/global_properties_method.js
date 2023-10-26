what is the properties and method in JavaScript?

প্রথমে আমাদের জানতে হবে `properties` এবং `method` কি

জাভাস্ক্রিপ্টে অবজেক্ট এর মাঝে কোন কিছু লেখতে হলে `name : value` pairs করে লেখতে হয়। `name : value` pairs এভাবে কে কোলন দিয়ে সেপারেট করে লেখতে হয়। এটাকে আবার `key : value` pairs ও বলা হয়।

```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

অবজেক্ট হচ্ছে named ভ্যালুর একটা collection

এই `name : value` pairs বা `key : value` pairs কে জাভাস্ক্রিপ্টে `properties` বলে অভিহিত করা হয়

তাহলে ু global properties হলো এমন properties যেগুলো গ্লোবাল অবজেক্ট এর মাঝে আছে। জাভাস্ক্রিপ্টে গ্লোবাল অবজেক্ট হচ্ছে `window` । তার মানে `window` অবজেক্ট এর মাঝে `name : value` pairs আকারে আছে তাই এক্সেস করা যায় যেকোন জায়গায়। আর global মেথড বা ফাংশন হচ্ছে যে সমস্ত মেথড `window` অবজেক্ট এর মাঝে আছে এগুলো
