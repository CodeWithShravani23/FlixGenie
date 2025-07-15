import React, { useState, useRef } from 'react';
import { validate } from "../utils/validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { toggleLogin } from '../utils/loginSlice.js';

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispath = useDispatch();
  // Add this to your component:
  useEffect(() => {
    seterrorMessage(null);
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
    if (username.current) username.current.value = "";
  }, [isSignin]);


  function handleSignIn() {
    setisSignin(!isSignin);
  }
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const handleButtonClick = () => {
    if (!isSignin && (!username.current?.value || username.current.value.trim() === "")) {
      seterrorMessage("username is required !");
      return;
    }
    const message = validate(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;
    if (!message) {
      console.log("Validation passed. Proceeding to create user.");
    }

    if (!isSignin) {
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.dir(user);
          updateProfile(auth.currentUser, {
            displayName: username.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName } = auth.currentUser;
            // ...
            dispath(addUser({
              uid: uid,
              email: email,
              displayName: displayName
            }));
            // ...
          }).catch((error) => {
            const errorMessage = error.message;
            seterrorMessage(errorMessage);
            // An error occurred
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode);
          // ..
        });
    }
    else {
      //Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode);
        });
    }
  }
  const onClose=()=>{
    dispath(toggleLogin());
  }

  return (
    <div className="relative bg-black bg-opacity-75 p-8 sm:p-12 rounded-md w-[90%] max-w-md  ">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl font-bold focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 mt-10">
        <h1 className='text-white text-3xl font-bold my-3'>{isSignin ? "Sign In" : "Sign Up"}</h1>
        {
          (!isSignin) && <input ref={username}
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
          {isSignin ? "Sign In" : "Sign Up"}
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
        {isSignin ? "New to FlixGenies?" : "Ready to watch?"}
        <span className="text-white hover:underline cursor-pointer ml-1" onClick={() => handleSignIn()}>
          {isSignin ? "Sign Up Now" : "Sign In Now"}
        </span>
      </p>
      <p className="text-xs text-gray-500 mt-2 leading-tight">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default Login;

