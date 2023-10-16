import React from "react";
import "../pages/pageStyles.css";
import "../components/component-style.css";
import NavBar from "../components/navBar";
function HeroPage() {
  return (
    <>
      <section className="section-hero">
        <NavBar />
        <div className="hero-page container grid grid--2-col">
          <div className="hero-slogans">
            <h1>CREATIVE</h1> <br />
            <h1>UNIQUE</h1> <br />
            <h1>SIMPLE</h1>
            <br />
            <p className="paragraph-hero">
              Just some random catchy text in here Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Esse accusantium nesciunt ex tempore
              ullam veritatis minus quibusdam excepturi maiores quos, vel
              voluptas, eum nostrum officiis cumque fugiat earum. Voluptate,
              quibusdam!
            </p>
          </div>
          <div className="pic-container">
            <img
              src="src\assets\img\goha1.jpg"
              alt="The picture of the developer"
            />
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default HeroPage;
