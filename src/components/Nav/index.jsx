import React from 'react'
import style from "./style.module.css"
import {links} from "./links"
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={style.header__menu}>
       <ul className={style.menu__list}>
         <li className={style.menu__item}>
            {
            links.map(({id, title, link}) =>
            <NavLink className={style.menu__link}  key={id} to={link}>{title}</NavLink> )
            } 
         </li>
       </ul>
    </nav>
  )
}
