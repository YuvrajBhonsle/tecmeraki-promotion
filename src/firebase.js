// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfzOvA4oMGbvlPZGwls9HMv8YG2Iypw8o",
  authDomain: "techmeraki-ad175.firebaseapp.com",
  projectId: "techmeraki-ad175",
  storageBucket: "techmeraki-ad175.appspot.com",
  messagingSenderId: "75717474250",
  appId: "1:75717474250:web:a03ade1ea94b5662ee4133",
  measurementId: "G-94DVZ2V4XV"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const db= getFirestore(firebaseapp);

export default db;


