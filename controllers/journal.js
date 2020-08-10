const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.journal
      .findAll(req.query)
      .sort({ date: -1 })
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.journal
      .findById(req.params.id)
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.journal
      .create(req.body)
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.journal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    db.journal
      .findById({ _id: req.params.id })
      .then(dbJournal => dbJournal.delete())
      .then(dbJournal => res.json(dbJournal))
      .catch(err => res.status(422).json(err));
  }
};
