import React from "react";
import { useState } from "react";
import Typed from "typed.js";
import { Intro } from "../components/IntroBrush/Intro";
import { Title } from "./BrushContainer/Title/Title";
import "../components/BrushContainer/brushContainer.css";
import "../components/IntroBrush/intro.css";
import "../components/Flower/flower.css";

export default function BrushContainer() {
 const [animationPlayed, setAnimationPlayed] = useState(false);


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

      <div className="content-container">
        <Intro
          animationPlayed={animationPlayed}
          setAnimationPlayed={setAnimationPlayed}
        />
  
        <div className="intro-cont">
          <span ref={el} />
        </div>
      </div>
    </div>
  );
}

// export default function BrushContainer() {
//   return (

//   );
// }
