import React from "react";

import BxCheckCircle from "../images/bx-check-circle.svg";
import IconRightArrow from "../images/icon-right-arrow.svg";
import ImgSend from "../images/send.svg";
import IconCard from "../images/icon-card.svg";
import IconCashback from "../images/icon-cashback.svg";

const Money = () => {
  return (
    <>
      <section className="transfer" aria-label="Make your money transfer">
        <div className="container">
          <div className="transfer-flex">
            <div className="transfer-card">
              <h2 className="h2">Make your money transfer simple and clear</h2>
              <div className="space-y-1">
                <div className="icon-transfer ">
                  <img src={BxCheckCircle} alt="" />
                  <p>Banking transactions are free for you</p>
                </div>
              </div>
              <div>
                <div className="icon-transfer">
                  <img src={BxCheckCircle} alt="" />
                  <p>No monthly cash commission</p>
                </div>
              </div>
              <div>
                <div className="icon-transfer">
                  <img src={BxCheckCircle} alt="" />
                  <p>Manage payments and transactions online</p>
                </div>
              </div>
              <div className="space-y-1">
                <a href="#" className="btn btn-primary ">
                  <span>Learn more</span>
                  <img src={IconRightArrow} className="user-icon" />
                </a>
              </div>
            </div>
            <div>
              <img src={ImgSend} alt="" className="transfer-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="transfer" aria-label="Make your money transfer">
        <div className="container">
          <div className="transfer-grid">
            <div>
              <img src={ImgSend} alt="" className="transfer-img" />
            </div>
            <div></div>

            <div className="transfer-card-2">
              <h2 className="h2">
                Receive payment from international bank details
              </h2>

              <div className="icon-rec-grid">
                <div>
                  <img src={IconCard} alt="" />
                </div>
                <div>
                  <img src={IconCashback} alt="" />
                </div>
                <div>
                  <p>
                    Manage your payments online. Mollis congue egestas egestas
                    fermentum fames.
                  </p>
                </div>
                <div>
                  <p>
                    A elementur and imperdiet enim, pretium etiam facilisi
                    aenean quam mauris.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <a href="#" className="btn btn-primary sp">
                  <span>Learn more</span>
                  <img src={IconRightArrow} className="user-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Money;
