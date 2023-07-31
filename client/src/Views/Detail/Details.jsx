import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from '../../Redux/actions'
import style from '../Detail/detail.module.css'

const Details = () => {



  const { id } = useParams();

  const dispatch = useDispatch();

  const countryDetail = useSelector((state) => state.countryDetail)

  useEffect(() => {
    dispatch(actions.getCountriesDetail(id)) //despacha cuando se monta
    
    return () => dispatch(actions.cleanDetail()) // despacha cuando se desmonta
  }, [id])

  return (
    <div className={style.container}>

       <div className={style.box2}>
        <img src={countryDetail[0]?.image} alt={countryDetail[0]?.name} className={style.img} />
      </div> 
      
      <div className={style.box2}>

        <h2 className={style.text}>ID:  {countryDetail[0]?.id}</h2>
        <h2 className={style.text}>País: {countryDetail[0]?.name}</h2>
        <h3 className={style.text}>Contiente:  {countryDetail[0]?.continent}</h3>
        <h3 className={style.text}>Capital:  {countryDetail[0]?.capital}</h3>
        <h3 className={style.text}>Subregion:  { countryDetail[0]?.subregion}</h3>
        <h3 className={style.text}>Área:  {countryDetail[0]?.area}</h3>
        <h3 className={style.text}>Población:  {countryDetail[0]?.population} habitantes</h3>
        <h2 className={style.text}>Actividades creadas: </h2>
        {
          (countryDetail[0]?.Activities[0]) ?
          <p className={style.text}>{[`Actividad: ${countryDetail && countryDetail[0]?.Activities[0]?.name}`, <br />, `Dificultad: ${countryDetail && countryDetail[0]?.Activities[0]?.difficulty}`, <br/>, `Duración: ${countryDetail && countryDetail[0]?.Activities[0]?.duration} hs.`, <br/>, `Temporada: ${countryDetail && countryDetail[0]?.Activities[0]?.season}` ]}</p>
          :
          <h2 className={style.text} >"{`El país ${countryDetail && countryDetail[0]?.name} no tiene actividades asociadas.`}"</h2>

        }
 


    </div>
</div>
  )
}

export default Details