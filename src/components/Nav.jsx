import React from "react";
import style from "../components/Nav.module.css";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div
        className={`animate__animated animate__flipInX animate__delay-4s  ${style.logo}`}
      >
        <a href="#">
          <h2>LOGO</h2>
        </a>
      </div>
      <div className={style.navLinks}>
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Plans</a>
        </div>
        <div>
          <a href="#">Locations</a>
        </div>
        <div>
          <a href="#">Bundle</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
