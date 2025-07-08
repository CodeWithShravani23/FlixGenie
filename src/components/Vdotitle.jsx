import React from 'react';

const Vdotitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-16 bg-gradient-to-r from-black via-transparent to-transparent z-20">
      <div className="max-w-xl space-y-4 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          {title}
        </h1>
        <p className="text-sm md:text-lg font-medium text-gray-200 drop-shadow-md line-clamp-4">
          {overview}
        </p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition opacity-60">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vdotitle;
