import React from "react";

import Notification from '../images/notification.svg'

const Newsletter = () => {
  return (
    <section aria-label="Subscribe to our newsletter">
      <div className="newsletter">
        <div className="container">
          <div className="newsletter-row">
            <div className="sub-text">
              <img src={Notification} alt="" />
              <div>
                <p className="h4">Subscribe to our newsletter</p>
                <p className="h4 newsletter-small">
                  to stay informed about latest updates
                </p>
              </div>
            </div>

            <div className="input-group">
              <input
                type="email"
                className="form-input email"
                placeholder="Your Email"
              />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
