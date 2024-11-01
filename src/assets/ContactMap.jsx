import React from "react";
import { Link } from "react-router-dom";

import googleMap from "../images/map.svg";
import youtube from "../images/youtube-square.svg";
import twitter from "../images/x-square.svg";
import facebook from "../images/facebook-square.svg";
import insta from "../images/insta-square.svg";
import map from "../images/bx-map.svg";
import time from "../images/bx-time.svg";
import phone from "../images/bx-phone.svg";

const ContactMap = () => {
  return (
    <section className="mapSection container">
      <div className="googleMap">
        <Link
          target="_blank"
          to={
            "https://www.google.com/maps/place/2306+San+Bruno+Ave,+San+Francisco,+CA+94134,+USA/@37.7323218,-122.413851,15.5z/data=!4m6!3m5!1s0x808f7efeae244721:0xb69264495f5f8e6f!8m2!3d37.733729!4d-122.4066182!16s%2Fg%2F11c16cthzy?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
          }
        >
          <img src={googleMap} alt="" className="" />
        </Link>
      </div>
      <div>
        <div className="mapcard">
          <h2>Medical Center 1</h2>
          <p className="mapline">
            <img src={map} alt="" />
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <p className="mapline">
            <img src={phone} alt="" />
            (406) 555-0120
          </p>
          <p className="mapline">
            <img src={time} alt="" />
            Mon - Fri: 9:00 am - 22:00 am
          </p>
          <p className="mapline">
            <span className="gap"></span>Sat - Sun: 9:00 am - 20:00 am
          </p>
        </div>
        <div className="mapcard">
          <h2>Medical Center 1</h2>
          <p className="mapline">
            <img src={map} alt="" />
            2464 Royal Ln. Mesa,New Jersey 45463
          </p>
          <p className="mapline">
            <img src={phone} alt="" />
            (406) 544-0123
          </p>
          <p className="mapline">
            <img src={time} alt="" />
            Mon - Fri: 9:00 am - 22:00 am
          </p>
          <p className="mapline">
            <span className="gap"></span>Sat - Sun: 9:00 am - 20:00 am
          </p>
        </div>

        <div className="maplinks container">
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} />
          </a>
          <a href="https://www.x.com" target="_blank">
            <img src={twitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={insta} />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtube} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
