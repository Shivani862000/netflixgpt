import React from "react";
import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutPage from "./AboutPage";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/aboutProject",
      element: <AboutPage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
