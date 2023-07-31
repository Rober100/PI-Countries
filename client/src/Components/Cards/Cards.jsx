import React from 'react'
import style from "../Cards/cards.module.css"
import { deleteActivities } from '../../Redux/actions'
import { useDispatch } from "react-redux"

const Cards = ({ name, difficulty, duration, season, Countries, id }) => {
    
  const dispatch = useDispatch();


    const onClose = () =>{
        dispatch(deleteActivities(id))
    }

  return (
    
    <div  className={style.cont}>
      
      <div className={style.card}>
        <h1 className={style.title}>{`Actividad: ${name}`}</h1>
        <h3 className={style.title}>{`Dificultad: ${difficulty}`}</h3>
        <h3 className={style.title}>{`Duration: ${duration} hs.`}</h3>
        <h3 className={style.title}>{`Temporada: ${season}`}</h3>
        <h3 className={style.title}>Países: {
          Countries?.map((el,index) => {
            return <p className={style.title1} key={index}>{el.name}</p>
          })
          }</h3>
          <button onClick={()=> onClose({id})}>Eliminar</button>
      </div>
    </div>
  )
}

export default Cards