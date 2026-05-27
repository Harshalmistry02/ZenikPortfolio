"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { User } from "../types";

interface AuthContextType {
  user: User;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({ email: "", isLoggedIn: false });
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check if user has valid auth cookies
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        if (response.ok) {
          const data = await response.json();
          setUser({ email: data.user.email, isLoggedIn: true });
        }
      } catch {
        // Not authenticated
      }
      setInitialized(true);
    };
    checkAuth();
  }, []);

  const login = (email: string) => {
    setUser({ email, isLoggedIn: true });
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch {
      // Ignore errors
    }
    setUser({ email: "", isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
