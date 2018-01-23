const Redis = require('ioredis');
const redis = new Redis({
  host: '127.0.0.1',
  port: 6379,
  db: 1,
  family: 4,
  password: 'root'
});

module.exports = redis;
