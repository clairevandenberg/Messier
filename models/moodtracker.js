// Creates a "moodTracker" model that matches up with DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodTrackerSchema = new Schema(
    {
        didToday: {
          type: String,
          trim: true,
          required: "Enter what did you do today?"
        },
        moodRate: {
          type: Number,
          required: "Rate your mood out of 10"
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
);


const MoodTracker = mongoose.model("moodTracker", moodTrackerSchema);

module.exports = MoodTracker;