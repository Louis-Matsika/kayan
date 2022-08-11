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

  apiKey: "AIzaSyCU4NJKXtACn3Tf9qrXxJOcYmSkJZbu50s",

  authDomain: "welcom-omo.firebaseapp.com",

  projectId: "welcom-omo",

  storageBucket: "welcom-omo.appspot.com",

  messagingSenderId: "419466973886",

  appId: "1:419466973886:web:68e6fb993182eff30144ef",

  measurementId: "G-3YFZ56R9N8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();