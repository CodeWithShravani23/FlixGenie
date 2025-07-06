import React from 'react'
import Header from './Header'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
     navigate("/");
}).catch((error) => {
  // An error happened.
   navigate("/error");
});
  }
  return (
    <div className="flex justify-between items-center p-4">
      {/* Left: Logo (via Header) */}
      <div>
        <Header />
      </div>

      {/* Right: User Avatar + Sign Out */}
      <div className="flex items-center space-x-4 mr-6">
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
      </div>
    </div>
  );

}

export default Browse