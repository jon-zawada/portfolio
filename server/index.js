const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist', 'index.html');

app.use(express.static(path.join('client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR));
});

app.listen(port, () => {
  console.log(`Portfolio listening on ${port}`);
});
