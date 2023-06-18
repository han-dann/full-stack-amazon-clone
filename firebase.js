// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdofP_JBulB5auOXEqtlkN5ok61gXO58s",
  authDomain: "clone-app-2778b.firebaseapp.com",
  projectId: "clone-app-2778b",
  storageBucket: "clone-app-2778b.appspot.com",
  messagingSenderId: "501536602029",
  appId: "1:501536602029:web:fd1e2456f41bb2523a1324",
  measurementId: "G-RJHQYP4F2V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

