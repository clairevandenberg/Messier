// const router = require("express").Router();
const router = require("express").Router();
const moodTracker = require("../../controllers/moodTracker");

// Matches with "/api/moodTracker"
router.route("/")
  .get(moodTracker.findAll)
  .post(moodTracker.create);

// Matches with "/api/moodTracker/:id"
router
  .route("/:id")
  .put(moodTracker.update)
  .delete(moodTracker.delete);

module.exports = router;