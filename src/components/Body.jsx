import React, { useState } from 'react'
import Header from './Header'
import Browse from '../pages/Browse'
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import { Landing } from '../pages/Landing';
import MovieTrailer from './MovieTrailer';



const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Landing />
        },

        {
            path: "/browse",
            element: <Browse />
        },
         {
        path:"/movie/:id",
        element:<MovieTrailer/>
            },
    ])


    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body