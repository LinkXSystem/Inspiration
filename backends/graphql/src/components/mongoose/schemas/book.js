const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  source: String,
  name: String,
  author: String,
  img: String,
  icons: [String],
  description: String
});

// 注意函数式编程存在 Bug ！
BookSchema.statics.getBooks = function(number) {
  return this.find({}, { _id: false, __v: false }).limit(number);
};

module.exports = BookSchema;
