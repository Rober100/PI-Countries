
const {
    getCountryByName,
    getCountryById,
    getAllCountries
} = require("../controllers/countryControllers")

// Handlers van enviar la info al servidor o cliente y manejar los errores. 

//query ..> /?name=
const getCountryByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const countryName = await getCountryByName(name)

            if (!countryName) {
                throw Error(`${name} no se encontro coicidencias`)
            } else {
            return res.status(200).json(countryName)
            }
        } else {
            const AllCountries = await getAllCountries()
            return res.status(200).json(AllCountries)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

//params --> /:id
const getCountryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {
            console.log(id);
            const countryId = await getCountryById(id)

            if (!countryId.length) {
                throw Error(`No existe el país con id: ${id}`)
            } else {
                return res.status(200).json(countryId)
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getCountryByNameHandler,
    getCountryByIdHandler
}