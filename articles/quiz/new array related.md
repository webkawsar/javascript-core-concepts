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
