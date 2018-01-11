const redis = require('./connect');
const { surplustime } = require('../utils/time');

const get = key => {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const set = (key, data) => redis.set(key, data, 'EX', surplustime());

module.exports = {
  get,
  set
};
