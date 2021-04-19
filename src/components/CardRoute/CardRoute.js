import React, { useState, useEffect, useContext } from "react";
import "./CardRoute.css";
import AgentImg from "../Images/buhari.jpg";
import SittingRoom from "../Images/sitR1.jpg";
import BedRoom from "../Images/bdR1.jpg";
import Kitchen from "../Images/kitc1.jfif";
import BathRoom from "../Images/batR1.png";
import { app } from "../FireBase/Base";
import { useParams } from "react-router-dom";
import UploadImage from "../UploadImage/UploadImage";
import { GlobalContext } from "../AuthState/GlobalContext";

const FlatRent = app.firestore().collection("AllRent");
const db = app.firestore().collection("AuthUser");
function CardRoute({ createdBy }) {
  const { current, currentData } = useContext(GlobalContext);
  const { id } = useParams();
  const [RouteHomes, setRouteHomes] = useState([]);
  const [details, setDetails] = useState();
  const [detailing, setDetailing] = useState();

  const seeDetail = async () => {
    const docRef = await FlatRent.doc(id);
    const docData = await docRef.get();
    setDetails(docData.data());
  };

  const newUser = async () => {
    const newdoc = await db.doc(id);
    const docking = await newdoc.get();
    setDetailing(docking.data());
  };

  const getRouteHomes = async (id) => {
    await FlatRent.onSnapshot((snap) => {
      const i = [];
      snap.forEach((doc) => {
        i.push({ ...doc.data(), id: doc.id });
      });
      setRouteHomes(i);
    });
  };

  useEffect(() => {
    getRouteHomes();
    seeDetail();
    newUser();
  }, []);

  return (
    <>
      <div className="RouteMainDiv">
        <div className="SubRouteDiv">
          <div className="FourImgRouteDiv">
            <img src={details && details.img1} alt="" className="RouthFrImg" />
            <img src={details && details.img2} alt="" className="RouthFrImg" />
            <img src={details && details.img3} alt="" className="RouthFrImg" />
            <img src={details && details.img4} alt="" className="RouthFrImg" />
          </div>
          <div className="LocationDiscriptinDiv">
            <div className="ImgNameRoutMAin">
              <img src={""} alt="" className="RouteAgentImg" />
              <div className="RouteAgentNameTime">
                <div className="RouteAgentName">
                  {detailing && detailing.name}
                </div>
                <div className="RouteAgentTime"> 02:00pm </div>
              </div>
            </div>
            {/* <UploadImage createdBy={createdBy} /> */}
            <hr />
            <div className="RoutePriceDiv">
              <div className="PriceTitle">Contact:</div>
              {/* <div className="PriceContent">{details && details.price}</div> */}
              <div className="PriceContent"> {details && details.contact} </div>
            </div>
            <hr />
            <div className="RoutePriceDiv">
              <div className="PriceTitle">Price:</div>
              <div className="PriceContent">{details && details.price}</div>
            </div>
            <hr />
            <div className="RouteLocationDiv">
              <div className="LocationTitle">Location</div>
              <div className="LocationContent">
                {details && details.fullAddress}
              </div>
            </div>
            <hr />
            <div className="RouteDiscrDiv">
              <div className="DiscriptionTitle">Discription</div>
              <div className="DiscriptionContent">
                {details && details.discription}
              </div>
            </div>
            <hr />
            <div className="RouteMapDiv">
              <div className="MapTitle">View In Map</div>
              <div className="MapContent">
                {/* {details && details.location} */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5788422371597!2d3.3389276143166837!3d6.448080725825538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bd7b71faa69%3A0x19c8e5ae332cc2b6!2s13%20Idewu%20St%2C%20Apapa%2C%20Lagos!5e0!3m2!1sen!2sng!4v1618435337080!5m2!1sen!2sng"
                  width="280"
                  height="300"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardRoute;
