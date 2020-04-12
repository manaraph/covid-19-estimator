import express from "express";
import { jsonEstimates } from "../controllers/estimatesControllers";
const router = express.Router();

router.post('/on-covid-19', (req, res) => {
  console.log(req);
  
  // const { body } = req;
  // console.log(body);
  
  // try {
  //   const estimates = jsonEstimates(body);
  //   console.log(estimates);
  // } catch (error) {
  //   console.log(error);
    
  // }
  res.status(200).send('Hello World!');

});

router.get('/on-covid-19/logs', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = router;
