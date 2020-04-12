import covid19ImpactEstimator from "../../src/estimator";

const jsonEstimates = (data) => {
  return covid19ImpactEstimator(data);
};

module.exports = {
  jsonEstimates,
}

