const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const utils = require('../src/components/utils/error');

router.get('/standard', (req, res, next) => {
  const filename = req.query.filename;

  if (!filename)
    return next(utils.error(400, 'the information of arguments is exception.'));

  let way = path.join(
    path.resolve(__dirname, '..'),
    `/public/music/${filename}`
  );

  fs.exists(way, state => {
    if (!state) return next(utils.error(400, 'waring, the file is not exist.'));

    fs.createReadStream(way).pipe(res);
  });
});

module.exports = router;
