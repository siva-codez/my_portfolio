import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  signOut as _signOut,
  onAuthStateChanged as _onAuthStateChanged,
  type User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALrXFoGQK4cRRX6dFoHIVS3cw3Kk0WERI",
  authDomain: "myportfolio-b5e41.firebaseapp.com",
  projectId: "myportfolio-b5e41",
  storageBucket: "myportfolio-b5e41.firebasestorage.app",
  messagingSenderId: "574890504444",
  appId: "1:574890504444:web:dc02aa04680d25cc4d2779"
};



const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export async function signUp(email: string, password: string) {
  return _createUserWithEmailAndPassword(auth, email, password);
}

export async function signIn(email: string, password: string) {
  return _signInWithEmailAndPassword(auth, email, password);
}

export async function signOutUser() {
  return _signOut(auth);
}

export function onAuthStateChanged(callback: (user: User | null) => void) {
  return _onAuthStateChanged(auth, callback);
}

export { auth };
