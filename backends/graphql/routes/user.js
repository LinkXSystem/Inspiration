const express = require('express');
const router = express.Router();
const identify = require('uuid/v1');

const common = require('../components/utils/common');
const utils = require('../components/utils/error');
const confuse = require('../components/utils/confuse');

const mongo = require('../components/mongo');

router.post('/login', async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!email || !password) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    if (!email.match(common.regex)) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    const result = await mongo.User.find({
      email: email,
      password: confuse.encryptpassword(password)
    });

    res.json({ statu: 'success', data: result });
  } catch (err) {
    return err.name !== 'MongoError'
      ? next(err)
      : next(utils.error(400, 'verify', `${email} is abnormal`));
  }
});

router.post('/registry', async (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!username || !email || !password) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    if (!email.match(common.regex)) {
      throw utils.error(400, 'verify', 'information is abnormal');
    }

    const result = await mongo.User.create({
      identify: identify(),
      username: username,
      email: email,
      password: confuse.encryptpassword(password)
    });

    res.json({ statu: 'success', data: result });
  } catch (err) {
    return err.name !== 'MongoError'
      ? next(err)
      : next(utils.error(400, 'verify', `${email} is abnormal`));
  }
});

module.exports = router;
