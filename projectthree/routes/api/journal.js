// const router = require("express").Router();
const router = require("express").Router();
const journalController = require("../../controllers/journal");

// Matches with "/api/journal"
router.route("/")
  .get(journalController.findAll)
  .post(journalController.create);

// Matches with "/api/journal/:id"
router
  .route("/:id")
  .put(journalController.update)
  .delete(journalController.delete);

module.exports = router;