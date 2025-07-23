import React from 'react'
import SearchBar from "./SearchBar"
import MoviesbyGenie from './MoviesbyGenie'

const Genie = () => {
  return (
    <div className=' min-h-screen bg-black'>
      <div className='pt-24'>
          <SearchBar/>
      </div>
     
       <MoviesbyGenie/>
    </div>
  )
}

export default Genie