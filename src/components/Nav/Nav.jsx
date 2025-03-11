import { Link } from "react-router-dom"; 
import "./nav.css";
import { Search } from "../Search/Search";
// import BrushContainer from "../BrushContainer/BrushContainer"
import House from "../../public/icons/house-24.svg";
import Envelope from "../../public/icons/envelope-closed-24.svg";
import logo from "../../public/logo.png";
import Phone from "../../public/icons/phone-42-32.svg"

export const Nav = () => {
  return (
    <div id="navContainer" className="nav-container">
      <div id="logoContainer" className="logo-container">
        <img id="logoImage" className="logo-image" alt="logo" src={logo} />
      </div>
      <Search />
      <div className="icons-container">
      <a href="tel:+381234567890">
          <img
            src={Phone}
            alt="Phone Icon"
            width="32"
            height="32"
            className="icon bar-icon"
          />
        </a>
        <Link to="/about">
          <img
            src={House}
            alt="House Icon"
            width="32"
            height="32"
            className="icon bar-icon"
          />
        </Link>
        <a href="mailto:2455521@gmail.com">
          <img
            src={Envelope}
            alt="Envelope Icon"
            width="32"
            height="32"
            className="icon bar-icon"
          />
        </a>
       
        </div>
    </div>
  );
};

