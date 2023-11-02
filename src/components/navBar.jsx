import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import useSticky from "../hooks/useSticky";

function NavBar() {
  const stickyClass = useSticky("");

  return (
    <>
      {/* navhidden */}
      <div className="nav-box">
        <header className={`navbar ${stickyClass} `}>
          <nav>
            <ul className="nav-links">
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
            </ul>
          </nav>
          <div className="img-box">
            <Link to="hero" duration={1000} smooth={true}>
              <img src={logo} className="logo-img" alt="Developer's logo" />
            </Link>
          </div>
          <div className="contact-me-box">
            <Link to="ctaction" smooth={true} duration={1000}>
              Contact me
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBar;
