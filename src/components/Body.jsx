import React from 'react'
import Header from './Header'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom"
import {RouterProvider} from "react-rouet-dom";
import Login from './Login';

const Body = () => {
    const appRouter =createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
    
         {
            path:"/browse",
            element:<Browse/>
        }
    ])
    

  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Body