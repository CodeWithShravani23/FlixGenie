import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecContainer = () => {
  const Movies = useSelector((store) => store.movie)

  return (
    <div className="bg-black">
      {Movies?.nowPlayingMov && (<MovieList title="Now Playing" movies={Movies.nowPlayingMov} /> )}
      {Movies?.popularMov && (<MovieList title="Popular" movies={Movies.popularMov} />)}
      {Movies?.topRatedMov && (<MovieList title="Top Rated" movies={Movies.topRatedMov} />)}
      {Movies?.upcomingMov && (<MovieList title="Upcoming" movies={Movies.upcomingMov} />)}
    </div>
  )
}

export default SecContainer
