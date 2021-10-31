"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// const validateResourceMW = (resourceSchema) => async (req, res, next) => {
//   const resource = req.body;
//   console.log("resource:", resource);
//   try {
//     await resourceSchema.validate(resource);

//     next();
//   } catch (e) {
//     console.error(e);
//     res.status(400).json({ error: e.errors.join(", ") });
//   }
// };

// const validateResourceMW = (resourceSchema) => (req, res, next) => {
//   const resource = req.body;
//   try {
//     resourceSchema.validate(resource);
//     next();
//   } catch (e) {
//     console.error(e);
//     res.status(400).json({ error: e.errors.join(", ") });
//   }
// };

var validateResourceMW = function validateResourceMW(resourceSchema) {
  return function (req, res, next) {
    var resource = req.body;
    console.log("resource: ", resource);
    resourceSchema.validate(resource).then(function () {
      return next();
    }).catch(function (e) {
      console.error(e);
      res.status(400).json({ error: e.errors.join(", ") });
    });
  };
};

exports.default = validateResourceMW;