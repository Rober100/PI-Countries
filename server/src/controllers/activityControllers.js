const { Activity, Country } = require ("../db")

const postActivity = async (name, difficulty, duration, season, pais) => {

     // Crear una nueva actividad turística en la base de datos
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season, 
    })

    // Iterar sobre los países recibidos
    for ( let i = 0; i < pais.length; i++){
        const findCountry = await Country.findAll({where: {name: pais[i]}})
        
        // Relacionar la actividad con el país encontrado
        await newActivity.addCountries(findCountry)
    }

    // Obtener la actividad turística recién creada con los países relacionados
    const activity = await Activity.findAll({
        include: {
            model: Country,
            attributes: ["name"],
            through: {
                attributes : []
            }
        }
    })
    return activity
 }

 const getAllActivities = async () => {
    
    return await Activity.findAll({
        include: {
            model: Country,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
 }

 const deleteActivities = async(id) => await Activity.destroy({where: {id}})


 module.exports = {
    postActivity,
    getAllActivities,
    deleteActivities
 }
    