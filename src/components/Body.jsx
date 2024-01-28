import React from "react";
import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AboutPage from "./AboutPage";
import MoviePage from "./MoviePage";
import Header from "./Header";
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
    {
      path: "/watch",
      element: <MoviePage />,
    },
  ]);

  return <>

  <RouterProvider router={appRouter}/>
  </>;
};

export default Body;
