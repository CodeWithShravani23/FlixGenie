import React from 'react'
import Header from '../components/Header'
import useNowPlayingMov from "../hooks/useNowPlayingMov"
import MainContainer from '../components/MainContainer';
import SecCountainer from '../components/SecCountainer';



const Browse = () => {
  useNowPlayingMov();

  return (
  <div>
    <Header/>
    <MainContainer/>
    <SecCountainer/>
  </div>  
  );

}

export default Browse