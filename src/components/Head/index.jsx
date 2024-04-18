import React from "react";
import style from "./style.module.css";
import decor from "../../assets/img/main/decor.png";
// import decor from "../../assets/img/main/decor.svg";
import apple from "../../assets/img/main/apple.svg";
import google from "../../assets/img/main/google.svg";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <div className="wrapper">
      <div className="page">
        <section className={style.page__main}>
      
      <div className={style.head__container}>
        <div className={style.head__content}>
            <h1 className={style.main_title}>Browse top quality <span>Guitars</span> online</h1>
            <p className={style.main__text}>Explore 50k+ latest collections of branded guitars online with Rhythm.</p>
            <div className={style.main__actions}>
                 <Link className={style.actions__main_button}>Get the App</Link>
                 <div className={style.actions_main_app_icon}>
                    <img src={google} alt="GooglePay icon" />
                 </div>
                 <div className={style.actions_main_app_icon}>
                    <img src={apple} alt="ApplePay icon" />
                 </div>
            </div>
        </div>
     

      <div className={style.main__decor}>
        <div className={style.decor__main}>
          <div className={style.decor__image}>
            <img src={decor} alt="Main Decor" />
          </div>
        </div>
      </div>

      </div>
      </section>
      </div>
    </div>
  );
}
