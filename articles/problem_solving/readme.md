একেবারে যারা বিগিনার আছেন তারা প্রায়ই প্রশ্ন করেন ভাই প্রবলেম সল্ভ করে কি কাজে লাগবে, এই জিনিস টাকে রিয়েল লাইফে কিভাবে কাজে লাগাতে পারি? অথবা এই জিনিস এর রিয়েল লাইফ একটা এক্সাম্পল দেন হ্যান-তেন প্রশ্ন কমন থাকেই

তাদের মাথায় এইসব প্রশ্ন আসতেই পারে এটাই স্বাভাবিক

আজকে এই প্রবলেম সল্ভিং টেকনিক কাজে লাগিয়ে আমরা আমাদের রিয়েল লাইফ একটা প্রবলেম সল্ভ করতে পারি কিভাবে দেখব।
একটা প্রবলেম অনেকভাবে সল্ভ করা যায়। এভাবে যে সল্ভ করতে হবে এমন কোন কথা নেই আপনি অন্যভাবেও সল্ভ করতে পারেন।

প্রবলেমঃ আপনাকে ১-১০ এর মাঝে যেকয়টা বিজোড় সংখ্যা আছে সেগুলোকে প্রিন্ট করে দেখাতে হবে

```
const printOddNumber = () => {
  for (let i = 1; i <= 10; i++) {
    if ((i % 2) !== 0) {
      console.log(i); // [1, 3, 5, 7, 9]
    }
  }
};

printOddNumber();
```

এখানে আমি চেক করেছি `index % 2` এর ভাগশেষ 0 কিনা, যদি 0 হয় তাহলে এটা জোড় সংখ্যা তাই এটাকে ফ্লিপ করে চেক করেছি এটা (index % 2) !== 0 সমান কিনা। যদি সমান হয় তাহলে এটা জোড় সংখ্যা আর সমান না হয় তাহলে এটা বিজোড় সংখ্যা।

এখন এই টেকনিক কাজে লাগিয়ে কিভাবে React প্রজেক্টে একটা প্রবলেম সল্ভ করতে পারি চলেন দেখি

আমাদের কাজ হচ্ছে এখানে কিছু ডাটা আছে এগুলোকে লুপ করে Table এর একেকটা Row তে বসাতে হবে। সিম্পল কাজ

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

তবে একটা শর্ত আছে সেটা হলো যে সমস্ত মেম্বার এর আইডি জোড় সংখ্যা তাদের Row তে cyan নামের একটা ক্লাস এড করতে হবে আর যদের আইডি বিজোড় সংখ্যা তাদের Row তে
এখন এই Table এর প্রথম Row তে stripped নামের সিএসএস ক্লাস এড করা লাগবে যেটা তে কিছু ডিজাইন করা আছে তবে এর পরের Row তে লাগবে না। আবার এর পরের Row তে লাগবে কিন্তু এর পরের Row তে লাগবে না। মানে একটা Row পরপর stripped ক্লাস এড করা লাগবে। এভাবে চলতে থাকবে যতক্ষন না লুপ শেষ হয়ে যায়। এটা কিভাবে করবেন?

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
          console.log(id % 2, 'id % 2')
          return (
            <tr key={id} className={(id % 2) !== 0 ? "grey" : "cyan"}>
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

এখানে আমি চেক করেছি index % 2 এর ভাগশেষ ০ কিনা , যদি ০ হয় তাহলে এটা জোড় এর লুপ হচ্ছে তাই এটাকে ফ্লিপ করে চেক করেছি এটা (index % 2) !== 0 নয় কি। সমান নয় মানে এটা বিজোড় সংখ্যা। আর বিজোড় সংখ্যার ইটারেশনে আমি stripped ক্লাসনেম টাকে শুধু ডায়নামিকভাবে চেক করে আমার বসিয়ে দিলে কাজ শেষ।
