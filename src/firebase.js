// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCAinBXdlD9j-bVythaZ82v-ErQ0jjdGUE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "eco-learn-sih",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ must export auth
