// import React, { useState, useCallback } from "react";
import "./nav.css";
import { Search } from "../Search/Search";
import House from '../public/icons/house-24.svg';
import Envelope from "../public/icons/envelope-closed-24.svg";
import logo from "../public/logo.png";

export const Nav = () => {

  return (
    <div id="navContainer" className="nav-container">
      <div id="logoContainer" className="logo-container">
        <img id="logoImage" className="logo-image" alt="logo" src={logo} />
      </div>
      <Search  />
      <div id="iconsContainer" className="icons-container">
        <div id="homeIconContainer" className="icon-container">
          {/* <a href="https://shir0206.github.io/ShirWeb/">
            <i id="home" className="fa fa-home icon bar-icon" />
          </a> */}
        </div>
        <div id="contactIconContainer" className="icon-container">
           <div id="contactIconContainer" className="fa fa-search icon-container">
            <img src={House} alt="Search Icon" width="24" height="24" className="fa fa-home icon bar-icon" />
                  <img src={Envelope} alt="Search Icon" width="24" height="24" className="fa fa-home icon bar-icon" />
          </div>
          
        </div>
      </div>
    </div>
  );
};
