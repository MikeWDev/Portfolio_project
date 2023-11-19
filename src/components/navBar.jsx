import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [IntersectinnState, setIntersectingState] = useState(true);

  useEffect(() => {
    const obs = new IntersectionObserver(
      function (entires) {
        const ent = entires[0];
        const headerEl = document.querySelector("body");
        console.log(headerEl);
        if (ent.isIntersecting === false) {
          headerEl.classList.add("sticky");
          setIntersectingState(false);
        } else {
          if (ent.isIntersecting === true) {
            headerEl.classList.remove("sticky");
            setIntersectingState(true);
          }
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-90px",
      }
    );
    const heroWelcomeElement = document.querySelectorAll(".obs-class");

    heroWelcomeElement.forEach((el) => {
      obs.observe(el);
    });
  }, [IntersectinnState]);

  return (
    <>
      {/* navhidden */}
      <div className="nav-box">
        <header className={`navbar header `}>
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
            <Link to="ctaction" smooth={true} duration={1000} offset={-50}>
              Contact me
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBar;
