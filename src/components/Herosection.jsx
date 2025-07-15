import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../utils/loginSlice';
import store from "../utils/appStore"

const Herosection = () => {
    const dispatch = useDispatch();
  
    const onGetStarted=()=>{

    dispatch(toggleLogin());
    console.log("After dispatch, value is:", store.getState().login.toggle);
    }
   return (
    <div className="relative h-[80vh] bg-gradient-to-b from-black to-gray-900 flex flex-col justify-center items-center text-white px-6">
      {/* Optional background image */}
      {/* <img src="your-background.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-40 z-0" /> */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
        <p className="text-lg md:text-xl mb-8">Watch anywhere. Cancel anytime.</p>

        <button
          onClick={onGetStarted}
          className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Herosection