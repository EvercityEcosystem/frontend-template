# Evercity Frontend Service Template

## Usage

`npx degit EvercityEcosystem/frontend-template <your-app-name>`

# Frontend for Evercity Service

## Getting started

1. `nvm use` - switch node version
2. `yarn install` - install dependencies
3. Write environment variables in `.env.development`

```
VITE_GRAPHQL_WS_URL=
VITE_GRAPHQL_URL=
VITE_HASURA_ADMIN_SECRET=
```

4. `yarn api:dev` - generate api and models
5. `yarn dev` - run application

## Build production

1. `nvm use` - switch node version
2. `yarn install` - install dependencies
3. Write environment variables in `.env.procudtion`

```
VITE_GRAPHQL_WS_URL=
VITE_GRAPHQL_URL=
VITE_HASURA_ADMIN_SECRET=
```

4. `yarn build` - generate api and models

## Project structure

### Layers

- /app - an entrypoint in app
- /assets - static files
- /entities - business entities
- /features - business actions
- /widgets - independent blocks
- /shared - a reusable code
- /process - scenarios on multiple pages
- /pages - a composition layer

### Segments

- \*/ui - a presentation layer
- \*/model - a business logic
- \*/api.gql - graphql queries for generate apollo hooks
- \*/api.gen.ts - generated api
- \*/index.ts - a public API
