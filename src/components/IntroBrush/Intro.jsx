import "./intro.css";

import { Flower } from "../Flower/Flower";


export function Intro (props) {
   // console.log(props.animationPlayed);
 return (
   <div className="intro-cont">
     <Flower
       setAnimationPlayed={props.setAnimationPlayed}
       animationPlayed={props.animationPlayed}
       displayRestart={props.displayRestart} // Передаємо стан далі
     />
   </div>
 );
};

