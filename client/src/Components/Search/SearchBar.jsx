import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../../Redux/actions'
import style from "../Search/search.module.css"

const SearchBar = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = async () => {
       await  dispatch(search(name))
    }

  return (
    <div className={style.container}>
        <input className={style.input}  type="text" placeholder='Buscar por nombre de país...' onChange={handleChange} />
        <button type='submit' onClick={() =>{handleClick();setName('')}}>Buscar/Traer Todos</button>
    </div>
  )
}

export default SearchBar