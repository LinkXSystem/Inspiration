const express = require('express');
const router = express.Router();

const mongo = require('../components/mongo');
const redis = require('../components/redis');

const utils = require('../components/utils/error');

router.head('/', async (req, res, next) => {
  const access = req.headers.access;
  const canvas = req.headers.canvas;

  if (!access && !canvas) {
    return next(utils.error(400, 'verify', 'information is abnormal'));
  }

  const result = await mongo.Auth.getSecret(access);

  if (result.length === 0) {
    return next(utils.error(400, 'verify', 'information is abnormal'));
  }

  const token = `inspiration ${result[0].secret} ${canvas}`;

  redis.core.set(token, canvas, 'EX', 2 * 60 * 60);

  res
    .set({
      'Access-Control-Expose-Headers': 'X-Auth-Token',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Auth-Token': token
    })
    .json();
});

module.exports = router;
