import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";

function NavBar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 600 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <>
      <div className="nav-box">
        <header className={`navbar ${stickyClass}`}>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            </ul>
          </nav>
          <div className="img-box">
            <img src={logo} className="logo-img" alt="Logo of developer" />
          </div>
          <div className="contact-me-box">
            <a href="#">Contact me </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBar;
