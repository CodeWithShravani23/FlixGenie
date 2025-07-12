import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  if (!movies) return null

  return (
    <div className="px-4 py-4 ">
      <h1 className="text-white text-xl md:text-2xl font-semibold mb-2">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
