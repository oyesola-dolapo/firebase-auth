import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { auth, googleAuth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import Home from "./Home";

export const authContext = createContext();

export default function AuthPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailUsed, setEmailUsed] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [username, setUsername] = useState(null);

  const userCollection = collection(db, "userDetails");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(userCollection, user.uid);

      await setDoc(userDocRef, {
        username: firstName,
        email: email,
      });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setEmailUsed(true);
      }
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const datas = await getDocs(userCollection);
        const data = datas.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUsername(data[0].username)
      } catch (err) {
        console.log(err.code);
      }
    };
    getUserDetails();
  }, []);

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
      const userCredential = await signInWithPopup(auth, googleAuth);
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
    handleFirstName,
    handleLastName,
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
    username
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
          <Route path="/Login" element={<SignIn />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </authContext.Provider>
    </section>
  );
}

{
  /* {signedUp ? <SignIn /> : <SignUp />} */
}
