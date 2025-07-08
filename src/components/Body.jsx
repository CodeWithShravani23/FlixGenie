import React, { useState } from 'react'
import Header from './Header'
import Browse from '../pages/Browse'
import {createBrowserRouter} from "react-router-dom"
import {RouterProvider} from "react-router-dom";
import { Landing } from '../pages/Landing';



const Body = () => {
   
    const appRouter =createBrowserRouter([
        {
            path:"/",
            element:<Landing/>
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