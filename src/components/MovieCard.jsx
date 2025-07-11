import React from 'react'
import { imgUrl } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
    console.log(posterPath);
  return (
    <div className="w-36 md:w-40 lg:w-48 p-2">
      <img
        alt="movie poster"
        src={imgUrl + posterPath}
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  )
}

export default MovieCard
