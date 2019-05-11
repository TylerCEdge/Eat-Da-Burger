var express = require("express");
var burger = require('../models/burgers.js');
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (burger_data) {
    console.log(burger_data);
    res.render("index", {
      burger_data
    });
  })
})

router.put("/burgers/update", function (req, res) {
  burger.update(req.body.burger_id, function (result) {
    console.log(result);
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;