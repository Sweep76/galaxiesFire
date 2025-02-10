import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3hqsM0D5Zv8EVwOHkWcG3RfjKR89io6k",
  authDomain: "rnauthvideo-bcc65.firebaseapp.com",
  projectId: "rnauthvideo-bcc65",
  storageBucket: "rnauthvideo-bcc65.firebasestorage.app",
  messagingSenderId: "512331916515",
  appId: "1:512331916515:web:2d5dc361f805e7758cd1d6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);