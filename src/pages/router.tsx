import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Error404Page } from "./Error404";
import { Error500Page } from "./Error500";

import { HomePage } from "./HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error500Page />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);
