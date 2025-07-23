import React from 'react';
import { FiPlay, FiInfo } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Vdotitle = ({ title, overview, movieId }) => {
  return (
    <motion.div 
     className="px-2 md:px-0 lg:pl-3 space-y-4 max-w-2xl text-white z-10 relative "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h1 className="text-2xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>
      <p className="text-xs md:text-lg leading-relaxed text-white/90 line-clamp-3">
        {overview}
      </p>
      <div className="flex space-x-4 pt-2 sm:mb-5 ">
        <motion.button 
          className="flex items-center gap-2 bg-white text-black px-6 py-2 md:px-8 sm:px-6 sm:py-2 md:py-3 font-semibold rounded-full hover:bg-opacity-80 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiPlay size={20} />
          Play
        </motion.button>
        <motion.button 
          className="flex items-center gap-2 bg-gray-600/70 text-white px-6 py-2 md:px-8 md:py-3 sm:px-6 sm:py-2 font-semibold rounded-full hover:bg-opacity-80 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiInfo size={20} />
          More Info
        </motion.button>
      </div>
    </motion.div>
  );
};

export default React.memo(Vdotitle);