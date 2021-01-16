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

const firebaseConfigTesting = {
  apiKey: "AIzaSyAo0RAUulqkXE3I4WG59yZU7Wj8U1lADUk",
  authDomain: "react-testing-3698f.firebaseapp.com",
  projectId: "react-testing-3698f",
  storageBucket: "react-testing-3698f.appspot.com",
  messagingSenderId: "683415470647",
  appId: "1:683415470647:web:35a638b323480945baf5b2"
};

if ( process.env.NODE_ENV === 'test')
{
 
  //test
  firebase.initializeApp(firebaseConfigTesting);

} else {

  // dev/prod
  firebase.initializeApp(firebaseConfig);

}


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}