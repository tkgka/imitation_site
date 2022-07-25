import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: createHttpLink({ uri: `${process.env.VUE_APP_SERVER_NAME}/graphql` }),
  cache: new InMemoryCache(),
});

export default client;
