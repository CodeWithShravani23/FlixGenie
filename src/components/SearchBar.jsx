import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <form>
        <input type='text' placeholder='What do you wanna watch today'></input>
        <button className='p-3 m-4 bg-red-600 rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar