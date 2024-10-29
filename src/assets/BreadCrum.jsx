import React from "react";

import homeIcon from "../images/bx-home.svg";

const BreadCrum = () => {
  return (
    <section className="breadcrum">
      <div className="container ">
        <div className="bread">
          <img src={homeIcon} alt="" />
          <a href="/">Homepage {">>  "} </a>
          <p>Contact</p>
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;
