const config = require('../../config/system.json');

const Redis = require('ioredis');

const redis = new Redis(config.redis);

module.exports = redis;