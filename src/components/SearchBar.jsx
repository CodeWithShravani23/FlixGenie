import React, { useRef, useState } from 'react';
import ai from '../utils/gemini';
import { useDispatch } from 'react-redux';
import { addMoviesByGenie } from '../utils/genieSlice';

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const searchMovie = async (movie) => {
  try {
    const data = await fetch(
      `https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/search/movie&query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`
    );
    const json = await data.json();

    // Filter results for exact title match (case-insensitive)
    const exactMatch = json.results?.filter(
      (item) => item.title.toLowerCase() === movie.toLowerCase()
    );

    return exactMatch.length ? exactMatch : []; // Return only exact matches
  } catch (error) {
    console.error('🔥 Fetch error: ', error);
    return [];
  }
};


  const askMovie = async () => {
    if (!searchText.current?.value?.trim()) return;

    setIsLoading(true);
    try {
      const geminiQuery = `Act as a movie recommendation system and suggest some movies for the query ${
        searchText.current.value
      }. Give me only 6 names of movies (comma separated) like: don,sholey,baghi,pathaan,jawan`;
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: geminiQuery,
      });

      const movieResponse = result.text.split(',').map(m => m.trim());
      const promiseArray = movieResponse.map((movie) => searchMovie(movie));
      const tmdbMovies = await Promise.all(promiseArray);

      dispatch(
        addMoviesByGenie({ movielist: movieResponse, moviesByGenie: tmdbMovies })
      );
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      askMovie();
    }
  };

  return (
    <div className="flex justify-center -mb-12 items-center pt-10 md:pt-20 lg:pt-24 pb-6 md:pb-10 lg:pb-12 px-4">
      <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
      
        <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 
               text-transparent bg-clip-text drop-shadow-lg mb-3 xs:mb-4 sm:mb-5 md:mb-6">
        Speak Your Mood, Get Movie Magic!
        </h1>
          <h1 className="text-l xs:text-xl sm:text-2xl  text-center text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6">
         Your Movie Genie Is Listening 🧞‍♂️
        </h1>
        
        <form onSubmit={(e) => e.preventDefault()} className="relative group">
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-full blur-md opacity-75 group-hover:opacity-100 transition-all duration-300" />
          
          {/* Search container */}
          <div className="relative flex flex-col sm:flex-row items-center bg-gray-900 rounded-2xl sm:rounded-full p-1 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 transition-all duration-300">
            <input
              ref={searchText}
              className="flex-grow p-2 xs:p-3 sm:p-4 rounded-2xl sm:rounded-full w-full text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 border-none text-xs xs:text-sm sm:text-base"
              type="text"
              placeholder="What's your movie wish today? "
              onKeyDown={handleKeyDown}
              aria-label="Search for movies"
              disabled={isLoading}
            />
            
            <button
              onClick={askMovie}
              disabled={isLoading}
              className={`mt-2 sm:mt-0 sm:ml-2 px-3 xs:px-4 sm:px-5 md:px-6 py-1 xs:py-2 sm:py-3 rounded-xl sm:rounded-full font-medium text-white transition-all duration-300 ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
              } w-full sm:w-auto`}
              aria-label={isLoading ? 'Searching movies' : 'Search movies'}
            >
              {isLoading ? (
                <div className="flex items-center justify-center sm:justify-start space-x-1 xs:space-x-2">
                  <svg
                    className="animate-spin h-3 xs:h-4 w-3 xs:w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="text-xs xs:text-sm">Genie is thinking..</span>
                </div>
              ) : (
                <span className="text-xs xs:text-sm sm:text-base">Abracadabra</span>
              )}
            </button>
          </div>
        </form>
        
        <p className="text-center mt-2 xs:mt-3 sm:mt-4 text-gray-400 text-xxs xs:text-xs sm:text-sm">
         Say it like: "bittersweet love stories", "early 2000s teen dramas", or "offbeat coming-of-age films"
        </p>
      </div>
    </div>
  );
};

export default SearchBar;