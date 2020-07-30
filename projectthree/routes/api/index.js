const router = require("express").Router();
const journalRoutes = require("./journal");

// Book routes
router.use("/books", journalRoutes);

module.exports = router;