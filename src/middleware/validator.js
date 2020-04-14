import Validator from 'validatorjs';

const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

const estimator = (req, res, next) => {
  const validationRule = {
    region: {
      name: 'required|string',
      avgAge: 'required|numeric',
      avgDailyIncomeInUSD: 'required|numeric',
      avgDailyIncomePopulation: 'required|numeric'
    },
    periodType: 'required|string',
    timeToElapse: 'required|numeric',
    reportedCases: 'required|numeric',
    population: 'required|numeric',
    totalHospitalBeds: 'required|numeric'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: err
        });
    } else {
      next();
    }
  });
};

module.exports = {
  estimator
};
