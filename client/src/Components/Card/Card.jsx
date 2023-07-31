import React from 'react'
import {Link} from "react-router-dom"
import style from "../Card/card.module.css"

const Card = ({ id, name, image, continent }) => {
    return (
        <div className={style.cont}>
           
            <div>

                <h2>Country: {name}</h2>
                
                <Link to={`/detail/${id}`}>
                    <img src={image} alt={name} className={style.img}/>
                </Link>
                <h3>Continent: {continent}</h3>
                

            </div>
        </div>
    )
}

export default Card