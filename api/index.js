import dotenv from "dotenv";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import estimatesRouter from "./routes/estimates";
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const app = express();
const port = process.env.PORT || 3001;
// app.use(express.json());

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONTEND || 'http://localhost:5000'}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

//Setup estimates Router
app.use('/api/v1', estimatesRouter );

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});