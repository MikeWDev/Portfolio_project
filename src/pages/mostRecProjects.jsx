import React from "react";
import RpCard from "../components/rpCard";
import ButtonFull from "../components/buttonFull";
function RecentProjects() {
  return (
    <>
      <section className="rp-section ">
        <div className="container ">
          <div className="title-con">
            <h2>Most recent projects</h2>
          </div>
          <div className="grid grid--3-col">
            <RpCard />
            <RpCard />
            <RpCard />
          </div>
          <div className="button-con">
            <ButtonFull class="btn btn--rp " text="See all projects >" />
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentProjects;
