import React from 'react'
import Vdotitle from './Vdotitle'
import Vdobg from './Vdobg'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const Movies=useSelector(store=>store.movie?.nowPlayingMov);
    if (!Movies || Movies.length === 0) {
  console.log("Movies not loaded yet");
  return null;
}
    const MainMovie=Movies[12];
    console.log(MainMovie);
    const {title,overview,id}=MainMovie;
  return (
    <div>
    <Vdotitle title={title} overview={overview}/>
    <Vdobg movie={id}/>
    </div>
  )
}

export default MainContainer