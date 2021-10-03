// Import the functions you need from the SDKs you need
// // // // import { getAnalytics } from "firebase/analytics";
import Firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXSnPgPyEET9biopppV5boeVbDJC1dYgk",
    authDomain: "todo-5cd5f.firebaseapp.com",
    projectId: "todo-5cd5f",
    storageBucket: "todo-5cd5f.appspot.com",
    messagingSenderId: "869272810498",
    appId: "1:869272810498:web:681249ec01d0199c5ae31b",
    measurementId: "G-ZR1XRV3MD7"
  };

// Initialize Firebase
// const analytics = getAnalytics(app);
var app;
if (!Firebase.apps.length) {
    // firebase.initializeApp({});
    app = Firebase.initializeApp(firebaseConfig);
 }else {
    app = Firebase.app(); // if already initialized, use that one
 }
export const db = app.database();