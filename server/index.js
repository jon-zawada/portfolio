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
const privateKey = fs.readFileSync('/etc/letsencrypt/live/jonzawada.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/jonzawada.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/jonzawada.com/chain.pem', 'utf8');
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

app.use(express.static(path.join('client', 'dist'), { dotfiles: 'allow' }));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR));
});

app.use((req, res, next) => {
  if (req.secure) {
    console.log('here');
    next();
  } else {
    console.log(req.headers.host, req.url);
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(HTTP_PORT, () => {
  console.log(`Portfolio listening on ${HTTP_PORT} ---> mapped to 80`);
});

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`Portfolio listening on ${HTTPS_PORT} ---> mapped to 443`);
});

