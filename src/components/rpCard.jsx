import React from "react";
import Tag from "./tag";
function RpCard(props) {
  return (
    <>
      <div className="rp-card-container">
        <div className="rp-image">{props.img}</div>
        <div className="rp tags">
          <div>
            <Tag />
          </div>
          <div>
            <Tag />
          </div>
          <div>
            <Tag />
          </div>
          <div>
            <Tag />
          </div>
          <div>
            <Tag />
          </div>
        </div>
        <div className="rp-disc">{props.disc}</div>
      </div>
    </>
  );
}

export default RpCard;
