import React from "react";
import RpCard from "../components/rpCard";
import ButtonFull from "../components/buttonFull";
function RecentProjects() {
  return (
    <>
      <section className="rp-section ">
        <div className="container grid ">
          <div className="title-con">
            <h2>Most recent projects</h2>
          </div>
          <div className="grid grid--4-col rp-card-container">
            <RpCard />
          </div>
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
