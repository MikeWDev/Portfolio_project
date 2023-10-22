import React from "react";
import Tag from "./tag";
import Gosia from "../assets/img/gosia-flowers.jpeg";
import ButtonFull from "./buttonFull";
function RpCard(props) {
  return (
    <>
      <div className="rp-card rp-card--grid">
        <div className="rp-img">
          <img src={Gosia} alt="picture of the webstie" />
        </div>
        <div className="rp-title">
          <h3>COSTAM</h3>
        </div>

        <div className="rp-tags">
          <Tag tagName="JavaScript" />
          <Tag tagName="React" />
          <Tag tagName="Css" />
          <Tag tagName="MongoDB" />
          <Tag tagName="Heroku" />
        </div>
        <div className="rp-disc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero
            natus ut dolorem, recusandae rerum quae illo eius animi earum
            voluptatum, sit fugiat? Dolo
          </p>
        </div>
        <div className="rp-btn--con">
          <ButtonFull class="rp-btn--style btn--hover " text="Visit website" />
          <ButtonFull class="rp-btn--style btn--hover" text="See the code" />
        </div>
      </div>
    </>
  );
}

export default RpCard;
