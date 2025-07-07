import React from 'react'
import Logo from "../assets/logo2.png"
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (

    <div className='flex justify-between'>
      <div className='  top-0 -m-14 '>
        <img
          className='w-60 px-4 mix-blend-multiply ml-16 bg-gradient-to-t '
          alt="logo"
          src={Logo}
        />
      </div>
      {/* Right: User Avatar + Sign Out */}
      {user &&
        (<div className="flex items-center space-x-4 mr-6">
          <img
            alt="userLogo"
            src="https://avatars.githubusercontent.com/u/6759280?v=4"
            className="w-10 h-10 rounded-s"
          />
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold transition"
          >
            Sign Out
          </button>
        </div>)
      }
    </div>
  )
}

export default Header;