import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHPYSsx3anzJi4xMt5mktKhaYvd12jeak",
  authDomain: "vue-3-firebase-9d111.firebaseapp.com",
  projectId: "vue-3-firebase-9d111",
  storageBucket: "vue-3-firebase-9d111.appspot.com",
  messagingSenderId: "581178692058",
  appId: "1:581178692058:web:d7a4f3e7bfcf0dd2c370e3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { auth, db, storage };
