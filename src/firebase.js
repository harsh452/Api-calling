// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCkSQzF_g09mCEZquBkg98CcN5-qY6uD7w",
    authDomain: "seek-app-assignment.firebaseapp.com",
    projectId: "seek-app-assignment",
    storageBucket: "seek-app-assignment.appspot.com",
    messagingSenderId: "168975736028",
    appId: "1:168975736028:web:925af9281d823f59f8e819"
  };

 firebase.initializeApp(firebaseConfig);
 export const firebaseAuth = firebase.auth();

 export const googleProvider = new firebase.auth.GoogleAuthProvider();

 export const firestore = firebase.firestore();

 export const storageRef = firebase.storage().ref();
 export const refer = firebase.storage();

 export default firebase;