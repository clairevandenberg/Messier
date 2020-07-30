const express = require('express');
const db = require("../models");
const router = express.Router();

//importing item model 
var {journal: Journal} = require("../models/index");

// GET route 
router.get("/api/journal", function(req, res) {
    db.journal.findAll({}).then ( function (result) {
        return res.json(result)
      });
       });


// POST route saves new journals created by using req.body.
router.post(`/api/journal`, function(req, res) {
    console.log(req.body)

    Journal.create({title:req.body.journalContent}).then (function (results) {
    });
    res.status(204).end();
  });


// DELETE route for deleting Burgers. We can access the ID of the Burgers to delete in
router.delete("/api/journal/:id", function(req, res) {
  Journal.destroy({ 
      where: { 
        id: req.params.id
  }
}).then(function(results){
  res.redirect('/');
  });
  });


//PUT updating journals
router.put("/api/journal", function(req, res) {
    Journal.update(results,{ 
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    })

    .then(function(results){
      res.json(results);
      console.log(results);
    });
    res.status(204).end();
  });

    
  

// exporting routes to server.js
module.exports = router;
