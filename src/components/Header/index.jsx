import React from 'react';
import style from "./style.module.css"
import Nav from '../Nav';
import logo from "../../assets/img/logo.svg"

export default function Header() {
  return (
    <div className="wrapper">
        <div className={style.header}>
          <div className={style.header__container}>
            <a href="" className={style.header__logo}><img src={logo} alt="" /></a>
            <Nav/>
          </div>
        </div>

    </div>
  )
}
