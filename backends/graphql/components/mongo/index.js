const mongoose = require('./connect');

const auth = require('./schemas/auth');
const book = require('./schemas/book');
const user = require('./schemas/user');

const Auth = mongoose.model('auth', auth);
const Book = mongoose.model('book', book);
const User = mongoose.model('user', user);

module.exports = {
  Auth,
  Book,
  User
};
