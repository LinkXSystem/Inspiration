const getArticle = () => {
  return [];
};

const getBooks = () => {
  return [];
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
    article: () => {
      return getArticle();
    },
    books: () => {
      return getBooks();
    },
    design: () => {
      return getDesign();
    },
    projects: () => {
      return getProjects();
    }
  }
};
