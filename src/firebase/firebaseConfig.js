import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBE8-0kBjB0mALKmGn6YXkQgF6ITNiH67U",
    authDomain: "curso-react-2fdae.firebaseapp.com",
    projectId: "curso-react-2fdae",
    storageBucket: "curso-react-2fdae.appspot.com",
    messagingSenderId: "138535508685",
    appId: "1:138535508685:web:62fe2e08341ef51181e784"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}