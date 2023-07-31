import { useState } from 'react'
import validate from '../../Components/Validate/Validate'
import Style from "../Form/form.module.css"
import { useDispatch, useSelector } from "react-redux"
import { addActivity } from '../../Redux/actions'
import { useNavigate } from "react-router-dom"

const Form = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries)

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    pais: []
  })

  const [errors, setErrors] = useState({})


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("Este es el name: ", name);
    console.log("Este es el value: ", value);
    console.log(form.pais);
    console.log(form);
    if(form.pais.includes(value)){
      setForm({...form})
    }
    if (name === "pais") {
      setForm({
        ...form,
        pais: [...form.pais, event.target.value]
      });
      setErrors(validate({
        ...form,
        [name]: value,
      }
      ))
    } else {
      setForm({
        ...form,
        [name]: value,
      });
      setErrors(
        validate({
          ...form,
          [name]: value,
        })
      )
    }

  };

  // const buttonDisabled = () => {
  //   let disabled = true;
  //   for (let error in errors) {
  //     if (errors[error] === "") disabled = false
  //     else {
  //       disabled = true;
  //       break;
  //     }
  //   }
  //   return disabled
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {

      dispatch(addActivity(form))
      setForm({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        pais: []
      });
      alert("La Actividad se creo con éxito");
      navigate("/home")
    } else {
      alert("Por favor, completa todos los los datos")
    }
  }

  const handleDelete = (element) => {
    setForm({
      ...form,
      pais: form.pais.filter((ele) => ele !== element)
    })
  };

  return (
    <div className={Style.contenedor}>
      <form onSubmit={handleSubmit}>

        <div className={Style.form}>
          <div className={Style.select}>
            <label htmlFor="">Nombre: </label>

            <select name="name" onChange={handleChange} >

              <option value="" disabled selected>Selecciona la actividad</option>

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
          {errors.name && <p className={Style.p}>{errors.name}</p>}

          <div className={Style.select}>
            <label>Dificultad: </label>
            <select name="difficulty" onChange={handleChange}>

              <option value="" disabled selected>Seleccione un valor</option>
              <option value="1 (Dificultad Nula)">1 (Dificultad Nula)</option>
              <option value="2 (Dificultad Baja)">2 (Dificultad Baja)</option>
              <option value="3 (Dificultad Media)">3 (Dificultad Media)</option>
              <option value="4 (Dificultad Elevada)">4 (Dificultad Elevada)</option>
              <option value="5 (Dificultad Extrema)">5 (Dificultad Extrema)</option>

            </select>
          </div>
          {errors.difficulty && <p className={Style.p}>{errors.difficulty}</p>}

          <div className={Style.select}>
            <label>Duración:(en horas) </label>
            <input type="text" name="duration" min={1} max={6} onChange={handleChange} />
          </div>
          {errors.duration && <p className={Style.p}>{errors.duration}</p>}

          <div className={Style.select}>
            <label>Temporada: </label>
            <select name="season" onChange={handleChange}>
              <option value="" disabled selected>Seleccione una temporada</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
          </div>
          {errors.season && <p className={Style.p}>{errors.season}</p>}

          <div className={Style.select}>

            <label>Seleccioná el/los países: </label>
            <select name="pais" onChange={handleChange}>
              <option value="" disabled selected>Seleccione el/los países</option>
              {allCountries?.map((e) => {
                return (
                  <option value={e.name} key={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          {errors.pais && <p className={Style.p}>{errors.pais}</p>}

          <div>
            {form.pais?.map((element) => (
              <div key={element} className={Style.countries}>
                <button className={Style.setcountry} onClick={() => { handleDelete(element) }}>{`${element}`} X</button>
              </div>
            ))}
          </div>

        </div>
        <div>
          <button type="submit" className={Style.btn}>Crear Actividad</button>
        </div>

      </form>
    </div>
  )
}

export default Form;

