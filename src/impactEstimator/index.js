import {
  computeCurrentlyInfected,
  computeInfectionsByRequestedTime,
  computeSevereCasesByRequestedTime,
  computeHospitalBedsByRequestedTime,
  computeCasesForICUByRequestedTime,
  computeCasesForVentilatorsByRequestedTime
} from './util';

const estimateImpact = (data, impactFactor) => ({
  currentlyInfected: computeCurrentlyInfected(data, impactFactor),
  infectionsByRequestedTime: computeInfectionsByRequestedTime(data, impactFactor),
  severeCasesByRequestedTime: computeSevereCasesByRequestedTime(data, impactFactor),
  hospitalBedsByRequestedTime: computeHospitalBedsByRequestedTime(data, impactFactor),
  casesForICUByRequestedTime: computeCasesForICUByRequestedTime(data, impactFactor),
  casesForVentilatorsByRequestedTime: computeCasesForVentilatorsByRequestedTime(data, impactFactor)
});

export default estimateImpact;
