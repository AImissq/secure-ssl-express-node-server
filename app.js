const fs = require("fs");
const http = require("http");
const https = require("https");
const privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');


const credentials = {
  key: privateKey,
  cert: certificate
};
const express = require("express");
const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
app.use(express.static('public'));
httpServer.listen(8080);
console.log("Node.js Express HTTP Server Listening on http//:localhost:8080");
httpsServer.listen(8443);
console.log("Node.js Express HTTPS Server Listening on https//:localhost:8443");

