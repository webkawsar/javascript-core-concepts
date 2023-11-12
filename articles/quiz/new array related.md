👋 Hello `JavaScript Enthusiasts!` আজ শুক্রবার ফ্রী টাইমে হয়ে যাক একটা চ্যালেঞ্জ

👉 আপনাকে এরকম কিছু ফেক ডাটা দিয়ে বলা হলো এগুলো লুপ করে বুটস্ট্র্যাপ এর একটা `card` কম্পোনেন্ট এর মাঝে ডাটাগুলো বসাতে হবে 👌

```
const fakeData = [
  {
    id: 1,
    title: "Post title 1",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    rating: 4,
    image:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
  {
    id: 2,
    title: "Post title 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta esse tempore amet pariatur voluptatem, consequatur",
    rating: 5,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    id: 3,
    title: "Post title 3",
    description:
      "Generating Random Text. A computer program can easily produce gibberish - especially if it has been provided",
    rating: 6,
    image:
      "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
  },
];
```

📌 তবে একটা শর্ত আছে, ফেক ডাটার মাঝে `rating` নামে একটা `key` আছে যেটির ভ্যালু আছে একটা নাম্বার হিসেবে।
এই নাম্বার যত থাকবে সেই কয়টা স্টার হবে `card` কম্পোনেন্ট এর মাঝে। এজন্য আপনি React এ `Declarative` এপ্রোচে এটাকে সল্ভ করতে হবে🙄

```
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(fakeData);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => {
          const { id, title, description, rating, image } = post;
          return (
            <div key={id} className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={image}
                      className="img-fluid rounded-start"
                      style={{ width: "100%", height: "100%" }}
                      alt="Camera Image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Rating: <span className="star"> &#9733;</span>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
```

🎗️ এপনি এটা কিভাবে সল্ভ করতে পারেন উত্তর 👇 কমেন্টে জানাতে পারেন। আমি কমেন্টের দেয়া স্কিনশর্ট এর মত আউটপুট এক্সপেক্টে করি

🎯 এটার সল্যুশন পেয়ে যাবেন আগামিকাল রাত **৯ টায়** 🤝

/****************************************************************************\*\*\*****************************************************************************Solutions******************************************************************************\*\*\*******************************************************************************/
আজকের নির্ধারিত সময়ে আমাদের গত কালকের কুইজের সল্যুশন নিয়ে হাজির হলাম। একটা প্রবলেম অনেকভাবে সল্ভ করা যায়। সল্যুশন লেখতে গিয়ে আমার মাথায় এই ওয়ে আসছে তাই এভাবে লেখেছি। আপনার কাছে অন্যভাবে সল্ভ করার টেকনিক থাকলে কমেন্টে জানাতে পারেন

👉 আমরা জাভাস্ক্রিপ্টে বিল্ট ইন কনস্ট্রাক্টর **`Array();`** দিয়ে ইনিশিয়েট করে এভাবে একটা Array তৈরী করতে পারি

```
let newArr = Array();
console.log(newArr) // []
console.log(newArr.length) // 0
```

👉 যদি এভাবে একটা `Array` ইনিশিয়েট করি তাহলে এর আর্গুমেন্ট হিসেবে একাধিক ভ্যালু দিয়ে দিতে পারি। তাহলে প্রতিটা ভ্যালু `Array` এর ইলিমেন্ট হিসেবে বসে যাবে।

```
newArr = Array(1, 3, 5);
console.log(newArr) // [1, 3, 5]
```

👉 এভাবে শুধুমাত্র একটা আর্গুমেন্ট দিলে সে এতটা **`Empty Slot`** এর ইলিমেন্ট তৈরী করে ফেলে। **`Empty Slot`** আর `undefined` ভ্যালু এক জিনিস না

```
newArr = Array(3);
console.log(newArr) // [<empty element>, <empty element>, <empty element>]
```

👌 তাহলে আমরা এই কনসেপ্টকে কাজে লাগিয়ে আমাদের কুইজের প্রবলেম সল্ভ করতে পারি। কিভাবে?

যদি `Array` এর মাঝে `rating` দিয়ে দিলে সে এতটা **`Empty Slot`** ইলিমেন্ট হিসেবে ক্রিয়েট করে তাহলে এই `Array` কে লুপ করে স্টার ক্লাস বসিয়ে দিতে পারি। হয়েই গেলো তাই না? না হয় নি, কারন অধিকাংশ লুপ **`Empty Slot`** এর ইলিমেন্টকে ইটারেশনের সময় স্কিপ করে যায়।

তাই আমরা **`Empty Slot`** থেকে প্রতিটা ইলিমেন্টকে `undefined` করা লাগবে। `undefined` ইলিমেন্টকে যেকোন লুপ ইটারেট করতে পারে। একটু প্রাক্টিকালি দেখি চলেন

```
newArr = Array(4);
newArr = [...newArr];
console.log(newArr) // [undefined, undefined, undefined, undefined]
console.log(newArr.length); // 4
```

তাহলে এই টেকনিক এপ্লাই করি প্রজেক্টে চলেন

```
import React, { useState } from "react";
import "./App.css";

const fakeData = [
  {
    id: 1,
    title: "Post title 1",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    rating: 4,
    image:
      "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  },
  {
    id: 2,
    title: "Post title 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta esse tempore amet pariatur voluptatem, consequatur",
    rating: 5,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
  },
  {
    id: 3,
    title: "Post title 3",
    description:
      "Generating Random Text. A computer program can easily produce gibberish - especially if it has been provided",
    rating: 6,
    image:
      "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
  },
];

const App = () => {
  const [posts, setPosts] = useState(fakeData);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => {
          const { id, title, description, rating, image } = post;
          return (
            <div key={id} className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={image}
                      className="img-fluid rounded-start"
                      style={{ width: "100%", height: "100%" }}
                      alt="Camera Image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Rating:{" "}
                          {[...Array(rating)].map((star, index) => (
                            <span key={index} className="star">
                              {" "}
                              &#9733;
                            </span>
                          ))}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

```

যদি আরোও বিস্তারিত জানতে চান তাহলে কমেন্টের দেয়া পোস্ট পড়ে নিতে পারেন।  
🤝 তো আজকে এই পর্যন্ত, আপনাদের যদি কোন কনফিউশন/কুয়েশ্চন অথবা মতামত থেকে থাকে তাহলে 👇 কমেন্টে জানাতে পারেন।
