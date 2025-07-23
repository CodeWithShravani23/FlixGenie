import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MoviesbyGenie = () => {
    const {movielist ,moviesByGenie}=useSelector(store=>store.genie)
    if(!movielist){return null}
  return (
    <div className="bg-black pb-20 px-4 md:px-8 lg:px-12 xl:px-16 space-y-10">
  {movielist.length > 0 && (
    <>
      {/* Heading */}
      <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center pt-10">
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

  {/* Movie Cards/Poster Lists */}
  {movielist.map((movie, index) => (
    <MovieList key={movie + index} title={movie} movies={moviesByGenie[index]} />
  ))}
</div>

  )
}

export default MoviesbyGenie