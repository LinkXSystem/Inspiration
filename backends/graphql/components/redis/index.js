const redis = require('./connect');

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

module.exports = {
  core: redis,
  get
};
