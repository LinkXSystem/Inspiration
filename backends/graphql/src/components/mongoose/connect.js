const log = global.log4js.getLogger('mongoose');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/inspiration';

mongoose.Promise = global.Promise;

mongoose.connect(url, {
  useMongoClient: true
});

mongoose.connection.on('connect', () => {
  log.info(`connect to ${url}`);
});

mongoose.connection.on('error', err => {
  log.error(`connect error : ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  log.info(`disconnect to ${url}`);
});

module.exports = mongoose;
