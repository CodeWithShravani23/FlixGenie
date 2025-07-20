import React from 'react';
import { useSelector } from 'react-redux';
import useVdoTrailer from '../hooks/useVdoTrailer';

const Vdobg = ({ movieId }) => {
  useVdoTrailer(movieId);
  const trailer = useSelector(store => store.movie?.movieTrailer);

  if (!trailer) {
    return (
      <div className="relative w-full h-[56.25vw] min-h-[400px] bg-gray-900 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[56.25vw] min-h-[400px] overflow-hidden">
     <iframe
  className="absolute top-1/2 left-1/2 w-[150vw] h-[84.375vw] -translate-x-1/2 -translate-y-1/2"
  src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&modestbranding=1&rel=0&disablekb=1&enablejsapi=1&fs=0&showinfo=0&iv_load_policy=3`}
  title={`${trailer.name || 'Movie'} Trailer`}
  allow="autoplay; encrypted-media; fullscreen"
  allowFullScreen
  loading="eager"
/>



      {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" /> */}
    </div>
  );
};

export default React.memo(Vdobg);