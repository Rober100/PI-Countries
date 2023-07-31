import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import style from "../Nav/nav.module.css"
import { useDispatch } from 'react-redux'
import * as actions from "../../Redux/actions"


const url = "https://cdn-icons-png.flaticon.com/512/45/45069.png?w=740&t=st=1688998939~exp=1688999539~hmac=7a38f22e779375c8cb60ffd2ca1bef100f9bff53b4f7303b4844c2955a68c3ca"

const Nav = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.getCountries())
    })

    const handlerClick = (event) => {
        event.preventDefault()
        dispatch(actions.getCountries())
    }

    return (

        <div className={style.nav}>

            <div>
             
            </div>

            <div className={style.image}>
                <Link to="/home"> 
                <img src={url} alt="log" />
                </Link>
            </div>

            <div className={style.link}>
            <Link to="/home">
                <button className={style.button}>HOME</button>
            </Link>
            <Link to="/form">
                <button className={style.button}>CREATE ACTIVITY</button>
            </Link>
            <button className={style.button} onClick={(event) => handlerClick(event)} >RESET COUNTRIES</button>
            </div>
        </div>
    )
}

export default Nav