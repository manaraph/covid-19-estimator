import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import estimatesRouter from './routes/estimates';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const app = express();
const port = process.env.PORT || 3001;
// app.use(express.json());

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONTEND || 'http://localhost:5000'}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

if (!fs.existsSync(path.join(__dirname, './db/access.log'))) {
  fs.mkdirSync('./db', { recursive: true });
}
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../db/access.log'), { flags: 'a+' }
);

app.use(morgan(':date\t\t:method\t\t:url\t\t:status\t\t:response-time ms', { stream: accessLogStream }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.type('html').sendFile(path.join(`${__dirname}/public/index.html`));
});
// Setup estimates Router
app.use('/api/v1/on-covid-19', estimatesRouter);

// Handle undefined routes
app.use('*', (_req, res) => {
  res.json({
    success: false,
    message: 'Resource not available'
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API running on port ${port}`);
});
