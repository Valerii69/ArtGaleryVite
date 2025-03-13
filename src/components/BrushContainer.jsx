import React from "react";
import { useState } from "react";
import Typed from "typed.js";
import { Intro } from "../components/IntroBrush/Intro";
import Angel from "../public/icons/AngleDuble.svg";

import "../components/BrushContainer/brushContainer.css";
import "../components/IntroBrush/intro.css";
import "../components/Flower/flower.css";

export default function BrushContainer() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
    const [displayRestart, setDisplayRestart] = useState(false);


  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      // strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
      strings: [
        "А жінка буває на осінь так схожа То тиха й привітна, а то непогожа, То скропить сльозою, то сонцем засвітить, То прагне зими, то вертається в літо.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

   return (
     <div className="card">
       <button
         className="restart-anim-cont"
         onClick={() => {
           setAnimationPlayed(false);
           setDisplayRestart(!displayRestart);
         }}
       >
         <img
           src={Angel}
           alt="Angel Icon"
           width="24"
           height="24"
           className="icon bar-icon"
         />
         <i className="restart-anim-icon"></i>
       </button>
       <div className="content-container">
         <div className="flower-text-wrapper">
           <Intro
             animationPlayed={animationPlayed}
             setAnimationPlayed={setAnimationPlayed}
             displayRestart={displayRestart}
           />

           <div className="text-container">
             <span className="text-wrapper" ref={el} />
           </div>
         </div>
       </div>
     </div>
   );
}
