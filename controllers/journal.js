const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Journal
      .findAll(req.query)
      .sort({ date: -1 })
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Journal
      .findById(req.params.id)
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Journal
      .create(req.body)
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Journal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.Journal
      .findById({ _id: req.params.id })
      .then(dbJournal => dbJournal.delete())
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  }
};
