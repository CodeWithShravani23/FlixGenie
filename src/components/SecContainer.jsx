import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecContainer = () => {
  const {
    nowPlayingMov = [],
    popularMov = [],
    topRatedMov = [],
    upcomingMov = [],
  } = useSelector((store) => store.movie || {});

  const getLimitedMovies = (movies, count = 6) => movies?.slice(0, count) || [];

  const renderMovieList = ({ title, movies, showViewAll = false }) => {
    if (!movies?.length) return null;
    return (
      <MovieList
        title={title}
        movies={getLimitedMovies(movies)}
        showViewAll={showViewAll}
      />
    );
  };

  return (
    <div className="bg-black pb-20 px-4 md:px-8 lg:px-12 xl:px-16 space-y-14">
      {renderMovieList({ title: 'Now Playing', movies: nowPlayingMov })}
      {renderMovieList({ title: 'Trending Now', movies: popularMov, showViewAll: true })}
      {renderMovieList({ title: 'Top Rated', movies: topRatedMov })}
      {renderMovieList({ title: 'Coming Soon', movies: upcomingMov })}
    </div>
  );
};

export default SecContainer;
