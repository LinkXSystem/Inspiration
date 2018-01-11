const http = require('http');
const fs = require('fs');
const { getstream, getstring } = require('../utils/transfer');
const { music } = require('../postgresql');

const getredicturl = url => {
  return new Promise((resolve, reject) => {
    http
      .get(url, res => {
        // 重定向无法触发 on 事件
        resolve(res.headers.location);
      })
      .on('error', err => reject(error));
  });
};

const getmusic = async url => {
  const reallink = await getredicturl(url);
  return new Promise((resolve, reject) => {
    http
      .get(reallink, res => {
        res.setEncoding('binary');
        //   typeof data = string
        let data = '';

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(Buffer.from(data, 'binary'));
        });
      })
      .on('error', err => reject(error));
  });
};

const test = async () => {
  try {
    // const buffer = await getmusic(
    //   'http://music.163.com/song/media/outer/url?id=400162138.mp3'
    // );
    // await music.insert(['400162138.mp3', buffer]);
    const data = await music.select(['400162138.mp3']);
    // console.log(typeof data);
    const stream = getstream(data.data);
    stream.pipe(fs.createWriteStream('../../../public/music/real.mp3'));
  } catch (error) {
    console.error(error);
  }
};

test();
