
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔹 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCAinBXdlD9j-bVythaZ82v-ErQ0jjdGUE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "eco-learn-sih",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
