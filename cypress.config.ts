import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

export default defineConfig({
  e2e: {
    baseUrl: process.env.APP_DOMAIN,
    env: {
      API_URL: process.env.VITE_GRAPHQL_URL,
      GRAPHQL_WEB_SOCKET: process.env.VITE_GRAPHQL_WS_URL,
      VITE_HASURA_ADMIN_SECRET: process.env.VITE_HASURA_ADMIN_SECRET,
    },
    video: false,
  },
});
