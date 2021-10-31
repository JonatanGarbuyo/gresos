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

var _transaction = require("../models/transaction.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transactionsRouter = _express2.default.Router();
var user_id = 1;

// Transactions routes //
// Create transaction
transactionsRouter.post("/", (0, _validateResourceMW2.default)(_transaction.transactionSchema), function (req, res) {
  var _req$body = req.body,
      date = _req$body.date,
      concept = _req$body.concept,
      category_id = _req$body.category_id,
      type = _req$body.type,
      amount = _req$body.amount;

  var newTransaction = {
    date: date,
    concept: concept,
    category_id: category_id,
    type: type,
    amount: amount,
    user_id: user_id
  };
  var query = "INSERT INTO transactions set ?";
  _db2.default.query(query, [newTransaction]).then(function (response) {
    newTransaction.id = response.insertId;
    res.status(201).send(transactionResponse);
  }).catch(function (err) {
    return console.error("ERROR: ", err);
  });
});

// Read all transactions
transactionsRouter.get("/", function (req, res) {
  var limit = parseInt(req.query.limit) || 100000000;
  var query = "Select id, concept, type, amount, category_id, DATE_FORMAT(date, '%Y/%m/%d') as date \n  FROM transactions WHERE user_id = ? ORDER BY date DESC LIMIT ? ";

  _db2.default.query(query, [user_id, limit]).then(function (transactions) {
    return res.status(200).send(transactions);
  }).catch(function (error) {
    return console.error(error);
  });
});
// Read all ${type} transactions
transactionsRouter.get("/:type", function (req, res) {
  var type = req.params.type;
  var query = "SELECT id, concept, type, amount, category_id, DATE_FORMAT(date, '%Y/%m/%d') as date FROM transactions WHERE user_id = ? and type = ? ORDER BY date DESC";
  _db2.default.query(query, [user_id, type]).then(function (transactions) {
    return res.status(200).send(transactions);
  }).catch(function (error) {
    return console.error(error);
  });
});
// Read all transactions by category
transactionsRouter.get("/category/:id", function (req, res) {
  var id = req.params.id;

  var query = "SELECT id, concept, type, amount, category_id, DATE_FORMAT(date, '%Y/%m/%d') as date \n  FROM transactions WHERE user_id = ? and category_id = ? ORDER BY date DESC ";

  _db2.default.query(query, [user_id, id]).then(function (transactions) {
    return res.status(200).send(transactions);
  }).catch(function (error) {
    return console.error(error);
  });
});

// Update transaction
transactionsRouter.put("/:id", function (req, res) {
  var id = req.params.id;
  var _req$body2 = req.body,
      concept = _req$body2.concept,
      amount = _req$body2.amount,
      date = _req$body2.date,
      category_id = _req$body2.category_id;

  var transaction = { concept: concept, amount: amount, date: date, category_id: category_id };
  var query = "UPDATE transactions set ? WHERE id = ? and user_id = ?";
  _db2.default.query(query, [transaction, id, user_id]).then(res.status(200).send()).catch(function (error) {
    return console.error(error);
  });
});

// Delete transaction
transactionsRouter.delete("/:id", function (req, res) {
  var id = req.params.id;

  var query = "DELETE FROM transactions WHERE id = ? and user_id = ?";
  _db2.default.query(query, [id, user_id]).then(res.status(200).send()).catch(function (error) {
    return console.error(error);
  });
});

exports.default = transactionsRouter;