"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _impactEstimator = _interopRequireDefault(require("./impactEstimator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const covid19ImpactEstimator = data => ({
  data,
  impact: (0, _impactEstimator.default)(data, 10),
  severeImpact: (0, _impactEstimator.default)(data, 50)
});

var _default = covid19ImpactEstimator;
exports.default = _default;