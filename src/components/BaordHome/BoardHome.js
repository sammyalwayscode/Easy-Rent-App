import React from "react";
import Footer from "../Footer/Footer";
import HomeCard from "../HomeCard/HomeCard";
import "./BoardHome.css";

function BoardHome() {
  return (
    <div className="BoardHomeMain">
      <div className="HeroImg">We Help Ignite Your Deram Home</div>
      <div className="BoardHomeSub">
        <HomeCard />
        <Footer />
      </div>
    </div>
  );
}

export default BoardHome;
