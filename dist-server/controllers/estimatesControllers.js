"use strict";

var _estimator = _interopRequireDefault(require("../estimator"));

var _jstoxml = require("jstoxml");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const xmlOptions = {
  header: false,
  indent: '  '
};

const jsonEstimates = data => {
  return (0, _estimator.default)(data);
};

const xmlEstimates = data => {
  const jsonEstimates = jsonEstimates(data);
  const estimates = (0, _jstoxml.toXML)(jsonEstimates, xmlOptions);
  console.log(estimates);
  return estimates;
};

module.exports = {
  jsonEstimates,
  xmlEstimates
};