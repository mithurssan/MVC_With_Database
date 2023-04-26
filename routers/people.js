const { Router } = require("express");
const peopleController = require("../controllers/people");

const router = Router();

router.get("/", peopleController.index);
router.get("/:id", peopleController.show);
router.post("/", peopleController.create);

module.exports = router;

