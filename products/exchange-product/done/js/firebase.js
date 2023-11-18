
  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  //import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 

   // import firebase from "firebase/compat/app";
    // Required for side-effects
   // import "firebase/firestore";

   import firebase from "firebase/compat/app";
   // Required for side-effects
   import "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJsdRrFLF4HuB-gGtEvSB29Sf2ixQgmR8",
    authDomain: "naijacurrency-455ac.firebaseapp.com",
    projectId: "naijacurrency-455ac",
    storageBucket: "naijacurrency-455ac.appspot.com",
    messagingSenderId: "182668691544",
    appId: "1:182668691544:web:31167a41a3ede45192a22d",
    measurementId: "G-7BTPEXYNN1"
  };

  // Initialize Firebase
 // const app = initializeApp(firebaseConfig);
 /// const analytics = getAnalytics(app);

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

