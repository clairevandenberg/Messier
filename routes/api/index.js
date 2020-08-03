const router = require("express").Router();
const journalRoutes = require("./journal");
const moodTrackerRoutes = require("./moodTracker");
// const users = require ("./user")
// Journal routes
router.use("/journal", journalRoutes);

// MoodTracker routes
router.use("/moodTracker", moodTrackerRoutes);

// Users routes
// router.use("/users", users);

module.exports = router;