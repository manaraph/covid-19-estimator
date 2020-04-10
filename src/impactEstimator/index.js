import {
  computeCurrentlyInfected
} from './util';

const estimateImpact = (data, impactFactor) => ({
  currentlyInfected: computeCurrentlyInfected(data, impactFactor),
});

export default estimateImpact;