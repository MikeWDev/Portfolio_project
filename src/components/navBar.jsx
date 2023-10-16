import React from "react";

function NavBar() {
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
