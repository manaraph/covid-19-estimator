import estimateImpact from './impactEstimator';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: estimateImpact(data, 10),
  severeImpact: estimateImpact(data, 50)
});

export default covid19ImpactEstimator;
