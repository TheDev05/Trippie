import React from "react";
import style from "../components/Home.module.css";

import { RiAccountPinBoxFill } from "react-icons/ri";
import { IoMdEyeOff } from "react-icons/io";

import book from "../assests/book.png";
import emark from "../assests/emark.png";
import lady from "../assests/lady.png";
import ladyprofile from "../assests/ladyprofile.png";
import mforward from "../assests/mforward.png";
import mdownward from "../assests/mdownward.png";
import qmark from "../assests/qmark.png";

const Home = () => {
  return (
    <div className={style.context}>
      <div className={style.imageBox}>
        <img
          src={book}
          alt=""
          className="animate__animated animate__bounceInDown animate__delay-2s"
        />
        <img
          src={emark}
          alt=""
          className="animate__animated animate__rotateIn  animate__delay-1s"
        />
        <img
          src={lady}
          alt=""
          className="animate__animated animate__fadeInLeft"
        />
        <img
          src={ladyprofile}
          alt=""
          className="animate__animated animate__rollIn animate__delay-1s"
        />
        <img
          src={mforward}
          alt=""
          className="animate__animated animate__fadeInRight animate__delay-1s"
        />
        <img
          src={mdownward}
          alt=""
          className="animate__animated animate__fadeInRight animate__delay-2s"
        />
        <img
          src={qmark}
          alt=""
          className="animate__animated animate__zoomIn animate__delay-4s"
        />
      </div>

      <div
        className={`animate__animated animate__bounceInDown animate__delay-1s     ${style.card}`}
      >
        <h2>Sign In</h2>
        <p>
          Don't have an account yet?<a href="#">Create New</a>
        </p>

        <div className={style.login}>
          <input type="text" name="" id="" placeholder="JohnDoe@gmail.com"/> <RiAccountPinBoxFill className={style.icon1}/>
          <input type="password" name="" id="" placeholder="Password" /><IoMdEyeOff className={style.icon2}/>

          <button
            className={`animate__animated animate__bounceIn animate__delay-3s ${style.btn}`}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
