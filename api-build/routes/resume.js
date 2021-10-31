"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _db = require("../database/db.js");

var _db2 = _interopRequireDefault(_db);

var _validateResourceMW = require("../middleware/validateResourceMW.js");

var _validateResourceMW2 = _interopRequireDefault(_validateResourceMW);

var _category = require("../models/category.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resumeRouter = _express2.default.Router();
var user_id = 1;

// Resume //
resumeRouter.get("/", function (req, res) {
  var today = new Date();
  var currentMonth = today.getFullYear() + "-" + (today.getMonth() + 1) + "-01";

  var query = "SELECT (total_income - total_expense) AS Balance, total_month_expense, total_month_income FROM\n  (SELECT SUM(amount) AS \"total_expense\" FROM transactions WHERE type = \"expense\" AND user_id = 1) as e,\n  (SELECT SUM(amount) AS \"total_income\" FROM transactions WHERE type = \"income\" AND user_id = 1) as i,\n  (SELECT SUM(amount) AS \"total_month_expense\" FROM transactions WHERE type = \"expense\" AND date >= ? AND user_id = 1) as emonth,\n  (SELECT SUM(amount) AS \"total_month_income\" FROM transactions WHERE type = \"income\" AND date >= ? AND user_id = 1) as imonth\n  ";

  _db2.default.query(query, [currentMonth, currentMonth]).then(function (response) {
    return res.status(200).send(response);
  }).catch(function (error) {
    return console.error(error);
  });
});

exports.default = resumeRouter;