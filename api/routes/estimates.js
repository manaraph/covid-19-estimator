import express from "express";
import { jsonEstimates } from "../controllers/estimatesControllers";
const router = express.Router();

router.post('/on-covid-19', (req, res) => {
  const { body } = req;  
  try {
    const estimates = jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    // console.log(error);
    res.status(500).send(error);
  }
});

router.get('/on-covid-19/logs', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = router;
