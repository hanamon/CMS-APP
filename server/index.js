require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const router = require('./router');
const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

process.on('uncaughtException', (err) => {
  console.error('예기치 못한 에러', err);
});

// 미들웨어
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
}));

// 라우팅
app.use('/', router);

// 서버 실행
let server;

if( fs.existsSync('./key.pem') && fs.existsSync('./cert.pem') ){
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('🚀 server runnning'));
}
else {
  server = app.listen(HTTPS_PORT, () => console.log(`🚀 server runnning - port ${HTTPS_PORT}`))
}

module.exports = server;
