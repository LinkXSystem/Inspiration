const postgresql = require('pg');
const log4js = require('log4js');

const config = {
  user: 'zhi',
  database: 'inspiration',
  password: 'root',
  post: 5432,
  max: 20,
  indleTimeoutMillis: 3000
};

const pool = new postgresql.Pool(config);

const log = log4js.getLogger('postgresql');

module.exports = pool;

pool.on('connect', () => {
  log.info(
    `the postgresql database connecting, connect's arguments : ${config}`
  );
});

pool.on('error', err => {
  log.error(`the infomation of error : ${err}`);
});
