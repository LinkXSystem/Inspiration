const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,
  star: Number,
  type: String,
  data: String,
  url: String,
  description: String
});

ProjectSchema.getProjects = function(name, number, callback) {
  return this.find({ name: new RegExp(name, 'i') }).limit(number);
};

module.exports = ArticleSchema;
