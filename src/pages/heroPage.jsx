import React from "react";
import NavBar from "../components/navBar";
import videoBg from "../assets/img/bg-vid.mp4";
import ButtonFull from "../components/buttonFull";
import Profile1 from "../assets/img/profile1.png";
function HeroPage() {
  const introduction =
    "My name is Michal. I am a full-stack developer based in Reading UK. I design and code beautiful and accessible websites of all kind";

  return (
    <>
      <section className="section-hero">
        <video className="background-clip" src={videoBg} autoPlay muted loop />
        <NavBar />
        <div className="hero-page container grid grid--2-col">
          <div className="hero-content">
            <div className="slogans-hero">
              <h1>CREATIVE</h1> <br />
              <h1>UNIQUE</h1> <br />
              <h1>SIMPLE</h1>
              <br />
              <p className="paragraph-hero">{introduction}</p>
              <div className="hero-btn-box">
                <ButtonFull
                  class=" btn--hover btn--hero"
                  text="Check out my work"
                />
              </div>
            </div>
          </div>
          <div className="pic-container">
            <img
              className="hero-img"
              src={Profile1}
              alt="The picture of the developer"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
