import React from "react";
import Layout from "./assets/pages/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./assets/pages/UserList/UserList";
import UserProfile from "./assets/pages/UserProfile/UserProfile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>ERROR!!!!</h1>,
    children: [
      {
        path: "",
        element: <UserList page={1} />,
      },
      {
        path: "page/:page",
        element: <UserList />,
      },
      {
        path: "user/:id",
        element: <UserProfile />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
