import React from "react";
import style from "../components/SandBox.module.css";

import img1 from "../assests/man.jpg";
import img2 from "../assests/cycle.jpg";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { FaHeart } from "react-icons/fa";

const SandBox = () => {
  return (
    <div className={style.context}>
      <div className={style.vacation}>
        <div className={style.content}>
          <div className={style.title}>
            <h2>What's dis?</h2>
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa fugiat
          aliquid officia. Doloremque id fugiat, sequi nihil, debitis ad magni
          eos, quaerat saepe mollitia excepturi aut ducimus. Unde dolorum
          tenetur in quae, repudiandae voluptas illum sequi blanditiis est
          assumenda sapiente tempora? Ab voluptatum cumque neque laboriosam
          reprehenderit tempora illum possimus dolorum ratione culpa nesciunt
          quos sequi architecto voluptas amet repellat delectus deleniti
          provident praesentium nobis perspiciatis, totam consectetur obcaecati
          vero. Culpa at reprehenderit repellendus minima vitae sequi nobis,
          alias, earum, quo fuga reiciendis laudantium doloribus dolorem
          impedit. Hic, accusamus! Explicabo eum natus nulla consequatur
          voluptas vero! Aut assumenda ipsum consequuntur fuga culpa deleniti
          reprehenderit nisi quia dolorem. Animi est necessitatibus eaque fuga
          fugiat quas eligendi mollitia sapiente ducimus odio, at repellendus
          quae debitis quibusdam, optio pariatur fugit atque deleniti libero
          voluptatibus! Vero minus deleniti odit sequi itaque, labore amet
          voluptas iusto doloribus! Consequatur facere eum eligendi cum dolore
          maxime ab deserunt vero, velit similique ea eveniet placeat possimus
          reiciendis! Quo reprehenderit blanditiis tempora! Magni adipisci
          fugiat error laudantium delectus veritatis modi non magnam tenetur,
          quisquam id ad doloremque. Ratione fugit earum rem ea facilis saepe
          dolores, aspernatur illum, culpa fuga cupiditate eos quo distinctio
          aliquam laborum unde aut omnis delectus.
        </div>
      </div>

      <div className={style.yellowSection}>
        <img src={img1} alt="" />

        <div className={style.card}>
          <div className={style.title}>
            <h2>Costa de Rica</h2>
          </div>
          <div className={style.card_context}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis neque, nemo similique consequatur cum rerum eaque ipsa
            quam praesentium laudantium ex beatae fugiat cupiditate ut odit,
            quod blanditiis quas debitis eligendi! Veritatis laudantium aliquid
            minus. Iusto quas enim commodi officiis. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fugit repellendus blanditiis, quis
            molestias reprehenderit assumenda eligendi impedit modi quo,
            perspiciatis sint! Ut nulla culpa distinctio quos nobis sapiente
            quidem omnis labore maxime amet assumenda atque voluptatibus
            molestias aperiam aspernatur deserunt repudiandae necessitatibus aut
            illo, officia aliquam cum ipsum perspiciatis. Incidunt doloribus
            ducimus quisquam dolore, dolores sit perferendis tenetur sapiente
            amet. Repudiandae similique, voluptatum porro autem labore nam alias
            obcaecati unde! Deserunt veniam repudiandae delectus laboriosam
            maxime veritatis ut?
          </div>
          <button className={style.btn1}>Book Now</button>
        </div>
      </div>

      <div className={style.about}>
        <img src={img2} alt="" />
        <div className={style.card}>
          <div className={style.title}>
            <h2>Costa de Rica</h2>
          </div>
          <div className={style.card_context}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis neque, nemo similique consequatur cum rerum eaque ipsa
            quam praesentium laudantium ex beatae fugiat cupiditate ut odit,
            quod blanditiis quas debitis eligendi! Veritatis laudantium aliquid
            minus. Iusto quas enim commodi officiis. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fugit repellendus blanditiis, quis
            molestias reprehenderit assumenda eligendi impedit modi quo,
            perspiciatis sint! Ut nulla culpa distinctio quos nobis sapiente
            quidem omnis labore maxime amet assumenda atque voluptatibus
            molestias aperiam aspernatur deserunt repudiandae necessitatibus aut
            illo, officia aliquam cum ipsum perspiciatis. Incidunt doloribus
            ducimus quisquam dolore, dolores sit perferendis tenetur sapiente
            amet. Repudiandae similique, voluptatum porro autem labore nam alias
            obcaecati unde! Deserunt veniam repudiandae delectus laboriosam
            maxime veritatis ut?
          </div>
          <button className={style.btn1}>Book Now</button>
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.social}>
          <a href="">
            {" "}
            <TiSocialFacebookCircular />{" "}
          </a>
          <a href="#">
            <TiSocialDribbble />
          </a>

          <a href="#">
            <TiSocialTwitterCircular />
          </a>
          <a href="#">
            <TiSocialPinterestCircular />
          </a>
          <a href="#">
            <TiSocialLinkedinCircular />
          </a>
        </div>
        <div className={style.label}>
          <p>
            Created with &nbsp;
            <FaHeart className={style.labelLogo} />
            &nbsp;Ankit D.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SandBox;
