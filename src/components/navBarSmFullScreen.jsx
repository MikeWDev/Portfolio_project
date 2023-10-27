import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function NavBarSmFullScreen() {
  return (
    <>
      {/* navhidden */}
      <div className="nav-box-fs">
        <ion-icon size="large" name="close-outline"></ion-icon>
        <div className="nav-bar--fs">
          <nav>
            <ul className="nav-links-fs">
              <li>
                <Link to="hero" duration={1000} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" duration={1000} offset={-50} smooth={true}>
                  About
                </Link>
              </li>
              <li>
                <Link to="rp" duration={1000} smooth={true}>
                  Portfolio
                </Link>
              </li>
              <li>
                <div className="contact-me-box-fs">
                  <Link to="ctaction" smooth={true} duration={1000}>
                    Contact me
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBarSmFullScreen;
