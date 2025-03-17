import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import Typed from "typed.js";
// import { Intro } from "../components/IntroBrush/Intro";
import Angel from "../public/icons/AngleDuble.svg";
// import Logo from "../public/logo2.png";

import "../components/BrushContainer/brushContainer.css";
import "../components/IntroBrush/intro.css";
import "../components/Flower/flower.css";

import "../../src/components/ArtGallery/art-gallery.css";

export default function About() {
 return (
    <div className="card">
      <Link to="/">
        <button className="return-anim-cont">
          <img
              src={Angel}
            alt="Angel Icon"
            width="24"
            height="24"
            className="return-icon"
          />
          <i className="return-anim-icon"></i>
        </button>
      </Link>
      {/* <button
        className="restart-anim-cont"
        onClick={() => {
          setAnimationPlayed(false);
          setDisplayRestart(!displayRestart);
        }}
      >
        <img
       
          src={Logo}
          alt="Angel Icon"
          width="24"
          height="24"
          className="bar-icon"
        />
        <i className="restart-anim-icon"></i>
      </button> */}
      <div className="content-container">
   щось треба придумати
      </div>
    </div>
  );
}
