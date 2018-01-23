const express = require('express');
const router = express.Router();

const utils = require('../src/components/utils/error');
const mongo = require('../src/components/mongoose');
const redis = require('../src/components/redis');

router.head('/verify', async (req, res, next) => {
  const access = req.headers.access;

  if (!access) {
    return next(utils.error(400, 'information exception'));
  }

  const result = await mongo.Auth.getSecret(access);

  if (result.length === 0) {
    return next(utils.error(400, 'information exception'));
  }

  const token = `inspiration ${result[0].secret}`;

  redis.core.set(token, new Date().toLocaleTimeString(), 'EX', 2 * 60 * 60);

  res
    .set({
      'content-type': 'application/json',
      'cache-control': 'no-cache',
      authorization: `inspiration ${result[0].secret}`
    })
    .json();
});

module.exports = router;
