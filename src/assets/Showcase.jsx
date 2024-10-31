import React from "react";
import { Link } from "react-router-dom";

import AppleStore from "../images/applestore.svg";
import AppleStoreDark from "../images/appstoredark.svg";
import GoogleStore from "../images/googlestore.svg";
import GoogleStoreDark from "../images/googlestoredark.svg";
import Iphone from "../images/iphones.svg";

const Showcase = () => {
  return (
    <section aria-label="showcase" className="showcase">
      <div className="container">
        <h1 className="d4">Manage All Your Money in One App</h1>
        <div className="content space-y-3">
          <p className="text-lg">
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>

          <div className="market-btns">
            <div className="store-btn">
              <span className="sr-only">Download on the App store</span>
              <Link to="https://www.apple.com/se/store" target="_blank">
                <img className="showlight" src={AppleStore} />
                <img className="showdark" src={AppleStoreDark} />
              </Link>
            </div>

            <div className="store-btn">
              <span className="sr-only">Get in on Google play</span>
              <Link to="https://store.google.com/" target="_blank">
                <img className="showlight" src={GoogleStore} />
                <img className="showdark" src={GoogleStoreDark} />
              </Link>
            </div>
          </div>

          <div className="more">
            <Link to="features" className="btn-round btn-white">
              <i className="fa-solid fa-chevron-down"></i>
            </Link>
            <span>Discover more</span>
          </div>
          <div className="phone-img-container">
            <img src={Iphone} alt="iPhone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
