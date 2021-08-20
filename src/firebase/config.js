
import firebase from "firebase";



  // Your web app's Firebase configuration
  const Config = {
    apiKey: "AIzaSyB5mKwg9ez9jsiYnsvqivXkzCgEmUfLy1E",
    authDomain: "hostel-automation-46a05.firebaseapp.com",
    projectId: "hostel-automation-46a05",
    storageBucket: "hostel-automation-46a05.appspot.com",
    messagingSenderId: "130168716572",
    appId: "1:130168716572:web:a80778afa19af76e234ed9"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  firebase.analytics();

  export default firebase;
