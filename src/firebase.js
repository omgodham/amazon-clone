import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCkIAHZdpqJ6ErxnZj5CLSRos4_jH0XSRE",
    authDomain: "clone-30958.firebaseapp.com",
    projectId: "clone-30958",
    storageBucket: "clone-30958.appspot.com",
    messagingSenderId: "279260047608",
    appId: "1:279260047608:web:134d3b5813b87066c7730d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };