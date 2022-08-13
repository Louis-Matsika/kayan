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

  apiKey: "AIzaSyD4-AuZoGrq31lEL4nduLdkNsxM7SFW_nE",

  authDomain: "the-cloud-awaits.firebaseapp.com",

  projectId: "the-cloud-awaits",

  storageBucket: "the-cloud-awaits.appspot.com",

  messagingSenderId: "842314863271",

  appId: "1:842314863271:web:dcc5fc593b8b3aab488182",

  measurementId: "G-J0123PNV64"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();