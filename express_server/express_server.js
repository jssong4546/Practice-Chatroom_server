/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 3001 : 3002;

const messages = {};
messages.results = [];

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/', (req, res) => {
  res.status(200).send(JSON.stringify(messages.results));
});
app.post('/', (req, res) => {
  messages.results.push(req.body);
  res.status(201).send(JSON.stringify(messages.results));
  console.log(req.body);
});
