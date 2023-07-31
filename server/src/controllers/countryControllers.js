const db = require('../db');
const { Country, Activity } = require('../db')
const { Op } = require("sequelize");

// Se encargan de hacer toda la logica y comunicarse con las fuentes externas ya sea API O DB.

const getAllCountries = async () =>{
    const dbCountry =  await Country.findAll({
     include: {
       model: Activity,
       attributes: ["name","difficulty","duration","season"],
       through: {
         attributes: []
       }
     }
  });
    return dbCountry;
 } 

const getCountryById = async (id) => {

    const countryFilter = await Country.findAll({
        where: { id },
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: []
            }
        }
    })
    return countryFilter
}

const getCountryByName = async (name) => {

    const coutryFiltered = await Country.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` }
        }
    })
    return coutryFiltered
}

module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByName
}