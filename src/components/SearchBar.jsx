import React, { useRef } from 'react'
import ai from '../utils/gemini';

import { useDispatch } from 'react-redux';
import { addMoviesByGenie } from '../utils/genieSlice';


const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();


  const searchMovie = async (movie) => {

    try {
      const data = await fetch(`https://tmdb-wrapper-xi.vercel.app/api/tmdb-proxy/?path=/search/movie&query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`);
      const json = await data.json();

      return json.results;

    } catch (error) {
      console.error("🔥 Fetch error: ", error);
    }

  };
  const askMovie = async () => {
    //Make an Api call to google gemini
    const geminiQuery = `act as a movie recommendation system and suggest some movies for the query ${searchText.current.value} give me only 5 names of movies for example: don,sholey,baghi,pathaan,jawan. only 5 strings`
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });

    let movieResponse = result.text.split(',');

    const promiseArray = movieResponse.map((movie) => searchMovie(movie));
    //[promise] [promise] [promise] [promise] [promise]
    const tmdbMovies = await Promise.all(promiseArray);
   
    //storing in redux
    dispatch(addMoviesByGenie({ movielist: movieResponse, moviesByGenie: tmdbMovies }))
  }

  return (
    <div className=' flex justify-center items-center  '>
      <form onSubmit={(e) => e.preventDefault()} className='mt-40 w-2/4 h-1/5 bg-purple-950 flex justify-center items-center rounded-full'>
        <input ref={searchText} className='p-3 rounded-3xl w-80 text-black' type='text' placeholder='What do you wanna watch today'></input>
        <button onClick={askMovie} className='p-3 m-4 bg-red-600 rounded-3xl'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
