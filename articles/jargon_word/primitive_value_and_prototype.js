আপনাকে যদি বলা হয় জাভাস্ক্রিপ্টে Primitive Value কি?

👉 আপনি হয়তো বলে দিতে পারেন, Primitive Value হচ্ছে এমন একটা ভ্যালু যেটার কোন properties এবং methods নেই।

```
const name = 'Kawsar Ahmed';
console.log(name) // 'Kawsar Ahmed'

console.log(name.length) // 12
console.log(name.toUpperCase()) // 'KAWSAR AHMED'

```

আসলেই কি তাই? `properties` এবং `methods` যদি নাই থাকে তাহলে `length` প্রোপার্টি এবং `toUpperCase()` মেথড এক্সেস করলাম কিভাবে? প্রশ্ন জাগে না মনে?

হুমম, এটাই Prototype এর খেলা। বিগিনার অবস্থায় এই টপিক স্টাডি না করা ভালো, তবে জানার জন্য শুধুমাত্র এতটুকু না জানলেই নয়। Primitive Value এর কোন `properties` এবং `methods` নেই সত্যি কথা, তবে তার নেই তাতে কি হয়েছে, সে তার বাপ-মায়ের সম্পত্তি উত্তরাধিকার সূত্রে পেয়ে গেছে। তাই সে বাপ-মায়ের থেকে `length` প্রোপার্টি এবং `toUpperCase()` মেথড নিয়ে ইউজার কে তার প্রত্যাশিত আউটপুট দেখিয়ে দিছে।
