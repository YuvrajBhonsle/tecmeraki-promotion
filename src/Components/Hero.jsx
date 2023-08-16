import React from "react";
import "./Hero.css";
import hero_img from "../assets/hero_img.webp";
function Hero() {
  return (
    <div className="hero-container">
      <div className="hero" id="home">
        <div className="info">
          <h1 className="headline">
            Industrial Service Solutions and Automation Provider
          </h1>
          <h3 className="subHeadine">
            Tecmeraki provides comprehensive solutions for industrial services
            including automation, IOT, networking, electrical and
            instrumentation field work, trusted by leading brands such as SB
            Chemical, SB Protech, Aarti Papermill, and Coca Cola.
          </h3>
        </div>
        <div className="hero-img">
          <img src={hero_img} alt="hero img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
