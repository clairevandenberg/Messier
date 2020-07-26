// require("dotenv").config();
let express = require("express");
let app = express();

let PORT = process.env.PORT || 8080;

let db = require("./models");

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// =============================================================
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Add routes, both API and view
// =============================================================
// app.use (require("./controllers/moodTracker.js"));
// require('./controllers/journal')(app)


// Syncs models and starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});