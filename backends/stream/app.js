const express = require('express');
const fs = require('fs');
const log4js = require('./src/components/log4js');

const app = express();

const logger = log4js.getLogger('cheese');
global.logger = logger;

app.get('/music', (req, res) => {
  let filename = req.query.name;

  let file = `${__dirname}/public/music/${filename}`;

  fs.exists(file, state => {
    if (state) {
      let stream = fs.createReadStream(file);
      stream.pipe(res);
    } else {
      logger.warn(
        `this music of ${filename}, the sever disable create the stream o music`
      );
      res.end();
    }
  });
});

app.listen(4200, () => {
  logger.info('the stream starting, listeng on port of 4200 !');
  console.log('the server listening on port of 4200 !');
});
