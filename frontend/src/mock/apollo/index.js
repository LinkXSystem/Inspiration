import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const build = url =>
  new ApolloClient({
    link: new HttpLink({ uri: url }),
    cache: new InMemoryCache(),
  });

export default {
  build,
};
