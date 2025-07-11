import React, { useEffect, useState } from 'react'
import Vdotitle from './Vdotitle'
import Vdobg from './Vdobg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const Movies = useSelector(store => store.movie?.nowPlayingMov);
  const [MainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (Movies && Movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * Movies.length);
      setMainMovie(Movies[randomIndex]);
    }
  }, [Movies]);

  if (!MainMovie) return null;

  const { title, overview, id } = MainMovie;

  return (
    <div className="relative">
      <Vdobg movieid={id} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent z-10 flex items-center">
        <Vdotitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
