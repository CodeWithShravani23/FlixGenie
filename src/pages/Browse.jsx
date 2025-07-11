import React from 'react'
import Header from '../components/Header'
import useNowPlayingMov from "../hooks/useNowPlayingMov"
import MainContainer from '../components/MainContainer';
import SecContainer from '../components/SecContainer';




const Browse = () => {
  useNowPlayingMov();

  return (
  <div className="bg-black min-h-screen text-white">
    <Header />
    <MainContainer  />
    <SecContainer/>
    
  </div>
  );

}

export default Browse