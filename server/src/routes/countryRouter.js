const { Router } = require("express")
const {
    getCountryByNameHandler,
    getCountryByIdHandler
} = require("../handlers/countryHandler")

const countryRouter = Router()

// Rutas para Country.

countryRouter
.get("/", getCountryByNameHandler)
.get("/:id", getCountryByIdHandler)

module.exports = countryRouter