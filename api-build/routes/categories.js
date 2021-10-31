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

var categoriesRouter = _express2.default.Router();
var user_id = 1;

// Catergories routes //
// Create category
categoriesRouter.post("/", (0, _validateResourceMW2.default)(_category.categorySchema), function (req, res) {
  var name = req.body.name;

  var newCategory = { name: name, user_id: user_id }; // change to real userId
  var query = "INSERT INTO categories set ?";
  _db2.default.query(query, [newCategory]).then(function (response) {
    res.status(201).send({ name: name, id: response.insertId });
  }).catch(function (err) {
    if (err.code && "ER_DUP_ENTRY" === err.code) res.status(409).send({ error: "Category already exist" });
    console.error("ERROR: ", err);
  });
});

// Read all categories
categoriesRouter.get("/", function (req, res) {
  var query = "Select id, name FROM categories WHERE user_id = ? ORDER BY name";
  _db2.default.query(query, [user_id]).then(function (categories) {
    return res.status(200).send(categories);
  }).catch(function (error) {
    return console.error(error);
  });
});

// Update category
categoriesRouter.put("/:id", (0, _validateResourceMW2.default)(_category.categorySchema), function (req, res) {
  // TODO validate id
  var name = req.body.name;
  var id = req.params.id;

  var query = "UPDATE categories SET name = ? WHERE id = ? AND user_id = ? ;";
  _db2.default.query(query, [name, id, user_id]).then(function (response) {
    return res.status(200).send(response);
  }).catch(function (error) {
    return console.error(error);
  }); //TODO manejar error
});

// Delete category
categoriesRouter.delete("/:id", function (req, res) {
  // TODO validate id ?
  var id = req.params.id;

  var query = "DELETE FROM categories WHERE id = ? and user_id = ?";
  _db2.default.query(query, [id, user_id]).then(res.status(200).send()).catch(function (error) {
    console.error(error);
  });
});

exports.default = categoriesRouter;