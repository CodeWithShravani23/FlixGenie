import React from 'react'
import Header from '../components/Header'
import useNowPlayingMov from "../hooks/useNowPlayingMov"
import MainContainer from '../components/MainContainer';
import SecContainer from '../components/SecContainer';
import usePopularMov from '../hooks/usePopularMov';
import useTopRatedMov from '../hooks/useTopRatedMov';
import useUpcomingMov from '../hooks/useUpcomingMov';
import Genie from '../components/Genie';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGenie = useSelector(store => store.genie.toggle);
  useNowPlayingMov();
  usePopularMov();
  useTopRatedMov();
  useUpcomingMov();

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      {showGenie ? <Genie /> : (<>
        <MainContainer />
        <SecContainer /></>)}


    </div>
  );

}

export default Browse