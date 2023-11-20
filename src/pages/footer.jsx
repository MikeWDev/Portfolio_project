import React from "react";
import {
  github,
  linkedIn,
  instagram,
  linkedInLink,
  instagramLink,
  gitHubLink,
} from "../components/icons";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <footer className="container grid grid--3-col">
          <div className="logo">
            <Link to="hero" duration={1000} smooth={true}>
              <img
                style={{ cursor: "pointer" }}
                src={logo}
                className="logo-img"
                alt="Developer's logo"
              />
            </Link>
          </div>
          <div className="nav-links--footer">
            <Link to="hero" duration={1000} smooth={true}>
              <div className="navlink">
                <a href="#">Home</a>
              </div>
            </Link>
            <Link to="about" duration={1000} offset={-80} smooth={true}>
              <div className="navlink">
                <a href="#">About</a>
              </div>
            </Link>
            <Link to="rp" duration={1000} offset={-25} smooth={true}>
              <div className="navlink">
                <a href="#">Portfolio</a>
              </div>
            </Link>
            <Link to="ctaction" duration={1000} offset={-70} smooth={true}>
              <div className="navlink">
                <a href="#">Contact me</a>
              </div>
            </Link>
          </div>
          <div className="socials">
            <a href={linkedInLink} target="_blank">
              <div className="icon--footer" style={{ cursor: "pointer" }}>
                {linkedIn}
              </div>
            </a>
            <a href={instagramLink} target="_blank">
              <div className="icon--footer" style={{ cursor: "pointer" }}>
                {instagram}
              </div>
            </a>
            <a href={gitHubLink} target="_blank">
              <div className="icon--footer" style={{ cursor: "pointer" }}>
                {github}
              </div>
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
