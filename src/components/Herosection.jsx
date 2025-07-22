import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../utils/loginSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

// Movies list
const featuredMovies = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments...",
    imageUrl: "https://wallpapercave.com/wp/wp1839578.jpg",
    thumbnailUrl: "https://wallpapercave.com/wp/wp1839578.jpg",
    genre: "Sci-Fi & Horror"
  },
  {
    id: 2,
    title: "The Witcher",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny...",
    imageUrl: "https://wallpapercave.com/uwp/uwp3867921.jpeg",
    thumbnailUrl: "https://wallpapercave.com/uwp/uwp3867921.jpeg",
    genre: "Fantasy & Adventure"
  },
  {
    id: 3,
    title: "Money Heist",
    description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain...",
    imageUrl: "https://wallpapercave.com/wp/wp14579051.jpg",
    thumbnailUrl: "https://wallpapercave.com/wp/wp14579051.jpg",
    genre: "Crime & Drama"
  },
  {
    id: 4,
    title: "Peaky Blinders",
    description: "Peaky fooking Blinders",
    imageUrl: "https://wallpapercave.com/wp/wp12500720.jpg",
    thumbnailUrl: "https://wallpapercave.com/wp/wp12500720.jpg",
    genre: "Crime & Drama"
  }
];

const HeroSection = React.memo(() => {
  const dispatch = useDispatch();
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // New: Per-card hover
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
      });
    };

    Promise.all([
      ...featuredMovies.map((m) => loadImage(m.imageUrl)),
      ...featuredMovies.map((m) => loadImage(m.thumbnailUrl))
    ]).then(() => setIsLoaded(true));
  }, []);

  const onGetStarted = useCallback(() => {
    dispatch(toggleLogin());
  }, [dispatch]);

  useEffect(() => {
    if (hoveredIndex !== null || !isLoaded) return;

    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hoveredIndex, isLoaded]);

  const currentMovie = useMemo(() => featuredMovies[currentMovieIndex], [currentMovieIndex]);

  return (
    <section className="relative h-screen bg-black flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {isLoaded && (
          <motion.img
            key={currentMovie.imageUrl}
            src={currentMovie.imageUrl}
            alt=""
            className="w-full h-full object-cover opacity-40 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Aladdin Lamp for Movies.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Type the vibe. Get the watch
        </motion.p>

        <motion.button
          onClick={onGetStarted}
          className="bg-red-700 mb-14 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-lg flex items-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <FaPlay className="ml-2" />
        </motion.button>
      </div>

      {/* Thumbnails Carousel */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
        <div className="flex justify-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {featuredMovies.map((movie, index) => (
            <div
              key={movie.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.button
                className={`flex-shrink-0 w-56 h-36 md:w-64 md:h-40 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentMovieIndex === index ? 'ring-4 ring-red-600 scale-110' : 'opacity-70 hover:opacity-90'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentMovieIndex(index)}
              >
                {isLoaded && (
                  <img
                    src={movie.thumbnailUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
