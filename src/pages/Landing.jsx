import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

export const Landing = () => {
  //handle get started button
  const handleGetStarted=()=>{

  }
  
  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-70   z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <div className='flex justify-center items-center'> 
          <button onClick={handleGetStarted} className='bg-[rgb(229,9,20)] opacity-70 hover:bg-red-700 text-white font-semibold py-3 rounded mt-2'>Get Started</button>
        </div>
        {/* Login Section */}
        <div className="flex-grow flex justify-center items-center px-4 py-16">
          <Login />
        </div>
        {/* <Faq/> */}
        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </div>
  );
};

