import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignedInForm, setSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onToggleSignIn = () => {
    isSignedInForm ? setSignedIn(false) : setSignedIn(true);
  };

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const displayName = useRef<HTMLInputElement>(null);

  const authenticationLogic = () => {
    if (!isSignedInForm) {
      console.log("Signed");
      createUserWithEmailAndPassword(
        auth,
        email.current?.value as string,
        password.current?.value as string
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          user &&
            updateProfile(user, {
              displayName: displayName.current?.value,
              photoURL: "",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                navigate("/browse");
              })
              .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
              });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value as string,
        password.current?.value as string
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const handleButtonClick = () => {
    //Vslidate Form Data
    const message = checkValidData(
      email.current?.value as string,
      password.current?.value as string
    );

    if (message !== null) {
      setErrorMessage(message);
    } else {
      authenticationLogic();
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_IMG} alt="bg-logo" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="p-12 bg-black bg-opacity-80 absolute w-3/12 mx-auto my-36 right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-2 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
          ref={password}
        />
        {!isSignedInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 my-2 w-full bg-gray-700"
            ref={displayName}
          />
        )}
        <p className="p-2 text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 p-4 cursor-pointer" onClick={onToggleSignIn}>
          {isSignedInForm
            ? "New to Netflix? Sign up  ."
            : "Have an account already? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
