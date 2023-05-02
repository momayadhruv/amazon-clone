// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2816cgBty6UEjctCak-8pdOWPb-4m854",
  authDomain: "clone-383fd.firebaseapp.com",
  projectId: "clone-383fd",
  storageBucket: "clone-383fd.appspot.com",
  messagingSenderId: "916298573439",
  appId: "1:916298573439:web:f7382f50fc8a3043f7c14a",
  measurementId: "G-59QR51TWCB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
