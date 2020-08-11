// Creates a "Journal" model that matches up with DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema(
    {
        title: {
          type: String,
          trim: true,
          required: "Enter Your Journal Title"
        },
        content: {
          type: String,
          required: "Journal your thoughts here"
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
);


const Journal = mongoose.model(`Journal`, journalSchema);

module.exports = Journal;