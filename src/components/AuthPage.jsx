import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { auth, googleAuth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const changeState = () => {
    setSignedUp(!signedUp);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      changeState();
    } catch (err) {
      console.log(err.code);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successful");
    } catch (err) {
      alert(err.code);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.log(err.code);
    }
  };

  return (
    <section className="z-[1]">
      {signedUp ? (
        <SignIn
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignIn={handleSignIn}
          handleGoogleSignUp={handleGoogleSignUp}
          changeState={changeState}
        />
      ) : (
        <SignUp
          handleEmail={handleEmail}
          handlePassword={handlePassword}
          handleSignUp={handleSignUp}
          handleGoogleSignUp={handleGoogleSignUp}
          changeState={changeState}
        />
      )}
    </section>
  );
}
