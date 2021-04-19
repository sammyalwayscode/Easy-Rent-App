import React, { useState, useEffect, useContext } from "react";
import "./AllFlatPost.css";
import { CommentOutlined } from "@ant-design/icons";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import AgentImg from "../Images/buhari.jpg";
import AgentHouse from "../Images/houseTest.jpg";
import { Button } from "antd";
import { app } from "../FireBase/Base";
import { Link } from "react-router-dom";
import UploadImage from "../UploadImage/UploadImage";
import { GlobalContext } from "../AuthState/GlobalContext";
import NavBar from "../NavBar/index";
import SideBar from "../SideBar/SideBar";

const FlatRent = app.firestore().collection("AllFlats");
function AllFlatPost() {
  const { current } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [flats, setFlats] = useState([]);

  const getFlats = async (id) => {
    await FlatRent.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setFlats(i);
    });
  };

  useEffect(() => {
    getFlats();
  }, []);

  return (
    <>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <div className="FlatStyle">
        <div className="GradientDiv1">
          <h2>All Flats</h2>
        </div>
        <div className="SubFlatstyle">
          <div className="CarddivContr2">
            <>
              {flats.map(({ coverImage1, id, createdBy }) => (
                <div className="HomeCardMain2" key={id}>
                  <div className="SubHomeCard2">
                    <UploadImage createdBy={createdBy} />
                    <Link to={`/detail/${id}`}>
                      <img
                        src={coverImage1}
                        alt=""
                        className="HomeAgentHouse2"
                      />
                    </Link>
                    <div className="HomeCardCommentLocationCost2">
                      <div className="HomeCardComment2">
                        <CommentOutlined
                          style={{ fontSize: "25px", color: "#0373ab" }}
                        />
                        <div style={{ fontWeight: "600" }}> 20 </div>
                      </div>
                      <div className="HomeCardLocation2">
                        <LocationOnOutlinedIcon
                          style={{ fontSize: "30px", color: "#0373ab" }}
                        />
                        <div style={{ fontWeight: "600" }}> Festac Town </div>
                      </div>
                      <div className="HomeCardCost2">
                        <MonetizationOnOutlinedIcon
                          style={{ fontSize: "30px", color: "#0373ab" }}
                        />
                        <div style={{ fontWeight: "600" }}> $200, 000 </div>
                      </div>
                    </div>
                    <div className="HomeCardButtondiv2">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AllFlatPost;
