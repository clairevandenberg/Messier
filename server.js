//Dependencies
let session = require("express-session"); //Imports express session package
let passport = require("./config/passport"); //Imports the passport script
const routes = require("./routes");
const db = require("./models");
const express = require("express");
require("dotenv").config();
const path = require('path');
const app = express();
let mysql = require ('mysql');
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
  
//Routes
app.use("/api/journal", routes);
app.use("/api/moodTracker", routes);
app.use("/api/user", routes);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build"));
});

// Syncs models and starts the server to begin listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
})