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
  authDomain: "netflix-gpt-e408b.firebaseapp.com",
  projectId: "netflix-gpt-e408b",
  storageBucket: "netflix-gpt-e408b.appspot.com",
  messagingSenderId: "729740378986",
  appId: "1:729740378986:web:1f4d1e420dea28a5b15b13",
  measurementId: "G-XF03ZXW5T7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
