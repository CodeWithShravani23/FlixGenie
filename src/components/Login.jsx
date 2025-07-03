import React, { useState } from 'react';

const Login = () => {

    const [isSignin ,setisSignin] =useState(true);
    function handleSignIn(){
        setisSignin(!isSignin);
    }
  return (
  <div className="bg-black bg-opacity-75 p-8 sm:p-12 rounded-md w-[90%] max-w-md my-20">
      <form className="flex flex-col gap-4">
        <h1 className='text-white text-3xl font-bold my-3'>{isSignin?"Sign In" : "Sign Up"}</h1>
        {
            (!isSignin) &&  <input
          type="text"
          placeholder="username"
          className="p-3 rounded bg-[#333] opacity-70 placeholder-gray-400 text-white focus:outline-none"
        />
        }
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-3 rounded bg-[#333] opacity-70 placeholder-gray-400 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded bg-[#333] opacity-70 placeholder-gray-400 text-white focus:outline-none"
        />

        <button
          type="submit"
          className="bg-[rgb(229,9,20)] opacity-70 hover:bg-red-700 text-white font-semibold py-3 rounded mt-2"
        >
          {isSignin?"Sign In" : "Sign Up"}
        </button>

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

