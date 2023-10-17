import React from "react";
import "../pages/pageStyles.css";
import "../components/component-style.css";
import NavBar from "../components/navBar";
function HeroPage() {
  const introduction =
    "My name is Michal. I am a full-stack developer based in Reading UK. I design and code beautiful and accessible websites of all kind";

  return (
    <>
      <section className="section-hero">
        <NavBar />
        <div className="hero-page container grid grid--2-col">
          <div className="hero-content">
            <div className="slogans-hero">
              <h1>CREATIVE</h1> <br />
              <h1>UNIQUE</h1> <br />
              <h1>SIMPLE</h1>
              <br />
              <p className="paragraph-hero">{introduction}</p>
              <p className="grad-paragraph">
                Are u ready to enter digital word?
              </p>
            </div>
          </div>
          <div className="pic-container">
            <img
              className="hero-img"
              src="src\assets\img\goha1.jpg"
              alt="The picture of the developer"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
