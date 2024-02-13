import React, { EventHandler, useContext, useEffect } from "react";
import {
  LANGUAGEOPTIONS,
  NETFLIX_LOGO_IMG,
  SIGNOUT_LOGO,
} from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchBar } from "../utils/gptSearchSlice";
import { UserLanguageContext } from "../utils/UserLanguageContext";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.user);
  const gptSearch = useSelector(
    (store: RootState) => store.gptSearch.searchToggle
  );

  const dispatch = useDispatch();
  const currentLanguage = useContext(UserLanguageContext);

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

  const handleLanguageSelection = (e: any) => {
    currentLanguage.setLanguage(e.target.value);
  };

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
          {gptSearch && (
            <select
              className=" bg-gray-800 text-white p-2 h-3/4 mt-2 rounded-lg"
              onChange={handleLanguageSelection}
            >
              {LANGUAGEOPTIONS.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.lang}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-800 text-white h-3/4 mx-4 mt-2 px-2 border-white rounded-lg"
            onClick={handleGPTToggle}
          >
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
