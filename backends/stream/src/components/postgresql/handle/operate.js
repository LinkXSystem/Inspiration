const pool = require('./connect');
const log4js = require('log4js');

const log = log4js.getLogger('postgresql');

const query = async (sql, data) => {
  const client = await pool.connect();
  let info;

  try {
    info = await client.query(sql, data);
    // log.info(`type insert, the callback data : ${info}`);
  } catch (error) {
    log.error(`the infomation of error : ${error}`);
  }

  return info;
};

module.exports = {
  query
};
