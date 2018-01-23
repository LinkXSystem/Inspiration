const utils = require('./error');
const redis = require('../redis');

const verifytoken = async (req, res, next) => {
  console.log(req.headers);
  const auth = req.headers.authorization;
  if (!auth) {
    return next(utils.error(401, 'authenticate before making a request.'));
  }

  const result = await redis.get(auth);

  console.log(result);

  if (!result) {
    return next(utils.error(401, 'authenticate before making a request.'));
  }

  return next();
};

module.exports = {
  verifytoken
};
