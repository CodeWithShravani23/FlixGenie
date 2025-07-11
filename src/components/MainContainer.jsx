import React from 'react'
import Vdotitle from './Vdotitle'
import Vdobg from './Vdobg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const Movies = useSelector(store => store.movie?.nowPlayingMov);

  if (!Movies || Movies.length === 0) {
    console.log("Movies not loaded yet");
    return null;
  }

  // ✅ Get a random index within range

  const MainMovie = Movies[12];
  console.log(MainMovie);

  const { title, overview, id } = MainMovie;

  return (
    <div className="relative">
      <Vdobg movieid={id} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent z-10 flex items-center">
        <Vdotitle title={title} overview={overview} />
      </div>

    </div>
  );

}

export default MainContainer