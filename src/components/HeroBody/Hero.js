import React from "react";
import "./Hero.css";
import bgImg from "../Images/toone.png";
import bgImg1 from "../Images/toonn.png";
import bgImg2 from "../Images/toonnn.png";

function Hero() {
  return (
    <div className="MainHero">
      <div className="SubHero">
        <div className="InSerch"> In Search Of a Home??? </div>
        <div className="Help">We Help Ignit Your Dream Home</div>
        <div className="ImageDiv">
          <img src={bgImg} alt="" className="ImgMain" />
          <img src={bgImg2} alt="" className="ImgMain" />
          <img src={bgImg1} alt="" className="ImgMain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
