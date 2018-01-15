const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphql = require('apollo-server-express');
const utils = require('./src/components/utils/error');

const home = require('./routes/home');

const app = new express();

// 日志处理
const log = global.log4js.getLogger('error');

app.disable('x-powered-by');

// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(
  global.log4js.connectLogger(global.log4js.getLogger('http'), {
    level: 'auto'
  })
);

app.use(bodyParser.json());

app.use('/home', home);

app.get('/graphiql', graphql.graphiqlExpress({ endpointURL: '/home' }));

// app.use((req, res, next) => {
//   next(utils.error(404, 'the url or method is unknown.'));
// });

// app.use((err, req, res, next) => {
//   log.error(`status: ${err.status}, error's message: ${err.message} `);
//   res.status(err.status || 500);
//   res.set({
//     'Content-Type': 'application/json'
//   });
//   return res.json({ statu: 'error', message: err.message });
// });

module.exports = app;
