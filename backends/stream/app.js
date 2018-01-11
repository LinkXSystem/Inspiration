const express = require('express');
const cors = require('cors');
const fs = require('fs');
// const log4js = require('log4js');
const utils = require('./src/components/utils/error');

// 路由文件
const music = require('./routes/music');
const video = require('./routes/video');

// 日志处理
const log = global.log4js.getLogger('error');

const app = express();

//消除架构
app.disable('x-powered-by');

app.use(cors());
app.use(
  global.log4js.connectLogger(global.log4js.getLogger('http'), {
    level: 'auto'
  })
);

app.use('/music', music);
app.use('/video', video);

app.use((req, res, next) => {
  next(utils.error(404, 'the url or method is unknown.'));
});

app.use((err, req, res, next) => {
  log.error(`status: ${err.status}, error's message: ${err.message} `);
  res.status(err.status || 500);
  res.set({
    'Content-Type': 'application/json'
  });
  return res.json({ statu: 'error', message: err.message });
});

module.exports = app;
