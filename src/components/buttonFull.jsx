import React from "react";

function ButtonFull(props) {
  return (
    <>
      <button type={props.type} value={props.value} className={props.class}>
        {props.text}
      </button>
    </>
  );
}

export default ButtonFull;
