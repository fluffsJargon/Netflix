import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  const onToggleSignIn = () => {
    isSignedIn ? setSignedIn(false) : setSignedIn(true);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_IMG} alt="bg-logo" />
      </div>
      <form className="p-12 bg-black bg-opacity-80 absolute w-3/12 mx-auto my-36 right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 p-4 cursor-pointer" onClick={onToggleSignIn}>
          {isSignedIn
            ? "New to Netflix? Sign up now."
            : "Have an account already? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
