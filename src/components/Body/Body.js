import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../HeroBody/Hero";
import HomeCard from "../HomeCard/HomeCard";
import "./Body.css";
import Test from "../Test/Test";
import OwnerCard from "../OwnerCard/OwnerCard";
import CardRoute from "../CardRoute/CardRoute";
import MaterialDash from "../DashBoard/MaterialDash";
import { GlobalContext } from "../AuthState/GlobalContext";
import NavBar from "../NavBar/index";
import SideBar from "../SideBar/SideBar";

function Body() {
  const { current } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="BodyMain">
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      {/* <Header /> */}
      <Hero />
      <div className="SubBodyMain">
        <div className="ChildBody">
          <HomeCard />
          {/* <div>{current && current.name}</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Body;
