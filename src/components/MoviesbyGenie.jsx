import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MoviesbyGenie = () => {
    const {movielist ,moviesByGenie}=useSelector(store=>store.genie)
    if(!movielist){return null}
  return (
    <div>
        {
            movielist.map((movie,index)=> <MovieList title={movie} movies={moviesByGenie[index]}/>)
        }
       
    </div>
  )
}

export default MoviesbyGenie