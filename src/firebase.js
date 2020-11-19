import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBFf6sSS0ItWCi2goWa1p7dEqg_tFQ0bFI",
    authDomain: "amz-clone-7e565.firebaseapp.com",
    databaseURL: "https://amz-clone-7e565.firebaseio.com",
    projectId: "amz-clone-7e565",
    storageBucket: "amz-clone-7e565.appspot.com",
    messagingSenderId: "260176148746",
    appId: "1:260176148746:web:9241ae2167493eb54722f3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };