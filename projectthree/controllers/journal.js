const router = require("express").Router();
let express = require("express");
let app = express();


// POST route 
module.exports = function(app) {
    app.post(`/api/journal`, function(req, res) {
    let userJournal = fs.readFileSync(path.join(__dirname, "/db/db.json"));
    userJournal = JSON.parse(userJournal);
    
    userJournal.push(req.body);
    userJournal = JSON.stringify(userJournal);
    console.log(userJournal);
    
    fs.writeFile(path.join(__dirname, "./db/db.json"), userJournal, `utf8`, function (err) {
        if (err){
         console.log( "You have an Error");
        } else { 
         console.log("Your note has been saved");
        return res.json(journal);
            };
        });
    });
    
    
    // GET route 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/index.html"));
    });
    app.get("/journal", function(req, res) {
        res.sendFile(path.join(__dirname, "/public/journal.html"));
    });
    app.get("/api/journal", function(req, res) {
        res.sendFile(path.join(__dirname, "/db/db.json"));
    });
};

// exporting routes to server.js
module.exports = router;
