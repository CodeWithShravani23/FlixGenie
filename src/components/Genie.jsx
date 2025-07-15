import React from 'react'
import SearchBar from "./SearchBar"
import MoviesbyGenie from './MoviesbyGenie'

const Genie = () => {
  return (
    <div>
       <div
        // className="inset-0 bg-cover bg-center z-30 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg')",
        }}
      />
      <>
       <SearchBar/>
       <MoviesbyGenie/>
      </>
    </div>
  )
}

export default Genie