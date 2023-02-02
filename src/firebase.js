import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsV6KDEXLwKt_ZESBu_6YkVQc73eB0KI8",
  authDomain: "webflix-a37f3.firebaseapp.com",
  projectId: "webflix-a37f3",
  storageBucket: "webflix-a37f3.appspot.com",
  messagingSenderId: "385548594022",
  appId: "1:385548594022:web:0a408c9506f39ef740f6a7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
