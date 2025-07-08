import React from 'react'
import Logo from "../assets/logo2.png"
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { User_Avatar } from '../constant'
import { useEffect } from 'react'


const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
   const dispatch=useDispatch();

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid, email, displayName }));
    } else {
      dispatch(removeUser());
    }
  });

  // ✅ Cleanup function to unsubscribe
  return () => {
    unsubscribe();
  };
}, []);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
   
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
            src={User_Avatar}
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