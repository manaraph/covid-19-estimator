import path from 'path';
import sf from 'slice-file';
import fs from 'fs';
import express from 'express';
import estimatesControllers from '../controllers/estimatesControllers';
import validation from '../middleware/validator';

const router = express.Router();

router.post('/', validation.estimator, (req, res) => {
  const { body } = req;
  try {
    const estimates = estimatesControllers.jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/json', validation.estimator, (req, res) => {
  const { body } = req;
  try {
    const estimates = estimatesControllers.jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/xml', validation.estimator, (req, res) => {
  const { body } = req;
  try {
    const estimates = estimatesControllers.xmlEstimates(body);
    res.status(200).type('application/xml').send(estimates);
  } catch (error) {
    res.status(500).type('application/xml').send(error);
  }
});

router.get('/logs', (req, res) => {
  const resData = [];
  const filename = sf(path.join(__dirname, '../../db/access.log'));

  filename.sliceReverse().on('data', (data) => {
    resData.push(data.toString());
  }).on('end', () => {
    res.type('text/plain').send(resData.join(''));
  });
});

module.exports = router;
