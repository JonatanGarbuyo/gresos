"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = undefined;

var _yup = require("yup");

var Yup = _interopRequireWildcard(_yup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var userSchema = exports.userSchema = Yup.object({
  name: Yup.string().required().min(3).max(64).label("Name"),
  email: Yup.number().required(64).label("Email"),
  password: Yup.string().required().max(1024).label("Password")
});