import React from "react";
import "./OwnerCard.css";
import { CommentOutlined } from "@ant-design/icons";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AgentImg from "../Images/buhari.jpg";
import AgentHouse from "../Images/houseTest.jpg";
import { Button } from "antd";
import DeleteIcon from "@material-ui/icons/Delete";
import BeenhereIcon from "@material-ui/icons/Beenhere";

function OwnerCard() {
  return (
    <div className="HomeCardMain1">
      <div className="SubHomeCard1">
        <div className="HomeCardAgentNameImg1">
          <img src={AgentImg} alt="" className="HomeAgentImg1" />
          <div className="HomeCardAgentNameTime1">
            <div className="HomeAgentName1">Moahammud Buhari </div>
            <div className="HomeAgentTime1"> 02:00pm </div>
          </div>
        </div>
        <img src={AgentHouse} alt="" className="HomeAgentHouse1" />
        <div className="HomeCardCommentLocationCost1">
          <div className="HomeCardComment1">
            <CommentOutlined style={{ fontSize: "25px", color: "#0373ab" }} />
            <div style={{ fontWeight: "600" }}> 20 </div>
          </div>
          <div className="HomeCardLocation1">
            <LocationOnOutlinedIcon
              style={{ fontSize: "30px", color: "#0373ab" }}
            />
            <div style={{ fontWeight: "600" }}> Festac Town </div>
          </div>
          <div className="HomeCardCost1">
            <MonetizationOnOutlinedIcon
              style={{ fontSize: "30px", color: "#0373ab" }}
            />
            <div style={{ fontWeight: "600" }}> $200, 000 </div>
          </div>
        </div>
        <div className="HomeCardButtondiv1">
          <Button
            style={{
              backgroundColor: "#0373ab",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            View Package
          </Button>
          <Button
            style={{
              backgroundColor: "green",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Avaliable. . .
          </Button>
        </div>
        <div className="EditDeletediv">
          <div className="DeleteDiv">
            <DeleteIcon style={{ color: "#fff", fontSize: "35px" }} />
          </div>
          <div className="EditDiv">
            <BeenhereIcon style={{ color: "#fff", fontSize: "30px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerCard;
