import React from "react";

import Logo1 from "../images/logo1.svg";
import Logo2 from "../images/logo2.svg";
import Logo3 from "../images/logo3.svg";
import Logo4 from "../images/logo4.svg";
import Logo5 from "../images/logo5.svg";
import Logo6 from "../images/logo6.svg";

const Customers = () => {
  return (
    <section aria-label="our customers" className="logos">
      <div className="container">
        <div className="logo-card">
          <img src={Logo1} alt="Logo one" />
        </div>
        <div className="logo-card">
          <img src={Logo2} alt="" />
        </div>
        <div className="logo-card">
          <img src={Logo3} alt="" />
        </div>
        <div className="logo-card">
          <img src={Logo4} alt="" />
        </div>
        <div className="logo-card">
          <img src={Logo5} alt="" />
        </div>
        <div className="logo-card">
          <img src={Logo6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
