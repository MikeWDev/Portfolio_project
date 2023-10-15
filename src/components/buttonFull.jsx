import React from "react";

function ButtonFull(props) {
  return (
    <>
      <button className={props.class}>{props.text}</button>
    </>
  );
}

export default ButtonFull;
