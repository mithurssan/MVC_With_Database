const { Router } = require("express");
const peopleController = require("../controllers/people");

const router = Router();

router
    .route("/")
    .get(peopleController.index)
    .post(peopleController.create);

router
    .route("/:id")
    .get(peopleController.show);

module.exports = router;

