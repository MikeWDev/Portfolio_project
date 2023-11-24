import React from "react";
import RpCard from "../components/rpCard";
import ButtonFull from "../components/buttonFull";
import omnifoodScreen from "../assets/img/omnifood_screen.png";
function RecentProjects(props) {
  return (
    <>
      <section className="rp-section " id={props.id}>
        <div className="container grid grid-rp ">
          <div className="title-con">
            <h2>Most recent projects</h2>
          </div>
          <div className="grid grid--3-col rp-card-container">
            <RpCard webImg={omnifoodScreen} />
            {/* <RpCard webImg={omnifoodScreen} />
            <RpCard webImg={omnifoodScreen} /> */}
          </div>
          <div className="button-con">
            {/* <ButtonFull
              class="btn btn--rp btn--hover"
              text="See all projects >"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentProjects;
