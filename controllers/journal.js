
var express = require("express");
var router = express.Router();
const Journal = require ('../models/journal')

const JournalController = {};

//GET
JournalController.getJournal = async (req, res) => {
    try {
        const journal = await Journal.find();
        res.json({ journal })
    } catch (error) {
        console.log(error)
    }
}

// CREATE
JournalController.createJournal = async (req, res) => {
  const { title, content } = req.body;
  const newJournal = new Journal({
    title: title,
      content: content,
    
  });
  await newJournal.save();
  res.json({ newJournal });
}

// DELETE
JournalController.deleteJournal = async (req, res) => {
  await Journal.findByIdAndDelete(req.params.id);
  res.json('Journal Deleted');
}

//UPDATE
JournalController.updateJournal = async (req, res) => {
  await Journal.findByIdAndUpdate(req.params.id, req.body);
  console.log(req.params.id, req.body)
  res.json('Journal Updated');
}

module.exports = JournalController;

// var { journal: Journal } = require("../models/journal");

//getting  

// router.get("/api/journal", (req, res) => {
//   Journal.find({}).sort({date: -1})
//     .then(journal => {
//       res.json(journal);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// //posting
// router.post("/api/journal", function (req, res) {
//   var journal = req.body;

//   Journal.create({
//       title: journal.title,
//       content: journal.content
//   })

//   res.status(204).end();
// });

// //updating
// router.put("api/journal", function (req, res) {
//   let items = req.body;

//   Journal.update({
//       title: journal.title,
//       content: journal.content
//   }, {
//       where: {
//           id: journal,
//       }
//   })

//   res.status(204).end();
// });

// //deleting

// router.delete("/api/journal/:id", async (req, res, next) => {
//   let items = req.params.id;
//   await Items.destroy({
//       where: {
//           id: items,
//       }
//   })

//   res.status(204).end();
// })

// module.exports = router;