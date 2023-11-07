👋 Hello `JavaScript Enthusiasts!` আজকে আমরা `mutable` vs `immutable` নিয়ে একটু জানার চেষ্টা করব

`mutable` মানে পরিবর্তনযোগ্য আর `immutable` মানে অপরিবর্তনযোগ্য

👉 জাভাস্ক্রিপ্টে `Primitive Data` টাইপ এর ভ্যালু `immutable` মানে অপরিবর্তনযোগ্য । এই ডাটা টাইপের কোন ভ্যালু একবার ক্রিয়েট হয়ে গেলে পরিবর্তীতে এই ভ্যালু নিয়ে দুনিয়ার যত কাজ ই করেন না কেন এই ভ্যালুকে কিন্তু পরিবর্তন করা যায় না যেমনঃ

```
let profession = "JavaScript Developer";
profession[0] = "E";
console.log(profession) // "JavaScript Developer"
```

আমরা তো যেকোন স্ট্রিং এর ভ্যালু এভাবে `[index]` ইনডেক্স নাম্বার ধরে এক্সেস করতেই পারি তাই না? আমি যদি এক্সেস করতে পারি তাহলে এভাবে ধরে এই 0 নাম্বার ইনডেক্স এর ভ্যালু পরিবর্তন হয়ে যাওয়ার কথা, কিন্তু হবে না। কেন হবে না?

কারন জাভাস্ক্রিপ্টে Primitive Data টাইপ এর ভ্যালু একবার ক্রিয়েট হয়ে গেলে এটাকে পরিবর্তন করার কোন সুযোগ নেই। আপনি চাইলে রিপ্লেস করতে পারবেন, কিন্ত ডিরেক্টলি ধরে পরিবর্তন করতে পারবেন না।

> Primitive data types are immutable, meaning their values cannot be changed once they are created.
> They are directly stored in memory, and when you work with them, you operate on the actual value itself, not a reference to an object.

👉 আর `Reference/Complex` ডাটা টাইপের ক্ষেত্রে সরাসরি কোন ডাটাকে স্টোর না করে বরং মেমরীতে একটি জায়গা নির্ধারন করে **ঐ জায়গার রেফারেন্স স্টোর করে** ভ্যারিয়েবল এর মাঝে। ফলে এই ধরনের ডাটাকে পরিবর্তন করা যায় যেমনঃ

```
let profile = {
    name: "Kawsar Ahmed"
}
profile.profession = "JavaScript Developer";
console.log(profile) // { name: "Kawsar Ahmed", profession: "JavaScript Developer" }

```

আরেকটা এক্সাম্পল দেখে নেই---

```
let friends = ['Kawsar', 'Imran', 'Mizan'];
friends.push('Ajel');
console.log(friends) // ['Kawsar', 'Imran', 'Mizan', 'Ajel']
```

> Mutability refers to data types that can be accessed and changed after they've been created and stored in memory. Immutability, on the other hand, refers to data types that you can't change after creating them – but that you can still access in the memory.

🤝 তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন অথবা মতামত থেকে থাকে তাহলে 👇 কমেন্টে জানাতে পারেন।

### Reference

1. [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
2. [FreecodeCamp](https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/#:~:text=Mutability%20refers%20to%20data%20types,still%20access%20in%20the%20memory.)
