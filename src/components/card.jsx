import React from "react";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="icon-box">{props.svg}</div>
        <div className="title-box">
          <h2>{props.title}</h2>
        </div>
        <div className="content-box">
          <p>{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
