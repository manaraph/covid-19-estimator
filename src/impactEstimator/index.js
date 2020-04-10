import {
  computeCurrentlyInfected,
  computeInfectionsByRequestedTime
} from './util';

const estimateImpact = (data, impactFactor) => ({
  currentlyInfected: computeCurrentlyInfected(data, impactFactor),
  infectionsByRequestedTime: computeInfectionsByRequestedTime(data , impactFactor),
});

export default estimateImpact;