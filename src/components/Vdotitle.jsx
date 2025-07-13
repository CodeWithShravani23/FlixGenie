import React from 'react';


const Vdotitle = ({ title, overview }) => {
  return (
    <div className="pl-6 md:pl-16 space-y-4 max-w-2xl text-white">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="text-sm md:text-lg leading-relaxed text-white/90">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 font-semibold rounded hover:bg-opacity-80 transition-all">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 font-semibold rounded hover:bg-opacity-80 transition-all">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};



export default Vdotitle;
