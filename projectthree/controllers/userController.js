const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('../config/passport');
let db = require("../models");

router.post('/api/users', passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});


router.post('/api/signup', function (req, res) {
  console.log("Adding New User");
  db.users.create({
    firstName: req.body.fname,
    lastName: req.body.lname,
    dob: req.body.dob,
    email: req.body.email,
    password: req.body.password
  }).then(async function () {
    let userData = await db.users.findOne({
      where: { email: req.body.email }
    });
    res.redirect(307, "/api/users");
    }).catch(console.log(err));
    
  }).catch(function (err) {
   // res.status(401).json(err);
  });
  
module.exports = router;