import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri:
    process.env.NODE_ENV == 'production'
      ? process.env.SERVER_URL
      : 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
