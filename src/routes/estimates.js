import path from 'path';
import sf from 'slice-file';
import express from 'express';
import estimatesControllers from '../controllers/estimatesControllers';

const router = express.Router();

router.post('/', (req, res) => {
  const { body } = req;
  try {
    const estimates = estimatesControllers.jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/json', (req, res) => {
  const { body } = req;
  try {
    const estimates = estimatesControllers.jsonEstimates(body);
    res.status(200).send(estimates);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/xml', (req, res) => {
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
