আজকে আমরা জাভাস্ক্রিপ্টে কিভাবে ডাটা টাইপ চেক করতে পারি এ বিষয়ে জানার চেষ্টা করব। জাভাস্ক্রিপ্টে কোন কিছুর ডাটা টাইপ জানতে হলে আমরা জাভাস্ক্রিপ্টের `typeof` অপারেটর ব্যবহার করতে পারি।
আমি নিচে বেশ কিছু ভ্যারিয়েবল ডিক্লেয়ার করেছি, এখন এই ভ্যারিয়েবলগুলোতে কি ধরনের ডাটা আছে জানার চেষ্টা করি।

```
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
```

এখানে `msg` নামে একটা ভ্যারিয়েবল আছে এটার ডাটা টাইপ কি জানতে হলে আমাদের ভ্যারিয়েবল এর নামের আগে `typeof` অপারেটর বসিয়ে কনসোল করলে আমরা ডাটা টাইপ দেখতে পাব।

```
    const msg = "Hi! Guys";
    console.log(typeof msg) // string
```

এভাবে প্রতিটা ভ্যারিয়েবল এর আগে `typeof` অপারেটর বসিয়ে বাকিগুলোর ডাটা টাইপ জেনে নিতে পারি।

```
    console.log(typeof msg) // string
    console.log(typeof number) // number
    console.log(typeof teams) // object
    console.log(typeof profile) // object
    console.log(typeof isMarried) // boolean
    console.log(typeof girlfriend) // undefined
    console.log(typeof nickName) // object
    console.log(typeof uniqueId) // symbol
    console.log(typeof largeNumber) // bigint
```

এখানে আপনারা কোন প্রবলেম দেখতে পাচ্ছেন?
এখনোও একটা প্রবলেম রয়ে গেল, সেটা আমরা জানব আরেকটা পোস্টে কিভাবে সল্ভ করতে হয়।
আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন থেকে থাকে অথবা মতামত জানাতে পারেন।
