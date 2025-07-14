import React, { useRef } from 'react'

const SearchBar = () => {
  const searchText=useRef("");
  return (
    <div className=' flex justify-center items-center  '>
      <form onSubmit={(e) => e.preventDefault()} className='mt-40 w-2/4 h-1/5 bg-purple-950 flex justify-center items-center rounded-full'>
        <input ref={searchText} className='p-3 rounded-3xl w-80 text-black' type='text' placeholder='What do you wanna watch today'></input>
        <button className='p-3 m-4 bg-red-600 rounded-3xl'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;
