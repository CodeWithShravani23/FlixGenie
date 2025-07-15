import React from 'react'
import useVdoTrailer from '../hooks/useVdoTrailer';
import { useSelector } from 'react-redux';

const Vdobg = ({ movieid }) => {
  useVdoTrailer(movieid);

  const Trailer = useSelector(store => store.movie?.movieTrailer);
  if (!Trailer) {

    return null;
  }

  return (
    <div className="relative w-screen h-[100vh] overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 scale-150"
        src={`https://www.youtube.com/embed/${Trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${Trailer?.key}&modestbranding=1&rel=0&disablekb=1`}
        title="Movie Trailer"
        allow="autoplay; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* Optional: Dark gradient for title visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent z-10" />
    </div>


  );
}

export default Vdobg;