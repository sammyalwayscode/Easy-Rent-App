import React from "react";
import "./Rental.css";
import Pix from "./House.jpeg";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Rental() {
  return (
    <div className="View_Container">
      <div className="View_ContainerWrapper">
        <div className="Title_Container">Title of House</div>
        <div>
          <b>Posted:</b> 12 June 2021
        </div>
        <div className="ImageCover_Container">
          <img
            src={Pix}
            alt="Cover"
            style={{
              height: "100%",
              width: "100%",
              // borderRadius: "5px",
              // borderBottom: "2px solid black",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="Location_Container">
          <div>
            <LocationOnIcon /> Wilmer
          </div>
          <button
            style={{
              height: "30px",
              width: "70px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rental;
