const { Router } = require("express");
const wrongsController = require("../controllers/wrongs");

const router = Router();
+

router
    .route("/")
    .post(wrongsController.create);

router
    .route("/:id")
    .get(wrongsController.show)
    .delete(wrongsController.destroy)
    .patch(wrongsController.update);

module.exports = router;
