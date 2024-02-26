import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd-Bu5a-PTXkDHHsToqz8ECPqz88uHF5M",
  authDomain: "login-auth-e79d5.firebaseapp.com",
  projectId: "login-auth-e79d5",
  storageBucket: "login-auth-e79d5.appspot.com",
  messagingSenderId: "133026420199",
  appId: "1:133026420199:web:78e2b5a320418ef53d5942",
  measurementId: "G-9GX8PQCD2W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
