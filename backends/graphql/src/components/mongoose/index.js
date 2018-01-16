const mongoose = require('./connect');

const book = require('./schemas/book');

const Book = mongoose.model('book', book);

module.exports = {
  Book
};
