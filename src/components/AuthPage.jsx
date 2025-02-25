import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");  // Add name field for signup
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (isLogin) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!user.emailVerified) {
        alert("Please verify your email before logging in.");
        return;
      }
      
      if (email === "at4587776@gmail.com") {
        navigate("/AdminDashboard");
      } else {
        navigate("/dashboard");
      }

      alert("Logged in successfully!");
    } else {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email right after account creation
      await sendEmailVerification(user);
      alert("Account created successfully! Please verify your email.");
      navigate("/");  // Redirect to login page or another page after signup
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};


  const handlePasswordReset = async () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h2 className="LoginStatus">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      <form onSubmit={handleAuth} className="login-form">
        {!isLogin && (
          <div className="inputitem">
            <label for= "name">Your name pleasee..</label>
            <input id="name"
              type="text"
              placeholder="ex: John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="inputitem">
          <label for="email">What's Your Email??</label>
          <input id="email"
            type="email"
            placeholder="ex: sample@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="inputitem">
          <label for="password">And Password??</label>
          <input id="password"
            type="password"
            placeholder="ex: password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </button>
        
        <button onClick={() => handlePasswordReset()} >
          Forgot your password?
        </button>
          </form>
        <p className="login-form-footer">
          {isLogin
            ? "Are you a new user here? "
            : "Do you already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} >
            {isLogin ? "Sign Up" : "Login"}
          </button>
          
        </p>
    </div>  
    </div>
  );
}

export default AuthPage;
