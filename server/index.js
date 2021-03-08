const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();
const HTTP_PORT = 8080;
const HTTPS_PORT = 8081;
const port = 8080;
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist', 'index.html');
const credentials = {
  key: '',
  cert: '',
  ca: ''
};

app.use(express.static(path.join('client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR));
});

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT, () => {
  console.log(`Portfolio listening on ${HTTP_PORT} ---> mapped to 80`);
});

// httpsServer.listen(HTTPS_PORT, () => {
//   console.log(`Portfolio listening on ${HTTPS_PORT} ---> mapped to 443`);
// });
