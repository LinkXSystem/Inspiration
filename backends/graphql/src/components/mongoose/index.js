const mongoose = require('./connect');

const auth = require('./schemas/auth');
const book = require('./schemas/book');

const Auth = mongoose.model('auth', auth);
const Book = mongoose.model('book', book);

module.exports = {
  Auth,
  Book
};
