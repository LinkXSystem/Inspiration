const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const utils = require('../src/components/utils/error');

router.get('/standard', (req, res, next) => {
  const filename = req.query.filename;
  if (!filename)
    return next(utils.error(400, 'the information of arguments is exception.'));

  const way = path.join(
    path.resolve(__dirname, '..'),
    `/public/video/${filename}`
  );

  fs.exists(way, state => {
    if (!state) return next(utils.error(400, 'waring, the file is not exist.'));

    const stat = fs.statSync(way);
    const size = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : size - 1;
      const chunk = end - start + 1;
      const file = fs.createReadStream(way, { start, end });
      const header = {
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunk,
        'Content-Type': 'video/mp4'
      };
      res.writeHead(206, header);
      file.pipe(res);
    } else {
      const header = {
        'Content-Length': size,
        'Content-Type': 'video/mp4'
      };
      res.writeHead(206, header);
      fs.createReadStream(way).pipe(res);
    }
  });
});

router.get('/transfer', (req, res, next) => {
  const filename = req.query.filename;
  if (!filename)
    return next(utils.error(400, 'the information of arguments is exception.'));

  const way = path.join(
    path.resolve(__dirname, '..'),
    `/public/video/${filename}`
  );

  fs.exists(way, state => {
    if (!state) return next(utils.error(400, 'waring, the file is not exist.'));

    fs.createReadStream(way).pipe(res);
  });
});

module.exports = router;
