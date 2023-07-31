import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from "../../Redux/actions"
import style from "../Fileters/filters.module.css"


const Filters = () => {

    const dispatch = useDispatch()

    const handleFilterOrder = (event) => {
        dispatch(actions.filterOrder(event.target.value))
    }

    const handleFilterByContinent = (event) => {
        dispatch(actions.filterByContinent(event.target.value))
    }

    const handleFilterByActivities = (event) => {
        dispatch(actions.filterByActivities(event.target.value))
    }
    return (
        <div>
            <select onChange={(event) => handleFilterOrder(event)} className={style.select}>
                <option value="" defaultValue="">Ordernar por</option>
                <option value="A">Ascendente País</option>
                <option value="D">Descente País</option>
                <option value="AP">Ascendente Población</option>
                <option value="DP">Descendente Población</option>
            </select>

            <select onChange={(event) => handleFilterByContinent(event)} className={style.select}>
                <option value="" defaultValue="">Ordernar por Continente</option>
                <option value="All">Todos los Continentes</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

            <select onChange={(event) => handleFilterByActivities(event)} className={style.select}>
                <option value="" defaultValue="">Ordernar por Actividades</option>
                <option value="All">Todos las Actividades</option>
                <option value="Trekking">Trekking</option>
                <option value="Caminata">Caminata</option>
                <option value="Bike Tour">Bike Tour</option>
                <option value="City Tour">City Tour</option>
                <option value="Gastronomic Circuit">Gastronomic Circuit</option>
                <option value="Rapel">Rapel</option>
                <option value="Shopping">Shopping</option>
                <option value="Museum Circuit">Museum Circuit</option>
                <option value="Free Choice">Free Choice</option>
            </select>

        </div>
    )
}

export default Filters