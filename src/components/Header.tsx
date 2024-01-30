import React from 'react'
import {  NETFLIX_LOGO_IMG, SIGNOUT_LOGO } from '../utils/constants'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between' >
      <img className='w-44' src= {NETFLIX_LOGO_IMG}  alt='logo'/>
      {user && <button onClick={handleSignOut}>
        <img className='w-22' src={SIGNOUT_LOGO} alt='signoutlogo' />
        <span className='w-22 text-white bold'>Sign Out</span>
      </button>}
    </div>
  )
}

export default Header
