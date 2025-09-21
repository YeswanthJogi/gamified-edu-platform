// src/firebaseFunctions.js
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase"; // import auth from firebase.js

export const handleSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await sendEmailVerification(user);
    alert("Sign Up Successful! Verification email sent.");
    return user;
  } catch (error) {
    alert("Sign Up Error: " + error.message);
    return null;
  }
};

export const handleLogin = async (email, password) => {
  try {
    await signOut(auth); // clear session
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      alert("Login failed: Please verify your email first.");
      await signOut(auth);
      return null;
    }

    alert("Login Successful!");
    return user;
  } catch (error) {
    alert("Login Error: " + error.message);
    return null;
  }
};
