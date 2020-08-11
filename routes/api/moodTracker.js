const { Router } = require('express');
const router = Router();


const { getMoodTracker, createMoodTracker, updateMoodTracker, deleteMoodTracker } = require("../../controllers/moodTracker");

// Matches with "/api/journal"
router.route("/api/moodTracker")
  .get(getMoodTracker)
  .post(createMoodTracker);

// Matches with "/api/journal/:id"
router
  .route('/api/journal/:id')
  .put(updateMoodTracker)
  .delete(deleteMoodTracker);

module.exports = router;
