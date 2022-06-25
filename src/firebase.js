import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQ5ljFisQIZ7VT__11Tf1NwMHF0cljnyQ",
    authDomain: "thinkedin-b169b.firebaseapp.com",
    projectId: "thinkedin-b169b",
    storageBucket: "thinkedin-b169b.appspot.com",
    messagingSenderId: "9286252985",
    appId: "1:9286252985:web:f92fa3ad4cd0d703215e68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.getFirestore();
const auth = firebase.auth();

// export { db, auth };

export default db;