import React from 'react'
import Header from './Header'
import useNowPlayingMov from "../hooks/useNowPlayingMov"


const Browse = () => {
  useNowPlayingMov();
  return (
  <div>
    <Header/>
  </div>  
  );

}

export default Browse