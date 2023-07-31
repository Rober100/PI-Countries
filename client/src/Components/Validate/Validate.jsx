const validate = (form) => {
    const errors = {};

    if (form.name === "") {
        errors.name = "Debes seleccionar una actividad"
    }

    if (!form.difficulty) {
        errors.difficulty = "Debes seleccionar un tipo de dificultad"
    }

    if (!form.duration) {
        errors.duration = "Debes ingresar una duración"
    }

    if (!form.season) {
        errors.season = "Debes seleccionar una temporada"
    }

    if (!form.pais.length) {
        errors.pais = "Debes seleccionar al menos un país"
    }

    if (isNaN(form.duration)) {
        errors.duration = "Deben ser solo números"
    }

    if(form.duration > 7 || form.duration < 1 ){
        errors.duration = "La duración solo puede ser entre 1hs. y 7hs."
    }
    return errors
} 

export default validate;