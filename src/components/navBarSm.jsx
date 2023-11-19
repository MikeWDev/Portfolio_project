import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function NavBarSm() {
  return (
    <>
      {/* navhidden */}

      <div className={`navbar-container `}>
        <div className={`navbar-sm `}>
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
