var express = require("express");
var router = express.Router();
// const MoodTracker = require ('../models/moodTracker')
const db = require ('../models')


const MoodTrackerController = {};

//GET
MoodTrackerController.getMoodTracker = async (req, res) => {
    try {
        const moodTracker = await db.MoodTracker.find();
        res.json({ moodTracker })
    } catch (error) {
        console.log(error)
    }
}


// CREATE
MoodTrackerController.createMoodTracker = async (req, res) => {
  const { moodRate, didToday } = req.body;
  const newMoodTracker = new db.MoodTracker({
    moodRate: moodRate,
      didToday: didToday,
    
  });
  await newMoodTracker.save();
  res.json({ newMoodTracker });
}

// DELETE
MoodTrackerController.deleteMoodTracker = async (req, res) => {
  await db.MoodTracker.findByIdAndDelete(req.params.id);
  res.json('MoodTracker Deleted');
}

//UPDATE
MoodTrackerController.updateMoodTracker = async (req, res) => {
  await db.MoodTracker.findByIdAndUpdate(req.params.id, req.body);
  console.log(req.params.id, req.body)
  res.json('MoodTracker Updated');
}

module.exports = MoodTrackerController;
