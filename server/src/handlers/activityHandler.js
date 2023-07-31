
const {
    postActivity,
    getAllActivities,
    deleteActivities
} = require("../controllers/activityControllers")

// Handlers van enviar la info al servidor o cliente y manejar los errores.

const postActivityHandler = async (req, res) => {
    const { name, difficulty, duration, season, pais } = req.body;

    try {
        if (!name || !difficulty || !duration || !season || !pais) {
            throw Error("Falta información para crear la actividad")
        } else {
            const newActivity = await postActivity(name, difficulty, duration, season, pais)
            return res.status(200).json(newActivity)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message})
    }   
}


const getAllActivitiesHandler = async (req,res) => {
    try {
        const allActivities = await getAllActivities()
        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
const deleteHandler = async (req, res)=>{
    const { id } = req.params;
    
    try {
        if(!id){
            throw Error(`${id} no existe para eliminar`)
        }else{
            const deleteActivity = await deleteActivities(id)
            res.status(200).json(deleteActivity)
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports = { postActivityHandler, getAllActivitiesHandler, deleteHandler }