const { Router } = require('express');
const router = Router();


const { getJournal, createJournal, updateJournal, deleteJournal } = require("../../controllers/journal");

// Matches with "/api/journal"
router.route("/api/journal")
  .get(getJournal)
  .post(createJournal);

// Matches with "/api/journal/:id"
router
  .route('/api/journal/:id')
  .put(updateJournal)
  .delete(deleteJournal);

module.exports = router;

