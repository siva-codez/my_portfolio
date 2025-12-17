"use client";

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "@/lib/firebase";
import Auth from "./Auth";
import ProtectedContent from "./ProtectedContent";

export default function AuthGate() {
  const [user, setUser] = useState<any | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <div>Loading…</div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  return <ProtectedContent />;
}
