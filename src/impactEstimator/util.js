const computeInfectionRate = ({ periodType, timeToElapse }) => {
  let duration = 0;

  switch (periodType) {
    case 'weeks' || 'week':
      duration = timeToElapse * 7;
      break;
    case 'months' || 'month':
      duration = timeToElapse * 30;
      break;
    case 'years' || 'year':
      duration = timeToElapse * 360;
      break;
    default:
      duration = timeToElapse;
  }

  const infectionRate = 2 * Math.trunc(duration / 3);
  return infectionRate;
};

const computeCurrentlyInfected = ({ reportedCases }, impactFactor) => reportedCases * impactFactor;
const computeInfectionsByRequestedTime = (data, impactFactor) => {
  const currentlyInfected = computeCurrentlyInfected(data, impactFactor);
  const infectionRate = computeInfectionRate(data);
  return currentlyInfected * infectionRate;
};

module.exports = {
  computeCurrentlyInfected,
  computeInfectionsByRequestedTime
};
