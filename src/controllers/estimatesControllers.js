import { toXML } from 'jstoxml';
import covid19ImpactEstimator from '../estimator';

const xmlOptions = {
  header: false,
  indent: '  '
};

const jsonEstimates = (data) => covid19ImpactEstimator(data);

const xmlEstimates = (data) => {
  const jsEstimate = jsonEstimates(data);
  const estimates = toXML(jsEstimate, xmlOptions);
  return estimates;
};

module.exports = {
  jsonEstimates,
  xmlEstimates
};
