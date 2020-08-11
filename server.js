//Dependencies
let session = require("express-session"); //Imports express session package
let passport = require("./config/passport"); //Imports the passport script

const routes = require("./routes");
const express = require("express");
require("dotenv").config();

const path = require('path');
const app = express();
const mongoose = require("mongoose");
let PORT = process.env.PORT || 3004;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));//creates a login session and stores the state in a cookie
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
  app.use(express.static("client/build"));


//Connect Mongo DB
mongoose.connect("mongodb://localhost/moodJournal", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("conected to mongodb");
}).catch(error => {
  console.log("mongo error", error);
});

//Routes

app.use(require("./routes/api/journal"));
app.use(require("./routes/api/moodTracker"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build"));
});


// Syncs models and starts the server to begin listening
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
