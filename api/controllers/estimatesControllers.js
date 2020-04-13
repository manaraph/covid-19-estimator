import covid19ImpactEstimator from "../../src/estimator";
import { toXML } from 'jstoxml';

const xmlOptions = {
  header: false,
  indent: '  '
};

const jsonEstimates = (data) => {
  return covid19ImpactEstimator(data);
};

const xmlEstimates = (data) => {
  const jsonEstimates = jsonEstimates(data);
  const estimates = toXML(jsonEstimates, xmlOptions);
  console.log(estimates);
  return estimates;
};

module.exports = {
  jsonEstimates,
  xmlEstimates
}

