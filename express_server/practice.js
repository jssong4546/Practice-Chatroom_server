const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 3001 : 3002;

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
app.get('/', (req, res) => {
  res.send('서버가 작동됩니다');
});
