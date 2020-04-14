// import path from 'path';
// import sf from 'slice-file';
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

// const getAccessLogs = (req, res) => {
//   const resData = [];
//   const filename = sf(path.join(__dirname, '../db/access.log'));

//   filename.sliceReverse().on('data', (data) => {
//     resData.push(data.toString()); // convert from buffer to human readable
//   }).on('end', () => {
//     res.type('text/plain').send(resData.join(''));
//   });
// }

module.exports = {
  jsonEstimates,
  xmlEstimates,
  // getAccessLogs
};
