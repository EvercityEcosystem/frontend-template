import { ApolloClient, InMemoryCache } from "@apollo/client";
import { getOperationAST, parse } from "graphql";

export const client = new ApolloClient({
  uri: Cypress.env("API_URL"),
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": Cypress.env("VITE_HASURA_ADMIN_SECRET"),
  },
});

export const getOperation = (query: string) => {
  let name;
  const parsedQuery = parse(query);

  const operationDefinition = getOperationAST(parsedQuery);
  if (operationDefinition && operationDefinition.name && operationDefinition.name.value) {
    name = operationDefinition.name.value;
  }

  return {
    name,
  };
};

export const aliasOperation = (req: any) => {
  const operation = getOperation(req.body.query);

  if (!operation.name) {
    return req.continue();
  }

  Cypress.log({
    name: operation.name,
    autoEnd: true,
  });

  req.alias = operation.name;
};
