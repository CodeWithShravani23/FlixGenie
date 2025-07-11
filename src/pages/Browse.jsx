import React from 'react'
import Header from '../components/Header'
import useNowPlayingMov from "../hooks/useNowPlayingMov"
import MainContainer from '../components/MainContainer';




const Browse = () => {
  useNowPlayingMov();

  return (
  <div className="bg-black min-h-screen text-white">
    <Header />
    <MainContainer  />
    
  </div>
  );

}

export default Browse