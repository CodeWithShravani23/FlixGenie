import React from 'react'
import Logo from "../assets/logo2.png"

const Header = () => {
  return (
    <div className='absolute   top-0 -m-14 '>
   <img
  className='w-60 px-4 mix-blend-multiply ml-16 bg-gradient-to-t '
  alt="logo"
  src={Logo}
/>
    </div>
  )
}

export default Header;