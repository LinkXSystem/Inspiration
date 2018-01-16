const Mongo = require('../../mongoose');

const getArticle = () => {
  return {
    author: 'x',
    title: 'x',
    context: 'x'
  };
};

const getBooks = async () => {
  const data = await Mongo.Book.getBooks(3);
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

module.export = {
  Query: {
    article() {
      return getArticle();
    },
    books() {
      return getBooks();
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
