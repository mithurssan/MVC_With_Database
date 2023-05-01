const { Router } = require("express");
const statsController = require("../controllers/stats");

const router = Router();

router
    .route("/")
    .get(statsController.index);

router
    .route("/people")
    .get(statsController.wrongsSum);

router
    .route("/:id")
    .get(statsController.show);



module.exports = router;

