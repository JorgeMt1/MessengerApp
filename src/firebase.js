import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQTM3npMqN0m-iqUGI-0V0jAOT9Kpgr5Y",
    authDomain: "messenger-2c4d1.firebaseapp.com",
    projectId: "messenger-2c4d1",
    storageBucket: "messenger-2c4d1.appspot.com",
    messagingSenderId: "1056361216813",
    appId: "1:1056361216813:web:86f535aadffb99b99c31a4",
    measurementId: "G-PQNXPJYX92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth()

export { auth, db };