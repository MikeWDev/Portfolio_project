import React from "react";
import { twitter, linkedIn, instagram } from "../components/icons";
import logo from "../assets/img/logo.png";
function Footer() {
  return (
    <>
      <section className="footer-section">
        <footer className="container grid grid--3-col">
          <div className="logo">
            <img src={logo} className="logo-img" alt="Developer logo" />
          </div>
          <div className="nav-links--footer">
            <div className="navlink">
              <a href="#">Home</a>
            </div>
            <div className="navlink">
              <a href="#">About</a>
            </div>
            <div className="navlink">
              <a href="#">Portfolio</a>
            </div>
            <div className="navlink">
              <a href="#">Contact me</a>
            </div>
          </div>
          <div className="socials">
            <div className="social-icon">{linkedIn}</div>
            <div className="social-icon">{instagram}</div>
            <div className="social-icon">{twitter}</div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
