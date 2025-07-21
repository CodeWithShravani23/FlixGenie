import React from 'react'
import SearchBar from "./SearchBar"
import MoviesbyGenie from './MoviesbyGenie'

const Genie = () => {
  return (
    <div className=' min-h-screen bg-black'>
       <SearchBar/>
       <MoviesbyGenie/>
    </div>
  )
}

export default Genie