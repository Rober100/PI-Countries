import React from 'react'
import style from "../Home/home.module.css"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card/Card'
import Paginado from '../../Components/Paginado/Paginado'
import Filters from '../../Components/Fileters/Filters'
import Cards from '../../Components/Cards/Cards'


const Home = () => {


  const allCountries = useSelector((state) => state.allCountriesFilter)
  const allActivities = useSelector((state) => state.allActivitiesFilter)

  

  const [currentPage, setCurrentPage] = useState(1)  // Estado con la pagina actual y otro estado que me setee el estado actual. 
  const [countryPerPage, setCountryPerPage] = useState(10) // Cuantos personajes tengo por página.
  
  const indexOfLastCountry = currentPage * countryPerPage // Página actual donde estoy por la cantidad de paises que tengo en mi pagina.
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage // Indice del ultimo personaje menos la cantidad de p. por pagaina.
  
  const currentCountry = allCountries.slice(indexOfFirstCountry, indexOfLastCountry) // Va tener los personajes que estan en la pagina actual. 
  const currentActivities = allActivities.slice(indexOfFirstCountry, indexOfLastCountry) // Para mostrar las actividades

  // Función que va setear la pagina en el numero que le pasemos por parametro
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    setCurrentPage(1) // Restablecer currentPage a 1 cuando allCountriesFilter cambie

  }, [allCountries])



  return (
    <div >

      <div>
        <Filters />
      </div>

      <div>
        <Paginado countryPerPage={countryPerPage} allCountries={allCountries.length} paginado={paginado} currentPage={currentPage} allActivities={allActivities.length}/>
      </div>

      <div className={style.contenedor}>
      {  currentCountry[0] ?
           currentCountry?.map(coun => {
            return (
              <div className={style.tarjet} key={coun.id}>
                <Card name={coun.name} image={coun.image} continent={coun.continent} id={coun.id} />
              </div>
            )
          })
        : <p className={style.parrafo}> Lo sentimos <hr /> no existe el país ingresado</p>
        
      
        }
      </div>

        {
          currentActivities[0] ? (
        
      <div className={style.cards}>
            { 
                    currentActivities?.map( coun =>{
                        return ( 
                        <div className={style.tarjet}>
                        <Cards name={coun.name}  difficulty={coun.difficulty} duration={coun.duration} season={coun.season} Countries={coun.Countries} id={coun.id}/>
                        </div>
            )
          })
          
        }
      </div>
      ) : (
        <p className={style.parrafo}>Lo sentimos, no hay actividades disponibles.</p>
      )}
    </div>
  )
};
export default Home