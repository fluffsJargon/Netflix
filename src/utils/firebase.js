// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVqi1sJv4WT2xs0KgpP33q5x7FcQvKHNk",
  authDomain: "netflixgpt-8bbb7.firebaseapp.com",
  projectId: "netflixgpt-8bbb7",
  storageBucket: "netflixgpt-8bbb7.appspot.com",
  messagingSenderId: "425618707075",
  appId: "1:425618707075:web:68e729c1f0b208e34ac1b6",
  measurementId: "G-4L34DNPH9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();