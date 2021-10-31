"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var _util = require("util");

var _keys = require("./keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = _mysql2.default.createPool(_keys2.default);

pool.getConnection(function (error, connection) {
  if (error) {
    console.error("ERROR: ", error);
  }

  if (connection) connection.release();
  console.log("DB is connected");
  return;
});

// convert callbacks to promises
pool.query = (0, _util.promisify)(pool.query);

exports.default = pool;