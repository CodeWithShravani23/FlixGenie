import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../utils/loginSlice';
import store from "../utils/appStore"

export const Landing = () => {
  //handle get started button
  const dispatch =useDispatch();
  const showlogin=useSelector(store=>store.login.toggle);
  console.log("Login toggle:", showlogin);


  const handleGetStarted=()=>{
 console.log("Dispatching toggleLogin()");
dispatch(toggleLogin());
console.log("After dispatch, value is:", store.getState().login.toggle); // only works if you import store

  }

  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-70   z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
       {showlogin}

        {/* Login Section */}
      {showlogin ? (
  <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
  <Login />
</div>
): <div className="flex justify-center items-center z-30 relative mt-4">
  <button
    onClick={handleGetStarted}
    className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
  >
    Get Started
  </button>
</div>}

        {/* <Faq/> */}
        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </div>
  );
};

