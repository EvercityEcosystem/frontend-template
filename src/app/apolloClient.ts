import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URL || "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
  },
  connectToDevTools: import.meta.env.DEV,
});

export default client;
