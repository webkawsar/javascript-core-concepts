
আপনাকে যদি বলা হয় জাভাস্ক্রিপ্টে Primitive Data Type কি?  

👉 আপনাকে বলতে হবে, Primitive Data Type হচ্ছে এমন ডাটা যেটাতে Primitive Value থাকে 🙂  


এখন আবার প্রশ্ন জাগতে পারে, Primitive Value আবার কি? 
👉 Primitive Value হচ্ছে এমন একটা ভ্যালু যেটার কোন properties এবং methods নেই 
 
তারপর আরেক চামচ আগ বাড়িয়ে যদি বলে দিতে পারেন, জাভাস্ক্রিপ্ট ৭ ধরনের ডাটাকে Primitive Data Type হিসেবে কনসিডার করে। এগুলো হলোঃ


```
string
number
boolean
null
undefined
symbol
bigint
```



```
const name = 'Kawsar Ahmed';
console.log(name) // 'Kawsar Ahmed'

console.log(name.length) // 12
console.log(name.toUpperCase()) // 'KAWSAR AHMED'

```

আসলেই কি তাই?😱 `properties` এবং `methods` যদি নাই থাকে তাহলে `length` প্রোপার্টি এবং `toUpperCase()` মেথড এক্সেস করলাম কিভাবে? প্রশ্ন জাগে না মনে?

✌️ হুমম, এটাই Prototype এর খেলা। Primitive Value এর কোন `properties` এবং `methods` নেই এটা সত্যি কথা, তবে তার নেই তাতে কি হয়েছে, সে তার মা-বাবার সম্পত্তি উত্তরাধিকার সূত্রে পেয়ে গেছে। তাই সে মা-বাবার থেকে `length` প্রোপার্টি এবং `toUpperCase()` মেথড নিয়ে ইউজার কে তার প্রত্যাশিত আউটপুট দেখিয়ে দিয়েছে 😎
