import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies, showViewAll = false }) => {
  if (!movies?.length) return null;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white font-bold text-2xl md:text-3xl">
          {title}
        </h2>
        {showViewAll && (
          <button className="text-sm text-gray-300 hover:text-white transition duration-200">
            View All →
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
              id={movie.id}
            posterPath={movie?.poster_path}
            title={movie?.title || movie?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
