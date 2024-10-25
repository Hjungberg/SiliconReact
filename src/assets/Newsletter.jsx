import React from "react";

import Notification from '../images/notification.svg'

const Newsletter = () => {
  return (
    <section aria-label="Subscribe to our newsletter">
      <div class="newsletter">
        <div class="container">
          <div class="newsletter-row">
            <div class="sub-text">
              <img src={Notification} alt="" />
              <div>
                <p class="h4">Subscribe to our newsletter</p>
                <p class="h4 newsletter-small">
                  to stay informed about latest updates
                </p>
              </div>
            </div>

            <div class="input-group">
              <input
                type="email"
                class="form-input email"
                placeholder="Your Email"
              />
              <button class="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
