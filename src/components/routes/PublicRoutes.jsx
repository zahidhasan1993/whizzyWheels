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
            },
            {
                path: 'register',
                element: <Registration></Registration>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: 'addtoys',
                element: <AddToy></AddToy>
            },
            {
                path: 'mytoys',
                element: <MyToy></MyToy>
            },
            {
                path: 'cardtoys/:id',
                element: <CardToysDetails></CardToysDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toycategory/${params.id}`)
            }
        ]
    }
])


export default router;