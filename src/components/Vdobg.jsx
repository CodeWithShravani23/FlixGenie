import React from 'react'
import useVdoTrailer from '../hooks/useVdoTrailer';
import { useSelector } from 'react-redux';

const Vdobg = ({ Movie }) => {
  useVdoTrailer();

  const Trailer = useSelector(store => store.movie?.movieTrailer);
  if (!Trailer) {
    console.log("trailer not loaded yet");
    return null;
  }

  console.log(Trailer.key);
  return (
    <div>Vdobg
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + Trailer?.key} title="How To Train Your Dragon | IMAX Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen>
      </iframe>
    </div>
  )
}

export default Vdobg;