const express = require('express');
const cors = require('cors');
const app = express();
const controllers = require('./controllers');

// 미들웨어
app.use(express.json());
app.use(cors());

// 라우팅
app.use('/admin', controllers.admin);
app.use('/users', controllers.users);

// 서버 실행
module.exports = app.listen(4000, () => {
  console.log('🚀 Server is starting on 4000!');
});
