import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import useVisible from "../hooks/useVisible";
function NavBarSmFullScreen() {
  const { visible, handleClickOpen, handleClickClose } = useVisible("");
  return (
    <>
      {/* navhidden */}
      <div className={`nav-box-fs  ${visible}`}>
        <ion-icon
          onClick={handleClickClose}
          size="large"
          name="close-outline"
          id="close-icon"
        ></ion-icon>
        <div className="nav-bar--fs">
          <nav>
            <ul className="nav-links-fs">
              <li>
                <Link
                  onClick={handleClickClose}
                  to="hero"
                  duration={1000}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickClose}
                  to="about"
                  duration={1000}
                  offset={-50}
                  smooth={true}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClickClose}
                  to="rp"
                  duration={1000}
                  smooth={true}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <div className="contact-me-box-fs">
                  <Link
                    onClick={handleClickClose}
                    to="ctaction"
                    smooth={true}
                    duration={1000}
                  >
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
  return { visible, handleClickOpen };
}

export default NavBarSmFullScreen;
