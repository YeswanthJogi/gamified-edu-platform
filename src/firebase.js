
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔹 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCAinBXdlD9j-bVythaZ82v-ErQ0jjdGUE",
  authDomain: "eco-learn-sih.firebaseapp.com",
  projectId: "eco-learn-sih",
  storageBucket: "eco-learn-sih.firebasestorage.app",
  messagingSenderId: "592885838701",
  appId: "1:592885838701:web:f2df3ad8d00d2c025a2064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
