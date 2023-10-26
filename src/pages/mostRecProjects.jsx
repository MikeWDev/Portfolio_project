import React from "react";
import RpCard from "../components/rpCard";
import ButtonFull from "../components/buttonFull";
function RecentProjects(props) {
  return (
    <>
      <section className="rp-section " id={props.id}>
        <div className="container grid grid-rp ">
          <div className="title-con">
            <h2>Most recent projects</h2>
          </div>
          <div className="grid grid--4-col rp-card-container"></div>
          <div className="button-con">
            <ButtonFull
              class="btn btn--rp btn--hover"
              text="See all projects >"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentProjects;
