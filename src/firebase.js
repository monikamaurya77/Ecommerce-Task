// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCVBFq-b5-GKZvIydExEMga8_CqOJam4g",
  authDomain: "react-authentication-3844b.firebaseapp.com",
  projectId: "react-authentication-3844b",
  storageBucket: "react-authentication-3844b.appspot.com",
  messagingSenderId: "545882351582",
  appId: "1:545882351582:web:e1a4b7b610e7aed543df4f",
  measurementId: "G-HHPGPMX57E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);