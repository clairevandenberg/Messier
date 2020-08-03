// const router = require("express").Router();
const router = require("express").Router();
const moodTrackerController = require("../../controllers/moodTracker");

// Matches with "/api/moodTracker"
router.route("/")
  .get(moodTrackerController.findAll)
  .post(moodTrackerController.create);

// Matches with "/api/moodTracker/:id"
router
  .route("/:id")
  .put(moodTrackerController.update)
  .delete(moodTrackerController.delete)
  // .find(moodTrackerController.sort);

module.exports = router;