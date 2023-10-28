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
  authDomain: "netflix-gpt-7e4d7.firebaseapp.com",
  projectId: "netflix-gpt-7e4d7",
  storageBucket: "netflix-gpt-7e4d7.appspot.com",
  messagingSenderId: "483196246319",
  appId: "1:483196246319:web:1a7d6d5f64aa7138f429da",
  measurementId: "G-SHW03R4H3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
