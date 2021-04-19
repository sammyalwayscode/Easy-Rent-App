import React from "react";
import "./Header.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import logo from "../Images/lllo.png";

function Header() {
  return (
    <div className="MainHeaderDiv">
      <div className="SubHeaderDiv">
        <Link to="/">
          <img src={logo} alt="" style={{ width: "50px" }} />
        </Link>
        <div className="NavHold">
          {/* <div className="HeadMeet">Meet Our Agents</div> */}
          <Link to="/signup">
            {" "}
            <Button style={{ fontWeight: "bold" }}>Become An Agent</Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
