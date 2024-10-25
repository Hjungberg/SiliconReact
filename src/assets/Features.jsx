import React from "react";

import IphoneSingel from "../images/ipone-single.svg";
import IconCard from "../images/icon-card.svg";
import IconStat from "../images/icon-stat.svg";
import IconCashback from "../images/icon-cashback.svg";
import IconSec from "../images/icon-sec.svg";
import IconSup from "../images/icon-sup.svg";
import IconStandard from "../images/icon-standard.svg";

const Features = () => {
  return (
    <section aria-label="App features" className="features">
      <div className="container">
        <div className="iphone">
          <img src={IphoneSingel} alt="" />
        </div>
        <div className="text space-y-1">
          <h2 className="h1">App Features</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>

          <div className="features-grid">
            <div className="features-card">
              <div className="icon-container">
                <img src={IconCard} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>

            <div className="features-card">
              <div className="icon-container">
                <img src={IconStat} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Cost Statistics</h3>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </div>

            <div className="features-card">
              <div className="icon-container">
                <img src={IconCashback} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Regular Cashback</h3>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet eleifend.
                </p>
              </div>
            </div>

            <div className="features-card">
              <div className="icon-container">
                <img src={IconSec} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Data Security</h3>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.{" "}
                </p>
              </div>
            </div>

            <div className="features-card">
              <div className="icon-container">
                <img src={IconSup} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Support 24/7</h3>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in aenean
                  quam mauris.
                </p>
              </div>
            </div>

            <div className="features-card">
              <div className="icon-container">
                <img src={IconStandard} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Top Standards</h3>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
