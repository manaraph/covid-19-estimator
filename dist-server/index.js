"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _estimates = _interopRequireDefault(require("./routes/estimates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: _path.default.resolve(__dirname, '../.env')
});

const app = (0, _express.default)();
const port = process.env.PORT || 3001; // app.use(express.json());

app.use(_bodyParser.default.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${process.env.FRONTEND || 'http://localhost:5000'}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
}); //Setup estimates Router

app.use('/api/v1/on-covid-19', _estimates.default); // Handle undefined routes

app.use('*', (_req, res) => {
  res.json({
    success: false,
    message: 'Resource not available'
  });
});
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});