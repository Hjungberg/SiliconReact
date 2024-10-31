import React, { useState } from "react";

import Notification from "../images/notification.svg";

const Newsletter = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `The ${name} field is required.`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regEx = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    
    
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      let test = formData[field]
      if (test === "") {
        newErrors[field] = `The Email field is required.`;
      }
      
      if (!regEx.test(test)) {
        newErrors[field] = `Not a valid Email`;
      }
 
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      setSubmitted(true);
      setFormData({ email: "" });
      const data = await res.text;
    } else {
      const data = await res.text;
    }
  };

  if (submitted) {
    return (
      <div className="subThank h3">
        Thank you for subscribing!
        <button onClick={handleOk} className="btn btn-primary">
          Ok
        </button>
      </div>
    );
  }

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
            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <input
                  required
                  type="email"
                  name="email"
                  value={FormData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="form-input email"
                />
                <button type="submit" className="btn">
                  Subscribe
                </button>
              </div>
              <span className="newsletterErrors">{errors.email}</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
