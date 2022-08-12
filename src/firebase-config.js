import firebase from 'firebase'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {getFirestore} from "firebase/firestore"

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBAOK__BlIB7d_pibWncHk26Y6limmWC5c",

  authDomain: "omo-kayan-b7994.firebaseapp.com",

  projectId: "omo-kayan-b7994",

  storageBucket: "omo-kayan-b7994.appspot.com",

  messagingSenderId: "118737242725",

  appId: "1:118737242725:web:317c4c0bc6e781f213d48c",

  measurementId: "G-X1T6FJHFD7"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();