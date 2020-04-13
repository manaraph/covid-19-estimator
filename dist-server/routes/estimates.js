"use strict";

var _express = _interopRequireDefault(require("express"));

var _estimatesControllers = require("../controllers/estimatesControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('/', (req, res) => {
  const {
    body
  } = req;

  try {
    const estimates = (0, _estimatesControllers.jsonEstimates)(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post('/json', (req, res) => {
  const {
    body
  } = req;

  try {
    const estimates = (0, _estimatesControllers.jsonEstimates)(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post('/xml', (req, res) => {
  const {
    body
  } = req;

  try {
    const estimates = (0, _estimatesControllers.xmlEstimates)(body);
    console.log(estimates);
    res.status(200).type('application/xml').send(estimates);
  } catch (error) {
    res.status(500).type('application/xml').send(error);
  }
});
router.get('/logs', (req, res) => {
  res.status(200).send('Hello World!');
});
module.exports = router;