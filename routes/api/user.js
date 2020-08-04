// const router = require("express").Router();
const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
.get(userController.findAll)
.post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(userController.update)

module.exports = router;
