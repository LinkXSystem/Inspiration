const Duplex = require('stream').Duplex;

const getstream = buffer => {
  const stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
};

const getstring = (buffer, encoding) => {
  return buffer.toString(encoding);
};

module.exports = {
  getstream,
  getstring
};
