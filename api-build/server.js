"use strict";

require("dotenv/config");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _categories = require("./routes/categories.js");

var _categories2 = _interopRequireDefault(_categories);

var _resume = require("./routes/resume.js");

var _resume2 = _interopRequireDefault(_resume);

var _transactions = require("./routes/transactions.js");

var _transactions2 = _interopRequireDefault(_transactions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_express2.default.json());

// Routes
app.use("/api/resume", _resume2.default);
app.use("/api/categories", _categories2.default);
app.use("/api/transactions", _transactions2.default);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use("/", _express2.default.static("../build"));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile("../build/index.html");
  });
}

// Route not found
app.use(function (req, res) {
  res.status(404).json({
    error: "Not found"
  }).end();
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});