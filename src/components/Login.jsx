import React, { useState,useRef } from 'react';
import {validate} from "../utils/validate.js"

const Login = () => {
    const [isSignin ,setisSignin] =useState(true);
    const [errorMessage,seterrorMessage]=useState(null);

    function handleSignIn(){
        setisSignin(!isSignin);
    }
    const email=useRef(null);
    const password=useRef(null);
    const username=useRef(null);
    const handleButtonClick=()=>{
       if(!isSignin && (!username.current?.value || username.current.value.trim() === "")){
        seterrorMessage("username is required !");
        return;
      }
      const message=validate(email.current.value, password.current.value);
      seterrorMessage(message);
      if(username.current.value===null){
        seterrorMessage("Username is required !")
      }
    }

  return (
  <div className="bg-black bg-opacity-75 p-8 sm:p-12 rounded-md w-[90%] max-w-md my-20">
      <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-4">
        <h1 className='text-white text-3xl font-bold my-3'>{isSignin?"Sign In" : "Sign Up"}</h1>
        {
            (!isSignin) &&  <input ref={username}
          type="text"
          placeholder="username"
          className="p-3 rounded bg-[#333] opacity-70 placeholder-gray-400 text-white focus:outline-none"
        />
        }
        <input
        ref={email}
          type="email"
          placeholder="Email or phone number"
          className="p-3 rounded bg-[#333] opacity-70 placeholder-gray-400 text-white focus:outline-none"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-[#333] opacity-70 placeholder-gray-400 text-white focus:outline-none"
        />

        <button onClick={handleButtonClick}
          type="submit"
          className="bg-[rgb(229,9,20)] opacity-70 hover:bg-red-700 text-white font-semibold py-3 rounded mt-2"
        >
          {isSignin?"Sign In" : "Sign Up"}
        </button>
        <p className='text-red-700'>{errorMessage}</p>

        <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
      </form>

      <p className="text-gray-400 mt-6">
        { isSignin?"New to FlixGenies?" : "Ready to watch?"}
        <span className="text-white hover:underline cursor-pointer ml-1" onClick={()=>handleSignIn()}>
         {isSignin?"Sign Up Now" : "Sign In Now"}
        </span>
      </p>
      <p className="text-xs text-gray-500 mt-2 leading-tight">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default Login;

