
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHjfGSZCBj5FWK-ecrsqKH6AMZ7rV0rb8",
  authDomain: "appunta-me.firebaseapp.com",
  projectId: "appunta-me",
  storageBucket: "appunta-me.appspot.com",
  messagingSenderId: "232370185440",
  appId: "1:232370185440:web:152a037489baeee9efdc85"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// used for the firestore refs
const db = getFirestore(firebaseApp);

// here we can export reusable database references
export const notesRef = collection(db, 'notes')