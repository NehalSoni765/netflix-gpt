// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { FIREBASE_API_KEY } from "./constant";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflixgpt21.firebaseapp.com",
  projectId: "netflixgpt21",
  storageBucket: "netflixgpt21.appspot.com",
  messagingSenderId: "480604168145",
  appId: "1:480604168145:web:a5f935e3ccc1761b808af0",
  measurementId: "G-LRB4R759ZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
