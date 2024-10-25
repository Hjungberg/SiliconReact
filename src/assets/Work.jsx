import React from "react";

import IphoneL from "../images/iphonel.svg";
import IphoneM from "../images/iphonem.svg";
import IphoneR from "../images/iphoner.svg";

export const Work = () => {
  return (
    <section className="carousel-section" aria-label="How does it work">
      <div className="container space-y-3">
        <h2 className="h1">How Does It Work</h2>
        <div className="carousel-small">
          <div>
            <div className="carousel">
              <div className="carousel-item">
                <img src={IphoneL} alt="" />
              </div>
              <div className="carousel-item">
                <img src={IphoneM} alt="" />
              </div>
              <div className="carousel-item">
                <img src={IphoneR} alt="" />
              </div>
            </div>
            <div className="text">
              <h3 className="h4">Latest Transaction History</h3>
              <p>
                Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
                Arcu sociis tristique quisque hac in consectetur condimentum.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
