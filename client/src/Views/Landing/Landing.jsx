import React from 'react'
import { NavLink } from "react-router-dom"
import style from "../Landing/landing.module.css"

const Landing = () => {
  return (
    <div className={style.cont}>
      <h1 className={style.title}>BIENVENIDOS</h1>
      <NavLink to="/home">
        <button className={style.boton1}>INGRESAR</button>
      </NavLink>

    </div>
  )
}

export default Landing;
