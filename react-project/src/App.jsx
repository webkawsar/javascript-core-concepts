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
