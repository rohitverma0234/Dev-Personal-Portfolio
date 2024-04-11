import React from "react";
import "./SplashScreen.css";
import {greeting, splashScreen} from "../../Portfolio";
import DisplayLottie from "../../Components/displayLottie/DisplayLottie";

export default function SplashScreen() {
  return (
    <div>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
