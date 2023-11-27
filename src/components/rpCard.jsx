import React, { useState } from "react";
import Tag from "./tag";
import ButtonFull from "./buttonFull";
import omnifoodScreen from "../assets/img/omnifood_screen.png";
function RpCard(props) {
  const [tag, setTag] = useState(props.tagsData);
  const [data, setData] = useState(props.projectData);
  console.log(data.webImg);
  return (
    <>
      <div className="rp-card">
        <div className="rp-card-title">
          <h1>{data.title}</h1>
        </div>
        <div className="rp-card-img">
          <img
            alt="picture of the website"
            className="image"
            src={data.webImg}
          ></img>
          <div className="rp-tags-overlap">
            <div className="tags-con">
              {tag.map((tag) => {
                return <Tag tagName={tag.tagName} />;
              })}
            </div>
          </div>
        </div>
        <div className="rp-card-button-container">
          <a target="_blank" href={data.webLink}>
            <ButtonFull class="btn-rp--card btn--hover" text="Visit website" />
          </a>

          <a target="_blank" href={data.codeLink}>
            <ButtonFull class="btn-rp--card btn--hover" text="See the code" />
          </a>
        </div>
      </div>
    </>
  );
}

export default RpCard;
