// const router = require("express").Router();
// const MoodTracker = require("../models/moodTracker.js");

// router.post("/api/moodTracker", ({body}, res) => {
//     MoodTracker.create(body)
//     .then(dbMoodTracker => {
//       res.json(dbMoodTracker);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.post("/api/moodTracker", ({body}, res) => {
//     MoodTracker.insertMany(body)
//     .then(dbMoodTracker => {
//       res.json(dbMoodTracker);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.get("/api/moodTracker", (req, res) => {
//     MoodTracker.find({})
//   .sort({date: -1})
//     .then(dbMoodTracker => {
//       res.json(dbMoodTracker);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// module.exports = router;