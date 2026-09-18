// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL-Ifc5EKqA2_HvU8foraqVCnpKHLHaFc",
  authDomain: "netflixgpt-5eadf.firebaseapp.com",
  projectId: "netflixgpt-5eadf",
  storageBucket: "netflixgpt-5eadf.firebasestorage.app",
  messagingSenderId: "697030806396",
  appId: "1:697030806396:web:51ade877eed3c2ca1472f9",
  measurementId: "G-EJPSEBMFB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();