import React from "react";

import SiliconLogo from "../images/silicon_logo.svg";
import SiliconLogoDark from "../images/logodark.svg";
import Hamburger from "../images/hamburger.png";
import UserIcon from "../images/user-icon.png";
import { NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="container">
        <a href="/">
          <img className="showlight" src={SiliconLogo} alt="Silicon Logotype" />
          <img className="showdark"  src={SiliconLogoDark} alt="Silicon Logotype"/>
        </a>

        <DarkModeSwitch />

        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <img src={Hamburger} alt="" />
        </button>

        <ul id="main-menu" className="main-menu hide">
          <div className="pad2">
          <li>
            <NavLink className="nav-link pad2 hide" to='/features'>Features</NavLink>
            <NavLink className='nav-link pad2 hide' to='/contact'>Contact</NavLink>
          </li>
          </div>
          
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
