import React from "react";

import addGroup from "../images/iconcareer.svg";
import envelope from "../images/iconletter.svg";
import iconR from '../images/icon-r.svg'

const ContactUs = () => {
  return (
    <section aria-label="Contact us" className="contact">
      <div >
        <h2>Contact Us</h2>
        <div className="contactUsGrid">
          <div className="contactUsCard">
            <div className="contactUsIcon">
              <img src={envelope} alt="" />
            </div>
            <div className="contactUsText">
              <h3>Email us</h3>
              <p>Please feel free to drop us a line. We will respond as soon as possible.</p>

              <div  className="messageUs">
              <a href='#'>Leave a message </a><img src={iconR} alt="" />
              </div>
            </div>
          </div>
          <div className="contactUsCard">
            <div className="contactUsIcon">
              <img src={addGroup} alt="" />
            </div>
            <div className="contactUsText">
              <h3>Careers</h3>
              <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>

              <div  className="messageUs">
              <a href='#'>Send an application</a><img src={iconR} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ContactUs;
