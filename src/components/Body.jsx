import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse", //user authenticate goes to this page
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
