const Mongo = require('../../mongoose');

const getArticle = () => {
  return {
    author: 'x',
    title: 'x',
    context: 'x'
  };
};

const getBooks = async number => {
  const data = await Mongo.Book.find({}, { _id: false, __v: false }).limit(
    number
  );
  return data;
};

const getDesign = () => {
  return [];
};

const getMusic = () => {
  return [];
};

const getProjects = () => {
  return [];
};

module.exports = {
  Query: {
    article() {
      return getArticle();
    },
    books(number) {
      return getBooks(number);
    },
    design() {
      return getDesign();
    },
    music() {
      return getMusic();
    },
    projects() {
      return getProjects();
    }
  }
};
