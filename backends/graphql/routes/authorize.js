const express = require('express');
const router = express.Router();

const utils = require('../src/components/utils/error');
const mongo = require('../src/components/mongoose');
const redis = require('../src/components/redis');

router.head('/', async (req, res, next) => {
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
      'Access-Control-Expose-Headers': 'X-Auth-Token',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Auth-Token': `inspiration ${result[0].secret}`
    })
    .json();
});

module.exports = router;
