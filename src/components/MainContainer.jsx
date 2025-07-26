import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Vdotitle from './Vdotitle';
import Vdobg from './Vdobg';

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMov);
  
  if (!movies || movies.length === 0) {
    return (
      <div className="relative h-[56.25vw] min-h-[400px] w-full bg-gray-900 animate-pulse">
        <div className="absolute inset-0 flex items-center px-4 md:px-12">
          <div className="space-y-4 w-full md:w-1/2">
            <div className="h-12 w-3/4 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-800 rounded animate-pulse"></div>
            <div className="flex gap-4 pt-4">
              <div className="h-10 w-32 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-10 w-32 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mainMovie = movies[Math.floor(Math.random() * 10)]; // Random from first 10
  const { title, overview, id } = mainMovie;

  return (
    <motion.div 
      className="relative h-[56.25vw] min-h-[400px] w-full "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Vdobg movieId={id} />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0">
        <div className="h-full flex items-center px-4 md:px-12 lg:px-24">
          <Vdotitle 
            title={title} 
            overview={overview} 
            movieId={id}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(MainContainer);