import React from "react";

function DataLine(props) {
  return (
    <>
      <div className="data-container">
        <div className="data-name">
          <p>{props.name}</p>
        </div>
        <div className="about-data">
          <p>{props.data}</p>
        </div>
      </div>
    </>
  );
}

export default DataLine;
