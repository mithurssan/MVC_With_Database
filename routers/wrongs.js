const {Router} = require("express");
const wrongsController = require("../controllers/wrongs");

const router = Router();

router.get("/:id", wrongsController.show);

module.exports = router;
