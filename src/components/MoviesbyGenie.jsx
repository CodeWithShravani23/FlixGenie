import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MoviesbyGenie = () => {
    const {movielist ,moviesByGenie}=useSelector(store=>store.genie)
    if(!movielist){return null}
  return (
    <div className="bg-black pb-20 px-4 md:px-8 lg:px-12 xl:px-16 space-y-14">
        {
            movielist.map((movie,index)=> <MovieList title={movie} movies={moviesByGenie[index]}/>)
        }
       
    </div>
  )
}

export default MoviesbyGenie