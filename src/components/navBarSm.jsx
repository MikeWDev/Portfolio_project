import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";
import { useVisible } from "../hooks/useVisible";
function NavBarSm() {
  const { visible, handleClickOpen, handleClickClose } = useVisible("");
  return (
    <>
      {/* navhidden */}
      <header className="navbar-sm">
        <div className="img-box-sm">
          <Link to="hero" duration={1000} smooth={true}>
            <img src={logo} className="logo-img" alt="Logo of developer" />
          </Link>
        </div>
        <div
          onClick={handleClickOpen}
          className="menu-button-sm"
          id="menu-icon"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </header>
    </>
  );
}

export default NavBarSm;
