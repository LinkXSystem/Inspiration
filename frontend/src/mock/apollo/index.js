import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const build = (url, header) => {
  const config = header || {};

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: url, headers: config }),
  });
};

export default {
  build,
};
