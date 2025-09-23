import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import "./Auth.css"; // your styling
import Header from "./Header";

const LoginForm = () => {
  <Header/>
  const [isLogin, setIsLogin] = useState(true); // toggle state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        alert("Please verify your email before logging in.");
        return;
      }
      alert("Login Successful!");
    } catch (error) {
      alert("Login Error: " + error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      alert("Sign-up successful! Check your email to verify.");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Sign Up Error: " + error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert("Error sending reset email: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={isLogin ? handleLogin : handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        {isLogin && (
          <p>
            <button type="button" onClick={handleResetPassword}>
              Forgot Password?
            </button>
          </p>
        )}

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button type="button" onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Login"} here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
