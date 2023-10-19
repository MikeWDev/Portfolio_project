import React from "react";
import { useState, useEffect } from "react";

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // const nav = document.querySelector(".nav-box");
  // const navOffSet = nav.offsetTop;
  // window.addEventListener("scroll", () => {
  //   if (window.pageYOffset >= navOffSet) {
  //     nav.classList.add("sticky");
  //   } else {
  //     nav.classList.remove("sticky")
  //   }
  // });

  return (
    <>
      <div className="nav-box">
        <header>
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
            <img
              className="logo-img"
              src="src\assets\img\gosia-logo.jpg"
              alt="K development logo"
            />
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
