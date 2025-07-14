import React from 'react'
import { imgUrl } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
 
  return (
    <div className="min-w-[120px] md:min-w-[170px] transition-transform px-2 duration-300 transform hover:scale-105 cursor-pointer">
      <img
        alt="movie poster"
        src={imgUrl + posterPath}
        className="rounded-md shadow-md w-full"
      />
    </div>
  );
}

export default MovieCard
