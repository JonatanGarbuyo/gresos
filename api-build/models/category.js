"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categorySchema = undefined;

var _yup = require("yup");

var Yup = _interopRequireWildcard(_yup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var categorySchema = exports.categorySchema = Yup.object({
  name: Yup.string().required("Name not provided").min(3).max(24).label("Name")
});