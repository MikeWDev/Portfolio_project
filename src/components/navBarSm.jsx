import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function NavBarSm() {
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

  //SCROLLING LOGIC

  return (
    <>
      {/* navhidden */}
      <div className="navbar-container">
        <div className={`navbar-sm ${stickyClass}`}>
          <div className="img-box-sm">
            <Link to="hero" duration={1000} smooth={true}>
              <img src={logo} className="logo-img" alt="Logo of developer" />
            </Link>
          </div>
          <div className="menu-button-sm">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarSm;
