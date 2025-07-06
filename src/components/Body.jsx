import React, { useState } from 'react'
import Header from './Header'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom"
import {RouterProvider} from "react-router-dom";
import { Landing } from './Landing';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Body = () => {
    const dispath=useDispatch();
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
    
useState(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid ,email,displayName} = user;
    // ...
    dispath(addUser({uid:uid,email:email,displayName:displayName}));
  } else {
    // User is signed out
    // ...
    dispath(removeUser())
  }
});
},[])
  return (
   <RouterProvider router={appRouter}/>
  )
}

export default Body