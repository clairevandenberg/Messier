// const router = require("express").Router();
const router = require("express").Router();
const journal = require("../../controllers/journal");

// Matches with "/api/journal"
router.route("/")
  .get(journal.findAll)
  .post(journal.create);

// Matches with "/api/journal/:id"
router
  .route("/:id")
  .put(journal.update)
  .delete(journal.delete);

module.exports = router;