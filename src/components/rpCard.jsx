import React from "react";
import Tag from "./tag";
import ButtonFull from "./buttonFull";
function RpCard(props) {
  return (
    <>
      <div className="rp-card">
        <div className="rp-card-title">
          <h1>Omnifood</h1>
        </div>
        <div className="rp-card-img">
          <img
            alt="picture of the website"
            className="image"
            src={props.webImg}
          ></img>
          <div className="rp-tags-overlap">
            <div className="tags-con">
              <Tag tagName="HTML" />
              <Tag tagName="CSS" />
              <Tag tagName="JavaScript" />
              <Tag tagName="React.js" />
              <Tag tagName="Node.js" />
            </div>
          </div>
        </div>
        <div className="rp-card-button-container">
          <a>
            <ButtonFull class="btn-rp--card btn--hover" text="Visit website" />
          </a>

          <a>
            <ButtonFull class="btn-rp--card btn--hover" text="See the code" />
          </a>
        </div>
      </div>
    </>
  );
}

export default RpCard;
