import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { auth, googleAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Home from "./Home";

export const authContext = createContext();

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUsed, setEmailUsed] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setEmailUsed(true);
      }
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginErr(false);
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setLoginErr(true);
      }
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      alert(err.code);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const values = {
    handleEmail,
    handlePassword,
    handleSignUp,
    handleSignIn,
    handleGoogleSignUp,
    handleSignOut,
    emailUsed,
    loginErr,
    setLoginErr,
    setEmailUsed,
  };

  useEffect(() => {
    if (email === "") {
      setEmailUsed(false);
      setLoginErr(false);
    }
  }, [handleEmail]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/Home");
      } else {
        navigate("/Login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section>
      <authContext.Provider value={{ ...values }}>
        <Routes>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </authContext.Provider>
    </section>
  );
}

{
  /* {signedUp ? <SignIn /> : <SignUp />} */
}
