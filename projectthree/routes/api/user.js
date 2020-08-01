// const router = require("express").Router();
const router = require("express").Router();
const users = require("../../controllers/users");

// Matches with "/api/users"
router.route("/")
  .get(users.findAll)
  .post(users.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(users.update)
  .delete(users.delete);

module.exports = router;

const db = require("../models");


// module.exports = {
//   findAll: function(req, res) {
//     db.Users
//       .findAll(req.query)
//       //.sort({ date: -1 })
//       .then(dbUsers => res.json(dbUsers))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Users
//       .findById(req.params.id)
//       .then(dbUsers => res.json(dbUsers))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Users
//       .create(req.body)
//       .then(dbUsers => res.json(dbUsers))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Users
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbUsers => res.json(dbUsers))
//       .catch(err => res.status(422).json(err));
//   },
//   delete: function(req, res) {
//     db.Users
//       .findById({ _id: req.params.id })
//       .then(dbUsers => dbUsers.delete())
//       .then(dbUsers => res.json(dbUsers))
//       .catch(err => res.status(422).json(err));
//   }
// };