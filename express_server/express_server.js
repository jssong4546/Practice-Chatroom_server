/* eslint-disable no-console */
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3002;
const messages = {};
messages.results = [];

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());

router.get('/classes/messages', (req, res) => {
  res.status(200).send(JSON.stringify(messages));
});
router.post('/classes/messages', (req, res) => {
  messages.results.push(req.body);
  res.status(200).send(JSON.stringify(messages.results));
  console.log(req.body);
});
