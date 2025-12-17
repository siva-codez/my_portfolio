"use client";

import React, { useEffect, useState } from "react";
import { signUp, signIn, signOutUser, onAuthStateChanged } from "@/lib/firebase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err?.message || "Authentication error");
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (err) {
      console.error(err);
    }
  }

  if (user) {
    return (
      <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, maxWidth: 360 }}>
        <p>Signed in as <strong>{user.email}</strong></p>
        <button onClick={handleSignOut} style={{ marginTop: 8 }}>Sign out</button>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white px-4">
    <div className="w-full max-w-md bg-gray-800 text-white rounded-xl shadow-lg p-8">
   
    <form className="auth-form justify-center items-center" onSubmit={handleSubmit} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, maxWidth: 360 }}>
      <h3 className="text-2xl font-semibold  mb-6">{isSignUp ? "Create account" : "Sign in"}</h3>

      <div style={{ marginBottom: 8 }}>
        <label className="block text-sm font-medium  mb-1" style={{ display: "block" }}>Email</label>
        <input
        className="w-full rounded-lg border border-gray-300 px-4 py-2 
                 focus:border-pink-500 focus:ring-2 focus:ring-pink-200
                 outline-none transition"
         value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
      </div>

      <div style={{ marginBottom: 8 }}>
        <label className="block text-sm font-medium  mb-1" style={{ display: "block" }}>Password</label>
        <input
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-white
                 focus:border-pink-500 focus:ring-2 focus:ring-pink-200
                 outline-none transition"
         value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
      </div>

      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}

      <div className="flex items-center justify-between pt-2">
      <button type="submit" 
       className="bg-pink-600 text-white px-5 py-2 rounded-lg
                 hover:bg-pink-700 transition font-medium" disabled={loading} style={{ marginRight: 8 }}>
        {loading ? "Please wait..." : isSignUp ? "Create account" : "Sign in"}
      </button>
      <button type="button" className="text-sm text-pink-600 hover:underline" onClick={() => setIsSignUp((s) => !s)}>
        {isSignUp ? "Have an account? Sign in" : "Create account"}
      </button>
      </div>
    </form>
     </div>
     </div>
    </>
  );
}
