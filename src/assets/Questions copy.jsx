import React from "react";

import IconPhone from "../images/icon-phone.svg";
import ContactBlue from "../images/contact-blue.svg";
import ContactGreen from '../images/contact-green.svg';
import IconChat from "../images/icon-chat.svg";

const Questions = () => {
  return (
    <section aria-label="Any questions" className="questions space-y-3">
      <div className="container">
        <div className="quest-sections">
          <div className="quest-info">
            <h2 className="h2">Any questions? Check out our FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="quest-contact">
              <div className="quest-contact-item quest-border">
                <img src={IconPhone} alt="" className="client-img2" />
                <p>Still have questions?</p>
                <button>
                  <img src={ContactBlue} alt="" />
                </button>
              </div>
              <div className="quest-contact-item"></div>
              <div className="quest-contact-item  quest-border">
                <img src={IconChat} alt="" className="client-img2" />
                <p>Don't like phonecalls?</p>
                <button>
                  <img src={ContactGreen} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="quest-info">
            <div className="questions-list">
              <h2 className="h2 quest-mobile">
                Any questions? Check out our FAQs
              </h2>
              <p className="quest-mobile">
                Still have unanswered questions and need to get in touch?
              </p>
              <div className="questions-list-items">
                <p>Is any of my personal information stored in the App?</p>
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>

              <div className="questions-list-items">
                <p>What formats can I download my transaction history in?</p>
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>
              <div className="questions-list-items">
                <p>Can I schedule future transfers?</p>
                <a href="#features" className="btn-round btn-blue">
                  <i className="fa-solid fa-chevron-up"></i>
                </a>
              </div>
              <p className="qustion-selected">
                Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
                adipiscing gravida et consequat lobortis arcu velit. Nibh
                pharetra fermentum duis accumsan lectus non. Massa cursus
                molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
                gravida adipiscing euismod montes, duis egestas. Vehicula eu
                etiam quam tristique tincidunt suspendisse ut consequat.
              </p>

              <div className="questions-list-items">
                <p>When can I use Banking App services?</p>
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>
              <div className="questions-list-items">
                <p>
                  Can I create my own password that is easy for me to remember?
                </p>
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>
              <div className="questions-list-items">
                <p>What happens if I forget or lose my password?</p>
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>
              <div className="space-y-3 quest-mobile-only">
                <a href="#" className="btn btn-primary sp">
                  <span>Contact us now</span>
                </a>
              </div>

              <div className="quest-contact quest-tablet">
                <div className="quest-contact-item quest-border">
                  <img src={IconPhone} alt="" className="client-img2" />
                  <p>Still have questions?</p>
                  <button>
                    <img src={ContactBlue} alt="" />
                  </button>
                </div>
                <div className="quest-contact-item"></div>
                <div className="quest-contact-item  quest-border">
                  <img src={IconChat} alt="" className="client-img2" />
                  <p>Don't like phonecalls?</p>
                  <button>
                    <img src={ContactGreen} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
