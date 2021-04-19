import React, { useState, useEffect } from "react";
import "./HomeCard.css";
import { CommentOutlined } from "@ant-design/icons";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AgentImg from "../Images/buhari.jpg";
import AgentHouse from "../Images/houseTest.jpg";
import { Button } from "antd";
import { app } from "../FireBase/Base";
import { Link } from "react-router-dom";
import UploadImage from "../UploadImage/UploadImage";

const FlatRent = app.firestore().collection("AllRent");
function HomeCard() {
  const [homes, setHomes] = useState([]);

  const getHomes = async (id) => {
    await FlatRent.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setHomes(i);
    });
  };

  useEffect(() => {
    getHomes();
  }, []);

  return (
    <>
      {homes.map(({ coverImage1, id, createdBy }) => (
        <div className="HomeCardMain" key={id}>
          <div className="SubHomeCard">
            <UploadImage createdBy={createdBy} />
            <Link to={`/detail/${id}`}>
              <img src={coverImage1} alt="" className="HomeAgentHouse" />
            </Link>
            <div className="HomeCardCommentLocationCost">
              <div className="HomeCardComment">
                <CommentOutlined
                  style={{ fontSize: "25px", color: "#0373ab" }}
                />
                <div style={{ fontWeight: "600" }}> 20 </div>
              </div>
              <div className="HomeCardLocation">
                <LocationOnOutlinedIcon
                  style={{ fontSize: "30px", color: "#0373ab" }}
                />
                <div style={{ fontWeight: "600" }}> Festac Town </div>
              </div>
              <div className="HomeCardCost">
                <MonetizationOnOutlinedIcon
                  style={{ fontSize: "30px", color: "#0373ab" }}
                />
                <div style={{ fontWeight: "600" }}> $200, 000 </div>
              </div>
            </div>
            <div className="HomeCardButtondiv">
              <Link to={`/detail/${id}`}>
                <Button
                  style={{
                    backgroundColor: "#0373ab",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  View Package
                </Button>
              </Link>
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
          </div>
        </div>
      ))}
    </>
  );
}

export default HomeCard;
