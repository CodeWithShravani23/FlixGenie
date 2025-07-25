import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MoviesbyGenie = () => {
  const { movielist, moviesByGenie } = useSelector((store) => store.genie);
  if (!movielist || !moviesByGenie) return null;

  const allMovies = moviesByGenie.flat().filter(Boolean);

  return (
    <div className="bg-black pb-20 px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
      {movielist.length > 0 && (
        <>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-10 
               bg-gradient-to-r text-white 
               text-transparent bg-clip-text drop-shadow-lg">
            🧞‍♂️ Genie found these top picks for you!
          </h2>

          {/* Display Movie Names First */}
          <div className="flex flex-wrap gap-3 justify-center text-white text-lg md:text-xl font-medium">
            {movielist.map((movie, idx) => (
              <span
                key={idx}
                className="bg-gradient-to-r from-purple-700 to-indigo-600 px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                🎬 {movie}
              </span>
            ))}
          </div>
        </>
      )}

      {/* All Movie Cards in one grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 mb-3 sm:gap-5">
        {allMovies.map((movie, idx) => (
          <MovieCard
            key={movie?.id || idx}
              id={movie.id}
            posterPath={movie?.poster_path}
            title={movie?.title || movie?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesbyGenie;
