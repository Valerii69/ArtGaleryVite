import { useState, } from "react";
import PropTypes from "prop-types";
import { Title } from "../BrushContainer/Title/Title";

import "./intro.css";

import { Flower } from "../Flower/Flower";
// import { Title } from "../Title/Title";

export function Intro (props) {
  const [displayRestart, setDisplayRestart] = useState(false);

  // console.log(props.animationPlayed);
  return (
    <>
    <div className="intro-cont">
    
        <button
          className="restart-anim-cont"
          onClick={() => {
            props.setAnimationPlayed(false);
            setDisplayRestart(!displayRestart);
          }}
        >
          <i className="restart-anim-icon"></i>
        </button>
      
 </div>
      <Flower
        setAnimationPlayed={props.setAnimationPlayed}
        animationPlayed={props.animationPlayed}
        displayRestart={displayRestart}
      />
      {/* <Title /> */}
     
    </>


  );
};

