"use client";

import React from "react";
import { Login } from "../../page-components/Login";
import { useAuth } from "../providers";

export default function Page() {
  const { user, login, logout } = useAuth();

  return <Login user={user} onLogin={login} onLogout={logout} />;
}
