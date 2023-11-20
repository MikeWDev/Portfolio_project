import { useState, useEffect } from "react";
import React from "react";
import NavBar from "../components/navBar";
import videoBg from "../assets/img/bg-vid.mp4";
import ButtonFull from "../components/buttonFull";
import Profile1 from "../assets/img/profile1.png";
import { Link } from "react-scroll";

import NavBarSm from "../components/navBarSm";
import Profile1webp from "../assets/img/profile1.webp";

function HeroPage(props) {
  const introduction =
    "My name is Michal. I am a full-stack developer based in Reading UK. I design and code beautiful and accessible websites for everyone!";

  return (
    <>
      <section className="section-hero helper-class" id={props.id}>
        <video
          className={`background-clip `}
          src={videoBg}
          autoPlay
          muted
          loop
        />
        {/* <NavBarSmFullScreen /> */}
        <NavBarSm />
        <NavBar />
        <div className="center-container">
          <div className={`hero-page container grid grid--2-col  `}>
            <div className="hero-content">
              <div className="slogans-hero slogans-hero-lg">
                <h1>CREATIVE</h1> <br />
                <h1>UNIQUE</h1> <br />
                <h1>SIMPLE</h1>
                <br />
              </div>

              <div className="hero-paragraph">
                <p className="paragraph-hero">{introduction}</p>
                <div className="hero-btn-box">
                  <Link to="rp" offset={-25} duration={1000} smooth={true}>
                    <ButtonFull
                      class=" btn--hover btn--hero"
                      text="Check out my work"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="pic-container pic-container-hero">
              <div className="slogans-hero slogans-hero-sm">
                <h1>CREATIVE</h1> <br />
                <h1>UNIQUE</h1> <br />
                <h1>SIMPLE</h1>
                <br />
              </div>
              <div className="hero-pic--con-sm">
                <picture>
                  <source srcSet={Profile1} type="image/png" />
                  <source srcSet={Profile1webp} type="image/webp" />
                  <img
                    className="hero-img"
                    src={Profile1webp}
                    alt="Neon shape of the developer"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
