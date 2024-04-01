import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

// Define accessible routes and which components link to which url
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
        children: [
          {
            path: ":projectName",
            element: <ProjectPage />,
          }
        ]
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
