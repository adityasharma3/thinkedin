import firebase from 'firebase/compat/app';
// import { getAuth } from 'firebase/auth'
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBQ5ljFisQIZ7VT__11Tf1NwMHF0cljnyQ",
    authDomain: "thinkedin-b169b.firebaseapp.com",
    projectId: "thinkedin-b169b",
    storageBucket: "thinkedin-b169b.appspot.com",
    messagingSenderId: "9286252985",
    appId: "1:9286252985:web:f92fa3ad4cd0d703215e68"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, projectStorage, timestamp, projectAuth };