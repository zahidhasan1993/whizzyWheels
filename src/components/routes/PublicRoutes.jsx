import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../layouts/Home";
import Login from "../authentication/Login";
import Error from "../extra/Error";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
])


export default router;