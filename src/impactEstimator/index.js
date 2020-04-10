import {
  computeCurrentlyInfected,
  computeInfectionsByRequestedTime,
  computeSevereCasesByRequestedTime,
  computeHospitalBedsByRequestedTime
} from './util';

const estimateImpact = (data, impactFactor) => ({
  currentlyInfected: computeCurrentlyInfected(data, impactFactor),
  infectionsByRequestedTime: computeInfectionsByRequestedTime(data, impactFactor),
  severeCasesByRequestedTime: computeSevereCasesByRequestedTime(data, impactFactor),
  hospitalBedsByRequestedTime: computeHospitalBedsByRequestedTime(data, impactFactor)
});

export default estimateImpact;
