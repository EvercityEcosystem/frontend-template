import { ApolloProvider } from "@apollo/client";
import { UIProvider } from "@evercityecosystem/evercity-ui";
import React from "react";
import ReactDOM from "react-dom/client";
import { NavLink, Link, RouterProvider } from "react-router-dom";
import "@evercityecosystem/evercity-ui/dist/style.css"; // eslint-disable-line  import/no-internal-modules
import { router } from "../pages";
import client from "./apolloClient";
import "./global.css";

import "./i18n";

const uiconfig = {
  components: {
    NavLink,
    Link,
  },
  mapboxAccessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  mapStyle: import.meta.env.VITE_MAPBOX_STYLE_URL,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UIProvider config={uiconfig}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </UIProvider>
  </React.StrictMode>,
);
