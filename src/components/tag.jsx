import React from "react";

function Tag(props) {
  return (
    <>
      <div className="tag-container">
        <p>{props.tagName}</p>
      </div>
    </>
  );
}

export default Tag;
