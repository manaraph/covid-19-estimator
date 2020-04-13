import express from "express";
import { jsonEstimates, xmlEstimates } from "../controllers/estimatesControllers";
const router = express.Router();

router.post('/on-covid-19', (req, res) => {
  const { body } = req;  
  try {
    const estimates = jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/on-covid-19/json', (req, res) => {
  const { body } = req;  
  try {
    const estimates = jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/on-covid-19/xml', (req, res) => {
  const { body } = req;  
  try {
    const estimates = xmlEstimates(body);
    console.log(estimates);
    res.status(200).type('application/xml').send(estimates);
  } catch (error) {
    res.status(500).type('application/xml').send(error);
  }
});

router.get('/on-covid-19/logs', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = router;
