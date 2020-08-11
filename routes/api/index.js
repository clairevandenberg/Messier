const router = require("express").Router();
const journalRoutes = require("../../models/journal.js");
const moodTrackerRoutes = require("../../models/moodTracker.js");
const express = require("express");

// const users = require ("./user")

// Journal routes
router.use("/api/journal",  (req, res) => {
  
});

// MoodTracker routes
router.use("/moodTracker", (req, res) => {
  
});

module.exports = router;