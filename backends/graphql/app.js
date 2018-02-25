const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { graphiqlExpress } = require('apollo-server-express');

const utils = require('./components/utils/error');

const auth = require('./routes/authorize');
const home = require('./routes/home');
const user = require('./routes/user');

const interceptor = require('./components/middleware/interceptor');

const app = new express();

// 日志处理
const log = global.log4js.getLogger('error');

app.disable('x-powered-by');

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(
  global.log4js.connectLogger(global.log4js.getLogger('http'), {
    level: 'auto'
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 处理访问授权
app.use('/auth', auth);
// 处理凭证
app.use(interceptor.verifytoken);
// 处理用户登陆·注册
app.use('/user', user);
// 处理首页数据
app.use('/home', home);

app.get('/graphiql', graphiqlExpress({ endpointURL: '/home' }));

app.use((req, res, next) => {
  next(utils.error(404, 'verify', 'server system rejected the reaction'));
});

app.use((err, req, res, next) => {
  log.error(`code: ${err.code}, name: ${err.name}, message: ${err.message} `);
  res.status(err.code || 500);
  res.set({
    'Content-Type': 'application/json'
  });
  return res.json({ statu: 'error', message: err.message });
});

module.exports = app;
