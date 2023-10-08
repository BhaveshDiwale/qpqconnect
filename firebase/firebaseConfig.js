import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = { // Have the firebase config here
    // databaseURL: "https://phoneauthenticationreact.firebaseio.com",
    apiKey: "AIzaSyDNa6g4vGbPuStWN91cM0mFsBjLcglKjYg",
    authDomain: "canmart-3b042.firebaseapp.com",
    projectId: "canmart-3b042",
    storageBucket: "canmart-3b042.appspot.com",
    messagingSenderId: "648451992770",
    appId: "1:648451992770:web:f2ac6a0f4faeaba0529f5b",
    measurementId: "G-ZQ9W4J16J4"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, firebase };