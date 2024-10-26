import React from "react";

import SiliconLogo from "../images/silicon_logo.svg";
import SiliconLogoDark from "../images/logodark.svg";
import Hamburger from "../images/hamburger.png";
import UserIcon from "../images/user-icon.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="container">
        <a href="/">
          <img className="showlight" src={SiliconLogo} alt="Silicon Logotype" />
          <img
            className="showdark"
            src={SiliconLogoDark}
            alt="Silicon Logotype"
          />
        </a>

        <div className="darkmode-toggle">
          <p className="hide">Dark Mode</p>
          <label className="toggle">
            <input type="checkbox" id="darkmode-switch" />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <img src={Hamburger} alt="" />
        </button>

        <ul id="main-menu" className="main-menu hide">
          <li>
            <NavLink className="nav-link hide" to='/features'>Features</NavLink>
          </li>  
          <li>
            <NavLink className='nav-link hide' to='/contact'>Contact</NavLink>
          </li>
          
          <li>
            <a href="#" className="btn btn-primary">
              <img src={UserIcon} className="user-icon" />
              <span>Sign in / Up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
