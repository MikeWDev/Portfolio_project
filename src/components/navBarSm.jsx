import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function NavBarSm() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(true);
  }
  function handleClose() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* navhidden */}
      <header className={`navbar-sm }`}>
        <div className="img-box-sm">
          <Link to="hero" duration={1000} smooth={true}>
            <img src={logo} className="logo-img" alt="Logo of developer" />
          </Link>
        </div>
        <div
          className={`menu-button-sm ${menuOpen ? "fs-hidden" : ""} `}
          onClick={handleClick}
          id="menu-icon"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </header>

      <div className={`nav-box-fs ${menuOpen ? "fs-visible" : ""} `}>
        <ion-icon
          onClick={handleClose}
          size="large"
          name="close-outline"
          id="close-icon"
        ></ion-icon>
        <div className="nav-bar--fs">
          <nav>
            <ul className="nav-links-fs">
              <li>
                <Link
                  onClick={handleClose}
                  to="hero"
                  duration={1000}
                  smooth={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  to="about"
                  duration={1000}
                  offset={-80}
                  smooth={true}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClose}
                  to="rp"
                  duration={1000}
                  smooth={true}
                  offset={-25}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <div className="contact-me-box-fs">
                  <Link
                    onClick={handleClose}
                    to="ctaction"
                    smooth={true}
                    duration={1000}
                    offset={-70}
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
}

export default NavBarSm;
