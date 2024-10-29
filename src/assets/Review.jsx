import React, { useState, useEffect } from "react";
// import axios from 'axios'

import Quotes from "../images/quotes.svg";
import Stars4 from "../images/4stars.svg";
import Stars5 from "../images/5stars.svg";
import Fanny from "../images/fanny.svg";
import Albert from "../images/albert.svg";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );
    const data = await res.json();
    setReviews(data);
  };


  useEffect(() => {
    fetchData();
  }, []);

  let images = []
  images[4] = Stars4
  images[5] = Stars5


  function Post(reviews) {
    return (
      <div className="client-cards">
        Author = {reviews.author}
        {console.log(reviews)}
      </div>
    );
  }

  return (
    <section aria-label="Clients are loving our app" className="reviews">
      <div className="container space-y-3">
        <div className="clients">
          <div className="">
            <p className="eb-40">Clients are Loving Our App</p>
          </div>

          <div className="client-cards">
            {reviews.map((reviews) => (
              <>
                <div className="client-card">
                <img src={Quotes} alt="" className="client-img1" />
                <img src={images[reviews.starRating]} alt="" className="client-img2" />
                <p>{reviews.comment}</p>
                <div className="client-items">
                  <img src={reviews.avatarUrl} alt="" className="client-img3" />
                  <div className="client-name">
                    <p className="h5">{reviews.author}</p>
                    <p>{reviews.jobRole}</p>
                  </div>
                  </div>
                </div>
              </>
            ))}
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default Review;
