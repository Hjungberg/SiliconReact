import React, { useEffect, useState } from "react";

import SiliconLogo from "../images/silicon_logo.svg";
import SiliconLogoDark from "../images/logodark.svg";
import Hamburger from "../images/hamburger.png";
import UserIcon from "../images/user-icon.png";
import { Link, NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  
  const [showMeny, setShowMeny] = useState(false);
  const url = window.location.pathname.split('/').pop();

  const toggleMenu = () => {
    const mainMenu = document.querySelector("#main-menu");
    const menuBtn = document.querySelector('.menu-btn')
    
    setShowMeny(!showMeny);
    if (showMeny) {
      mainMenu.classList.add("hide");
      menuBtn.setAttribute('aria-expanded', false)
      
    } else {
      mainMenu.classList.remove("hide");
      menuBtn.setAttribute('aria-expanded', true)
    }
    
  };
  
  useEffect(() => {
    const menuBtn = document.querySelector('.menu-btn')
    menuBtn.setAttribute('aria-expanded', false)


  }, [url]);

  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="container">
        <Link to="">
          <img className="showlight" src={SiliconLogo} alt="Silicon Logotype" />
          <img
            className="showdark"
            src={SiliconLogoDark}
            alt="Silicon Logotype"
          />
        </Link>

        <DarkModeSwitch />

        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded="false"
          aria-label="Toggle Navigation"
          onClick={toggleMenu}
        >
          <img src={Hamburger} alt="" />
        </button>

        <ul id="main-menu" className="main-menu ">
          <div className="pad2">
            <li>
              <NavLink className="nav-link pad2 " to="features">
                Features
              </NavLink>
              <NavLink className="nav-link pad2 " to="contact">
                Contact
              </NavLink>
            </li>
          </div>

          <li>
            <Link to="SignIn" className="btn btn-primary">
              <img src={UserIcon} className="user-icon" />
              <span>Sign in / Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
