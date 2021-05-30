import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiYskhdYl0aqd86p57qHUe9tBZnFN6GBE",
    authDomain: "aunna1103.firebaseapp.com",
    projectId: "aunna1103",
    storageBucket: "aunna1103.appspot.com",
    messagingSenderId: "845054838795",
    appId: "1:845054838795:web:23300f85bc2a0f0c8fdf0e",
    measurementId: "G-GHW542KBQ8"
};

const fb = firebase.initializeApp(firebaseConfig);
export { fb };
