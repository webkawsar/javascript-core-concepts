👋 Hello `JavaScript Enthusiasts!` কেমন আছেন সবাই? আশাকরি সবাই ভালো আছেন!

👉 একেবারে যারা বিগিনার আছেন তারা প্রায়ই প্রশ্ন করেন ভাই প্রবলেম সল্ভ করে কি কাজে লাগবে, এই জিনিস টাকে রিয়েল লাইফে কিভাবে কাজে লাগাতে পারি? অথবা এই জিনিস এর রিয়েল লাইফ একটা এক্সাম্পল দেন হ্যান-তেন প্রশ্ন কমন থাকেই। তাদের মাথায় এইসব প্রশ্ন আসতেই পারে এটাই স্বাভাবিক

✅ আজকে এই প্রবলেম সল্ভিং টেকনিক কাজে লাগিয়ে আমরা আমাদের রিয়েল লাইফ একটা প্রবলেম সল্ভ করতে পারি কিভাবে দেখব।
একটা প্রবলেম অনেকভাবে সল্ভ করা যায়। এভাবে যে সল্ভ করতে হবে এমন কোন কথা নেই আপনি অন্যভাবেও সল্ভ করতে পারেন।

🚀 প্রবলেমঃ আপনাকে ১-১০ এর মাঝে যেকয়টা বিজোড় সংখ্যা আছে সেগুলোকে প্রিন্ট করে দেখাতে হবে

```
const printOddNumber = (number) => {
  for (let index = 1; index <= number; index++) {
    if (index % 2 !== 0) {
      console.log(index); // [1, 3, 5, 7, 9]
    }
  }
};

printOddNumber(10);
```

👉 এখানে আমি চেক করেছি `index % 2` এর ভাগশেষ 0 কিনা, যদি 0 হয় তাহলে এটা জোড় সংখ্যা তাই এটাকে ফ্লিপ করে চেক করেছি এটা `(index % 2) !== 0` সমান না। যদি সমান হয় তাহলে এটা জোড় সংখ্যা আর সমান না মানে এটা বিজোড় সংখ্যা।

এখন এটা দিয়ে কি হবে ভাই, নাসা হ্যাক করা যাবে কিনা এসব বলে লাভ নাই 😄

👉 এই টেকনিক কাজে লাগিয়ে কিভাবে React প্রজেক্টে একটা প্রবলেম সল্ভ করতে পারি চলেন দেখি, এভাবে যে সল্ভ করতেই হবে এরকম ধরাবাধা কোন নিয়ম নেই

🎗️ আমাদের কাজ হচ্ছে এখানে কিছু ডাটা আছে এগুলোকে লুপ করে Table এর একেকটা Row তে বসাতে হবে। সিম্পল কাজ

```
const fakeData = [
  {
    id: 1,
    firstName: "Samim",
    lastName: "Mohammed",
    email: "samim@gmail.com",
  },
  {
    id: 2,
    firstName: "Kawsar",
    lastName: "Ahmed",
    email: "kawsar@gmail.com",
  },
  {
    id: 3,
    firstName: "Mustakim",
    lastName: "Al Mobin",
    email: "mustakim@gmail.com",
  },
  {
    id: 4,
    firstName: "Gias",
    lastName: "Uddin Vuiya",
    email: "gias@gmail.com",
  },
  {
    id: 5,
    firstName: "Ruhi",
    lastName: "Jannat",
    email: "ruhi@gmail.com",
  },
];
```

📌 তবে একটা শর্ত আছে, সেটা হলো যে সমস্ত মেম্বার এর আইডি শুধুমাত্র বিজোড় সংখ্যা তাদের Row তে `stripped` নামের একটা সিএসএস ক্লাস এড করতে হবে।

👉 এখন এই Table এর প্রথম Row তে `stripped` নামের সিএসএস ক্লাস এড করা লাগবে যেটা তে কিছু ডিজাইন করা আছে তবে ২য় Row তে লাগবে না। আবার ৩য় Row তে লাগবে কিন্তু এর ৪র্থ Row তে লাগবে না। মানে একটা Row পরপর সিএসএস `stripped` ক্লাস এড করা লাগবে। এভাবে চলতে থাকবে যতক্ষন না লুপ শেষ হয়ে যায়। এটা কিভাবে করবেন?

এর জন্য আমরা উপরে যে টেকনিক দেখেছি এটাকে কাজে লাগাতে পারি

```
import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [teams, setTeams] = useState(fakeData);

  return (
    <table className="table">
      <caption>List of members</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((member, index) => {
          const { id, firstName, lastName, email } = member;
          return (
            <tr key={id} className={(id % 2) !== 0 ? "stripped" : ""}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default App
```

👉 এখানে প্রতিটা মেম্বার এর আইডি ইউনিক তাই আমি আমি চেক করেছি `id % 2` এর ভাগশেষ 0 কিনা, যদি 0 হয় তাহলে এটা জোড় সংখ্যা তাই এটাকে ফ্লিপ করে চেক করেছি এটা `(id % 2) !== 0` এর সমান নয়। সমান নয় মানে এটা বিজোড় সংখ্যা। আর বিজোড় সংখ্যার Row তে আমি `stripped` সিএসএস ক্লাস টাকে শুধু ডায়নামিকভাবে চেক করে বসিয়ে দিলে কাজ শেষ।

✌️ কোন জায়গার জিনিস কোন জায়গায় গিয়ে কাজে লাগছে দেখছেন অবস্থা

🤝 তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন অথবা মতামত থেকে থাকে তাহলে 👇 কমেন্টে জানাতে পারেন।
**`JavaScript`** রিলেটেড আর্টিকেলে আপনি ইন্টারেস্টেড থাকলে Coders থেকে আমার অন্যান্য আর্টিকেলগুলোও পড়ে দেখতে পারেন😎😎

![image](../image/problem_solving_image.png)
