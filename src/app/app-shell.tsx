"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "./providers";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 antialiased font-sans">
      {!isAuthPage && <Navbar user={user} onLogout={logout} />}
      <main className="grow">{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
}
