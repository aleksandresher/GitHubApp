import React from "react";
import "../../components/Header/Header.css";

function Header({ toggle, onClick }) {
  return (
    <div className={toggle ? "darkHeaderContainer" : "headerContainer"}>
      <p className={toggle ? "nigthdevfinder" : "devfinder"}>devfinder</p>
      <div className="daynight" onClick={onClick}>
        <p className={toggle ? "light" : "dark"}>{toggle ? "LIGHT" : "DARK"}</p>
        <img
          src={toggle ? "./images/sun.png" : "./images/moon.png"}
          className="moonImg"
          alt="toggleofdaynight"
        />
      </div>
    </div>
  );
}
export default Header;
