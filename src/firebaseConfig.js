// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHPYSsx3anzJi4xMt5mktKhaYvd12jeak",
  authDomain: "vue-3-firebase-9d111.firebaseapp.com",
  projectId: "vue-3-firebase-9d111",
  storageBucket: "vue-3-firebase-9d111.appspot.com",
  messagingSenderId: "581178692058",
  appId: "1:581178692058:web:d7a4f3e7bfcf0dd2c370e3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};