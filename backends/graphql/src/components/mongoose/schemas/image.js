const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  author: String,
  name: String,
  url: String,
  source: String,
  icons: [String]
});

ImageSchema.getImage = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};

module.exports = ArticleSchema;
