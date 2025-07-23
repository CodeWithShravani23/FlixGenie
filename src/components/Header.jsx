import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/logo2.png";
import { useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { User_Avatar } from '../utils/constant';
import { removeMovies, toggleGenie } from '../utils/genieSlice';

const Header = () => {
  const user = useSelector(store => store.user);
  const showGenie = useSelector(store => store.genie.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => navigate("/error"));
  };

  const handleGenieClick = () => {
    dispatch(toggleGenie());
    dispatch(removeMovies());
  };

  return (
    <motion.div 
      className="flex justify-between items-center w-full z-30 absolute px-8  md:-mt-9 "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* Logo with animation */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer"
      >
        <img
          className="sm:w-44 w-52 mix-blend-multiply"
          alt="logo"
          src={Logo}
          onClick={() => navigate("/browse")}
        />
      </motion.div>

      {/* User controls */}
      {user && (
        <div className="flex items-center space-x-6">
          <motion.button 
            onClick={handleGenieClick}
            className="px-6 py-2 bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900 text-white rounded-full font-medium text-sm shadow-lg transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(109, 40, 217, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            {!showGenie ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Genie
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                Browse
              </>
            )}
          </motion.button>

          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                alt="userLogo"
                src={User_Avatar}
                className="w-10 h-10 sm:rounded-full ml-8  rounded-full border-2 border-white shadow-md"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>

            {/* Dropdown menu */}
            {isHovered && (
              <motion.div 
                className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-xl z-50 overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-1">
                  <div className=" px-4 py-2 text-sm text-gray-200 border-b border-gray-700">
                    {user.displayName || user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors duration-200 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Header;