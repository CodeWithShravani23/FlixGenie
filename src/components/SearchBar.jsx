import React, { useRef } from 'react'
import ai from '../utils/gemini';
import { GoogleGenAI } from "@google/genai";


const SearchBar = () => {
  const searchText = useRef(null);
  const askMovie = async () => {
    console.log(searchText.current.value);
    //Make an Api call to google gemini
  const geminiQuery=`act as a movie recommendation system and suggest some movies for the query ${searchText.current.value} give me only 5 names of movies in the form of an array`
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: geminiQuery,
    });
    console.log(response.text);
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
