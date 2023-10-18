import React from "react";

function AboutMePage() {
  return (
    <>
      <section className="about-me-section">
        <div className="about-page container gird">
          <div className="grid about-img">
            <img src="../assets/img/gosia-logo.jpg" alt="" />
          </div>
          <div className="grid about-content">
            <div className="about-text">
              <div className="about-disc">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
                ipsa at quasi sed vitae dolore? Autem accusamus{" "}
              </div>
              <div className="about-adress">Adress</div>
            </div>
            <div className="about-skills">My skills</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMePage;
