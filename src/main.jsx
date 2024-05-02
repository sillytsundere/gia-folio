import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Art from "./pages/Art.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Resume from "./pages/Resume.jsx";
import NotFoundPage from "./pages/NotFoundPage";

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
            path: ":projectURL",
            element: <ProjectPage />,
          }
        ]
      },
      {
        path: "/art",
        element: <Art />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
