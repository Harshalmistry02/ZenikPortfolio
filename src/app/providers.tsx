"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types";

interface AuthContextType {
  user: User;
  initialized: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({ email: "", isLoggedIn: false });
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        if (response.ok) {
          const data = await response.json();
          setUser({ email: data.user.email, isLoggedIn: true });
        }
      } catch {
        // Not authenticated
      } finally {
        setInitialized(true);
      }
    };
    checkAuth();
  }, []);

  const login = (email: string) => setUser({ email, isLoggedIn: true });

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch {
      // ignore
    }
    setUser({ email: "", isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ user, initialized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
