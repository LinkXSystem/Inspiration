const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MusicSchema = new Schema({
  author: String,
  name: String,
  url: String,
  source: String,
  icons: [String]
});

MusicSchema.getMusic = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};

module.exports = ArticleSchema;
