// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMKtzytv42wzV8CxDl5uiQQ0h8RD7X0pY",
  authDomain: "netflixgpt-6f6d3.firebaseapp.com",
  projectId: "netflixgpt-6f6d3",
  storageBucket: "netflixgpt-6f6d3.appspot.com",
  messagingSenderId: "1081125883372",
  appId: "1:1081125883372:web:7de47d0bafb88fb32304c9",
  measurementId: "G-1S1KWTN3YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();