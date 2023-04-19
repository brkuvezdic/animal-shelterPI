// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  getCount,
  getFirestore,
  collection,
} from "firebase/firestore/lite";
import {
  getAuth,
  updatePassword,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  beforeAuthStateChanged,
  onAuthStateChanged,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK_2nrgTt7UASruDgum6KNOrEZ4nFGdD4",
  authDomain: "animal-shelterpi.firebaseapp.com",
  projectId: "animal-shelterpi",
  storageBucket: "animal-shelterpi.appspot.com",
  messagingSenderId: "2707679468",
  appId: "1:2707679468:web:0e88d977fe90b933eeddc9",
  measurementId: "G-DG2JMN0T79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export {
  app,
  doc,
  auth,
  storage,
  getAuth,
  db,
  setDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
};
