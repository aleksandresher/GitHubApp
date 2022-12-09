import React from "react";
import "../../components/Header/Header.css";
import Moon from "../../images/moon.png";
import Sun from "../../images/sun.png";

function Header({ toggle, onClick }) {
  return (
    <div className={toggle ? "darkHeaderContainer" : "headerContainer"}>
      <p className={toggle ? "nigthdevfinder" : "devfinder"}>devfinder</p>
      <div className="daynight" onClick={onClick}>
        <p className={toggle ? "light" : "dark"}>{toggle ? "LIGHT" : "DARK"}</p>
        <img
          src={toggle ? Sun : Moon}
          className="moonImg"
          alt="toggleofdaynight"
        />
      </div>
    </div>
  );
}
export default Header;
