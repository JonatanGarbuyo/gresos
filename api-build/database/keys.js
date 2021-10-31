"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var database = {
  host: "" + process.env.MYSQL_HOST,
  port: "" + process.env.MYSQL_PORT,
  user: "" + process.env.MYSQL_USER,
  password: "" + process.env.MYSQL_PASSWORD,
  database: "" + process.env.MYSQL_DB,
  connectionLimit: 10,
  ssl: true
};

exports.default = database;