import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import Login from "../authentication/Login";
import Error from "../extra/Error";
import Registration from "../authentication/Registration";
import AllToys from "../extra/toys/AllToys";
import AddToy from "../extra/toys/AddToy";
import MyToy from "../extra/toys/MyToy";
import CardToysDetails from "../extra/CardToysDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../extra/toys/UpdateToy";
import Blogs from "../extra/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        
      },
      {
        path: "addtoys",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        )
      },
      {
        path: "toydetails/:id",
        element: (
          <PrivateRoute>
            <CardToysDetails></CardToysDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://whizzy-wheels-server.vercel.app/alltoys/${params.id}`),
      },
      {
        path: "updatetoy/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://whizzy-wheels-server.vercel.app/alltoys/${params.id}`),
      },
    ],
  },
]);

export default router;
