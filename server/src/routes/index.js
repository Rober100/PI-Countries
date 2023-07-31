const { Router } = require("express"); // Es tambien un middleware
const activityRouter = require("../routes/activityRouter")
const countryRouter = require("../routes/countryRouter")

const router = Router();

router.use("/countries", countryRouter);
router.use("/activities", activityRouter)

module.exports = router;
