// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: 'esperanzafeliz-727.firebaseapp.com',
  projectId: 'esperanzafeliz-727',
  storageBucket: 'esperanzafeliz-727.appspot.com',
  messagingSenderId: '358730218374',
  appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);
const dbFirestore = getFirestore(dbapp);
export default dbFirestore;
