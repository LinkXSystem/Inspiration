const typedefs = `
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
  description: string
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
  description: string
}

type Query {
  article: Article,
  books: [Book],
  design: Design,
  music: Music
  projects: [Project]
}
`;

export default {
  typedefs,
};
