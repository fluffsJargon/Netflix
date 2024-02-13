import React, { useEffect } from "react";
import { NETFLIX_LOGO_IMG, SIGNOUT_LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchBar } from "../utils/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTToggle = () => dispatch(toggleGPTSearchBar());

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO_IMG} alt="logo" />
      {user && (
        <div className="flex justify-between align-middle">
          <button className="bg-purple-800 text-white h-3/4 mr-4 mt-2 px-2 border-white rounded-lg" onClick={handleGPTToggle}>
            <span className="w-22 text-white bold">Netflix GPT</span>
          </button>
          <button onClick={handleSignOut}>
            <img className="w-22" src={SIGNOUT_LOGO} alt="signoutlogo" />
            <span className="w-22 text-white bold">Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
