const resolver = require('../resolvers/home-resolver');
const tools = require('graphql-tools');

const typeDefs = `
type Article {
  author: String,
  title: String,
  context: String,
}

type Book {
  source: String,
  name: String,
  author: String,
  img: String,
  icons: [String],
  description: String
}

type Design {
  author: String,
  url: String,
  title: String,
  date: String,
  source: String,
}

type Music {
  source: String,
  name: String
}

type Project {
  name: String,
  star: String,
  type: String,
  date: String,
  description: String
}

type Query {
  article: Article,
  books: [Book],
  design: Design,
  music: Music
  projects: [Project]
}
`;

const schema = tools.makeExecutableSchema({
  typeDefs,
  resolver
});

module.exports = schema;
