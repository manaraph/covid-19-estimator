import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.resolve(__dirname, '../.env')});
import express from "express";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONTENDURL || 'http://localhost:5000'}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});