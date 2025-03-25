import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
 import { AboutCard } from "../components/AboutCard/AboutCard";
import Angel from "../public/icons/AngleDuble.svg";
import alla from "../public/Images/алла3.png";

import "../components/BrushContainer/brushContainer.css";
import "../components/IntroBrush/intro.css";
import "../components/Flower/flower.css";

import "../../src/components/ArtGallery/art-gallery.css";

export default function About() {
  const [imgSize, setImgSize] = useState(150); // Початковий розмір

  useEffect(() => {
    function getImgSize() {
      if (window.innerWidth < 480) return 140;
      if (window.innerWidth < 1024) return 150;
      else return 240;
    }

    function handleResize() {
      setImgSize(getImgSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Немає залежностей, але resize працюватиме

  return (
    <div className="aboutContainer">
      <AboutCard></AboutCard>
      <div className="cardAbout">
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

        <div className="aboutContainer-text">
          <p >
        {"The artist's studio is the place where art is born. It is therefore one of the artist's most personal and private spaces. The studio helps the artist to create. An artist's studio can be anywhere - in the kitchen, on the beach, on the roof of a building... The choice is yours!"}
          </p>
        </div>

        <div className="content-container">
          <img
            id="brushImg"
            className="brush-about"
            src={alla}
            alt="alla"
            width={imgSize}
            height="auto"
          />

          {/* <AboutCard tab={tab} openReadMore={openReadMore}></AboutCard> */}
        </div>
      </div>
    </div>
  );
}
