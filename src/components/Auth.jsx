import { useState } from "react";
import { auth } from "../services/firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (isLogin) => {
    try {
      const userCredential = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);
      
      setUser(userCredential.user);
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Login / Signup</h2>
      <input className="w-full p-2 border rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="w-full p-2 border rounded mt-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white p-2 mt-2 w-full" onClick={() => handleAuth(true)}>Login</button>
      <button className="bg-green-500 text-white p-2 mt-2 w-full" onClick={() => handleAuth(false)}>Sign Up</button>
    </div>
  );
};

export default Auth;
