"use client";

import React from "react";
import { SignUp } from "../../page-components/SignUp";
import { useAuth } from "../providers";

export default function Page() {
  const { user, login } = useAuth();

  return <SignUp user={user} onLogin={login} />;
}
