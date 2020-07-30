const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/middleware/isAuthenticated');


//Required dependencies.
let db = require("../models")
let myData = {}
let currentOrder = 0;
console.log(db.users)
var { saleItems: SaleItems } = require("../models/index");
var { items: Items } = require("../models/journal");
