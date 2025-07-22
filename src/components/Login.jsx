import React, { useState, useRef } from 'react';
import { validate } from "../utils/validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleLogin } from '../utils/loginSlice.js';

const Login = () => {
  const [isSignin, setisSignin] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  useEffect(() => {
    seterrorMessage(null);
    setFormData({ email: '', password: '', username: '' });
  }, [isSignin]);

  const handleSignInToggle = () => {
    setisSignin(!isSignin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleButtonClick = async () => {
    if (!isSignin && (!formData.username || formData.username.trim() === "")) {
      seterrorMessage("Username is required!");
      return;
    }

    const message = validate(formData.email, formData.password);
    seterrorMessage(message);
    if (message) return;

    setIsLoading(true);

    try {
      if (!isSignin) {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        
        await updateProfile(auth.currentUser, {
          displayName: formData.username,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        });

        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        await signInWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
      }
    } catch (error) {
      let errorMsg = error.code;
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMsg = 'email already in use';
          break;
        case 'auth/invalid-email':
          errorMsg = 'Invalid email address';
          break;
        case 'auth/weak-password':
          errorMsg = 'Password too weak (min 6 chars)';
          break;
        case 'auth/user-not-found':
          errorMsg = 'Account not found';
          break;
        case 'auth/wrong-password':
          errorMsg = 'Incorrect password';
          break;
        default:
          errorMsg = 'Login failed';
      }
      seterrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const onClose = () => {
    dispatch(toggleLogin());
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90"
    >
      <motion.div 
        className="relative bg-black p-8 sm:p-10 rounded-lg w-[90%] max-w-md border-2 border-red-900 shadow-lg"
        layout
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl font-bold focus:outline-none transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        <form onSubmit={(e) => { e.preventDefault(); handleButtonClick(); }} className="flex flex-col gap-4">
          <motion.h1 
            className='text-red-600 text-3xl font-extrabold mb-4 tracking-tight'
            layout="position"
          >
            {isSignin ? "SIGN IN" : "JOIN NOW"}
          </motion.h1>
          
          <AnimatePresence mode="wait">
            {!isSignin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <input
                    ref={username}
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="w-full p-3 rounded bg-gray-900 placeholder-red-900 text-white focus:outline-none focus:ring-1 focus:ring-red-600 tracking-wide text-sm font-bold border border-gray-800"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            <input
              ref={email}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
              className="w-full p-3 rounded bg-gray-900 placeholder-red-900 text-white focus:outline-none focus:ring-1 focus:ring-red-600  tracking-wide text-sm font-bold border border-gray-800"
            />
          </div>

          <div className="relative">
            <input
              ref={password}
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-900 placeholder-red-900 text-white focus:outline-none focus:ring-1 focus:ring-red-600  tracking-wide text-sm font-bold border border-gray-800"
            />
          </div>

          <AnimatePresence>
            {errorMessage && (
              <motion.p 
                className="text-red-400 text-xs py-2 px-3 bg-red-950 rounded font-mono"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ! {errorMessage}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isLoading}
            className={`w-full py-3 rounded font-bold text-white mt-2 transition-all ${
              isLoading 
                ? 'bg-gray-800 cursor-not-allowed border border-gray-700' 
                : 'bg-red-900 hover:bg-red-800 border border-red-800'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESSING...
              </div>
            ) : isSignin ? "SIGN IN" : "CREATE ACCOUNT"}
          </motion.button>

          <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="form-checkbox rounded bg-gray-900 border-gray-700 text-red-600 focus:ring-red-600"
              />
              <span>REMEMBER ME</span>
            </label>
            <a href="#" className="hover:text-red-500 transition-colors font-bold">
              NEED HELP?
            </a>
          </div>
        </form>

        <motion.div className="mt-6 text-center" layout>
          <p className="text-gray-500 text-sm">
            {isSignin ? "NEW USER?" : "ALREADY MEMBER?"}
            <button 
              onClick={handleSignInToggle}
              className="text-red-500 hover:text-red-400 ml-2 font-bold transition-colors"
            >
              {isSignin ? "REGISTER →" : "LOGIN →"}
            </button>
          </p>
        </motion.div>

        <motion.p 
          className="text-xs text-gray-600 mt-4 text-center leading-relaxed font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          SECURE AUTHENTICATION • ENCRYPTED CONNECTION
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Login;