import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecContainer = () => {
  const Movies = useSelector((store) => store.movie)

  return (
    <div className="bg-black">
      {Movies?.nowPlayingMov && (
        <MovieList title="Now Playing" movies={Movies.nowPlayingMov} />
      )}

      {/* Uncomment below to add more rows */}
      {/* <MovieList title="Popular" movies={Movies.PopularMov} />
      <MovieList title="Top Rated" movies={Movies.TopRatedMov} />
      <MovieList title="Upcoming" movies={Movies.UpcomingMov} /> */}
    </div>
  )
}

export default SecContainer
