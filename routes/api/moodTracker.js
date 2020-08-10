const express = require("express");
const router = express.Router();

const moodTrackerController = require("../../controllers/moodTracker");

// Matches with "/api/moodTracker"
router.route("/api/moodTracker")
  .get(moodTrackerController.findAll)
  .post(moodTrackerController.create);

// Matches with "/api/moodTracker/:id"
router
  .route("/:id")
  .get(moodTrackerController.findAll)
  .put(moodTrackerController.update)
  .delete(moodTrackerController.delete)
  // .find(moodTrackerController.sort);

module.exports = router;