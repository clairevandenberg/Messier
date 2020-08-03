const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.moodTracker
      .findAll(req.query)
      .sort({ date: -1 })
      .then(dbmoodTracker => res.json(dbmoodTracker))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.moodTracker
      .findById(req.params.id)
      .then(dbmoodTracker => res.json(dbmoodTracker))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.moodTracker
      .create(req.body)
      .then(dbmoodTracker => res.json(dbmoodTracker))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.moodTracker
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbmoodTracker => res.json(dbmoodTracker))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.moodTracker
      .findById({ _id: req.params.id })
      .then(dbmoodTracker => dbmoodTracker.delete())
      .then(dbmoodTracker => res.json(dbmoodTracker))
      .catch(err => res.status(422).json(err));
  }
};

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