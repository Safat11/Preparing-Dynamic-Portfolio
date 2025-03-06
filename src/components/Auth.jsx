import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      // Specific Firebase error codes
      switch (err.code) {
        case 'auth/invalid-email':
          setError("Invalid email format.");
          break;
        case 'auth/user-not-found':
          setError("No user found with this email.");
          break;
        case 'auth/wrong-password':
          setError("Incorrect password.");
          break;
        default:
          setError("Login failed. Please try again.");
          break;
      }
    }
  };

  // Handle Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (err) {
      // Specific Firebase error codes
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError("Email is already in use.");
          break;
        case 'auth/weak-password':
          setError("Password should be at least 6 characters.");
          break;
        case 'auth/invalid-email':
          setError("Invalid email format.");
          break;
        default:
          setError("Sign-up failed. Please try again.");
          break;
      }
    }
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
      </form>
      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <span onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default Auth;
