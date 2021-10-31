"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transactionSchema = undefined;

var _yup = require("yup");

var Yup = _interopRequireWildcard(_yup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var transactionSchema = exports.transactionSchema = Yup.object({
  date: Yup.date().required().label("Date"),
  concept: Yup.string().min(3).required().max(64).label("Concept"),
  category_id: Yup.number().required().label("Category_id"),
  type: Yup.string().required().max(8).label("Type"),
  amount: Yup.number().required().label("Amount")
});