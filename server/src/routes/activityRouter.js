const { Router } = require("express")

const {
    postActivityHandler,
    getAllActivitiesHandler,
    deleteHandler
} = require("../handlers/activityHandler")

const activityRouter = Router();

activityRouter
    .post("/", postActivityHandler)
    .get("/", getAllActivitiesHandler)
    .delete("/:id", deleteHandler)

module.exports = activityRouter
