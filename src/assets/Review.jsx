import React, { useState, useEffect, useContext } from "react";
// import axios from 'axios'

import Quotes from "../images/quotes.svg";
import Stars4 from "../images/4stars.svg";
import Stars5 from "../images/5stars.svg";
import { ExternalData } from "./ExternalData";

const Review = () => {

  const { reviews } = useContext(ExternalData)

  let images = [];
  images[1] = Stars4;
  images[2] = Stars4;
  images[3] = Stars4;
  images[4] = Stars4;
  images[5] = Stars5;

  return (
    <section aria-label="Clients are loving our app" className="reviews">
      <div className="container space-y-3">
        <div className="clients">
          <div className="">
            <p className="eb-40">Clients are Loving Our App</p>
          </div>

          <div className="client-cards">
            {reviews.map((reviews) => (
              <li key={reviews.id}>
                <div className="client-card">
                  <div className="client-card-2">
                    <img src={Quotes} alt="" className="client-img1" />
                    <img
                      src={images[reviews.starRating]}
                      alt=""
                      className="client-img2"
                    />
                    <p>{reviews.comment}</p>
                    <div className="client-items">
                      <img
                        src={reviews.avatarUrl}
                        alt=""
                        className="client-img3"
                      />
                      <div className="client-name">
                        <p className="text-lg">{reviews.author}</p>
                        <p>{reviews.jobRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
