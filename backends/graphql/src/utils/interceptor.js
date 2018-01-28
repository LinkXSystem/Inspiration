const utils = require('./error');
const redis = require('../components/redis');

const verifytoken = async (req, res, next) => {
  const auth = req.headers['x-auth-token'];

  if (!auth) {
    return next(utils.error(401, 'authenticate before making a request.'));
  }

  const result = await redis.get(auth);

  if (!result) {
    return next(utils.error(401, 'authenticate before making a request.'));
  }

  return next();
};

module.exports = {
  verifytoken
};
