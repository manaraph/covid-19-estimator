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

  const infectionRate = 2 ** Math.trunc(duration / 3);
  return infectionRate;
};

const computeCurrentlyInfected = ({ reportedCases }, impactFactor) => reportedCases * impactFactor;
const computeInfectionsByRequestedTime = (data, impactFactor) => {
  const currentlyInfected = computeCurrentlyInfected(data, impactFactor);
  const infectionRate = computeInfectionRate(data);
  return currentlyInfected * infectionRate;
};
const computeSevereCasesByRequestedTime = (data, impactFactor) => {
  const severeCasesByRequestedTime = 0.15 * computeInfectionsByRequestedTime(data, impactFactor);
  return severeCasesByRequestedTime;
};
const computeHospitalBedsByRequestedTime = (data, impactFactor) => {
  const { totalHospitalBeds } = data;
  const severeCaseByRequestTime = computeSevereCasesByRequestedTime(data, impactFactor);
  const availableBeds = 0.35 * totalHospitalBeds;
  const hospitalBedsByRequestedTime = Math.trunc(availableBeds - severeCaseByRequestTime);
  return hospitalBedsByRequestedTime;
};
const computeCasesForICUByRequestedTime = (data, impactFactor) => {
  const casesForICUByRequestedTime = 0.05 * computeInfectionsByRequestedTime(data, impactFactor);
  return casesForICUByRequestedTime;
}
const computeCasesForVentilatorsByRequestedTime = (data, impactFactor) =>  {
  const casesForVentilatorsByRequestedTime = 0.02 * computeInfectionsByRequestedTime(data, impactFactor);
  return casesForVentilatorsByRequestedTime;
}

module.exports = {
  computeCurrentlyInfected,
  computeInfectionsByRequestedTime,
  computeSevereCasesByRequestedTime,
  computeHospitalBedsByRequestedTime,
  computeCasesForICUByRequestedTime,
  computeCasesForVentilatorsByRequestedTime
};
