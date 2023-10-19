import React from "react";
import ButtonFull from "../components/buttonFull";

function WelcomePage() {
  return (
    <>
      <section className="section-welcome">
        {/* <video autoPlay muted loop playsInline>
          <source
            src="src\assets\img\background-vid.mp4"
            type="video/mp4"
          ></source>
        </video> */}
        <div className="welcome-page container grid">
          <h1>
            Welcome! My name is <br /> <span className="name">Michal</span>
            <br /> I am a full-stack web developer
          </h1>
          <div className="btn-container">
            <ButtonFull text="See more" class="btn btn--welcome" />
          </div>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
