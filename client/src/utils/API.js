import axios from "axios";

export default {
  // Gets all journals
  getJournals: function() {
    return axios.get("/api/journals");
  },
  // Gets the book with the given id
  getJournal: function(id) {
    return axios.get("/api/journals/" + id);
  },
  // Deletes the book with the given id
  deleteJournal: function(id) {
    return axios.delete("/api/journals/" + id);
  },
  // Saves a book to the database
  saveJournal: function(journalData) {
    return axios.post("/api/journals", journalData);
  },

  // Gets all moodTrackers
  getMoodTrackers: function() {
    return axios.get("/api/moodTracker");
  },
  // Gets the book with the given id
  getMoodTracker: function(id) {
    return axios.get("/api/moodTracker/" + id);
  },
  // Deletes the book with the given id
  deleteMoodTracker: function(id) {
    return axios.delete("/api/moodTracker/" + id);
  },
  // Saves a book to the database
  saveMoodTracker: function(moodTrackerData) {
    return axios.post("/api/moodTracker", moodTrackerData);
  }
};