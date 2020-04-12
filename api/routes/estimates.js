import express from "express";
const router = express.Router();

router.get('/on-covid-19', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = router;
