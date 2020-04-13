"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("./util");

const estimateImpact = (data, impactFactor) => ({
  currentlyInfected: (0, _util.computeCurrentlyInfected)(data, impactFactor),
  infectionsByRequestedTime: (0, _util.computeInfectionsByRequestedTime)(data, impactFactor),
  severeCasesByRequestedTime: (0, _util.computeSevereCasesByRequestedTime)(data, impactFactor),
  hospitalBedsByRequestedTime: (0, _util.computeHospitalBedsByRequestedTime)(data, impactFactor),
  casesForICUByRequestedTime: (0, _util.computeCasesForICUByRequestedTime)(data, impactFactor),
  casesForVentilatorsByRequestedTime: (0, _util.computeCasesForVentilatorsByRequestedTime)(data, impactFactor),
  dollarsInFlight: (0, _util.computeDollarsInFlight)(data, impactFactor)
});

var _default = estimateImpact;
exports.default = _default;