import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail, Lock, Eye, EyeOff, ArrowLeft, Disc, AlertCircle, Check, HelpCircle, X, CheckCircle
} from "lucide-react";
import { HanddrawnUnderline, HanddrawnCrown, Sparkles } from "../components/Squiggle";

interface LoginProps {
  user: { email: string; isLoggedIn: boolean };
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export function Login({ user, onLogin, onLogout }: LoginProps) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const router = useRouter();

  // Email validation
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(emailInput));
  }, [emailInput]);

  // Password strength calculation
  useEffect(() => {
    if (passwordInput.length === 0) {
      setPasswordStrength(0);
    } else if (passwordInput.length < 6) {
      setPasswordStrength(1);
    } else if (passwordInput.length < 10) {
      setPasswordStrength(2);
    } else {
      setPasswordStrength(3);
    }
  }, [passwordInput]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      setErrorText("Please enter your registered workspace email.");
      return;
    }
    if (passwordInput.length < 8) {
      setErrorText("Workspace access keys must contain at least 8 characters.");
      return;
    }

    setErrorText("");
    setLoading(true);

    try {
      const csrfResponse = await fetch("/api/auth/csrf", { credentials: "include" });
      const { csrfToken } = await csrfResponse.json();

      const response = await fetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorText(data.error || "Unable to sign in. Please check your details.");
        setLoading(false);
        return;
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        onLogin(data.user.email);
        setLoading(false);
        router.push("/");
      }, 800);
    } catch {
      setErrorText("Secure sign-in is unavailable right now. Please try again.");
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!resetEmail.trim()) {
      setErrorText("Please enter your email address for password reset.");
      return;
    }
    setErrorText("");
    setTimeout(() => {
      setShowForgotModal(false);
      setErrorText("Reset key link dispatch sent to network coordinator.");
      setResetEmail("");
    }, 800);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-yellow-500";
    if (passwordStrength === 3) return "bg-green-500";
    return "bg-gray-200";
  };

  const getPasswordStrengthWidth = () => {
    if (passwordStrength === 1) return "w-1/3";
    if (passwordStrength === 2) return "w-2/3";
    if (passwordStrength === 3) return "w-full";
    return "w-0";
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex relative overflow-hidden font-sans selection:bg-teal-100 selection:text-teal-900">

      {/* 1. FLOATING REDIRECT HOME ICON TO ROLLBACK TO MAIN PAGE */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center justify-center space-x-2 bg-white border border-[#00BFA6]/30 text-[#00BFA6] hover:text-[#0D0F14] hover:bg-[#00BFA6]/5 shadow-sm hover:shadow-md transition-all px-4 py-2.5 rounded-full group"
        title="Return to main site"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-xs font-bold font-mono tracking-tight text-[#0D0F14]">Back to website</span>
      </Link>

      {/* CENTERED FORM */}
      <div className="flex w-full min-h-screen items-center justify-center px-4 py-20">

        <div className="w-full max-w-lg bg-white rounded-[32px] border border-[#00BFA6]/20 shadow-[0_20px_50px_rgba(13,15,20,0.03)] hover:shadow-[0_25px_60px_rgba(0,191,166,0.08)] transition-shadow duration-500 p-8 sm:p-11 relative group">

          {/* Decorative SVG shapes in top-right corner */}
          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-[#00BFA6]">
              <circle cx="10" cy="10" r="3" fill="currentColor" />
              <circle cx="30" cy="15" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="50" cy="10" r="2" fill="currentColor" opacity="0.8" />
              <path d="M15 35 L25 45 L35 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
              <rect x="40" y="35" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </div>

          {user.isLoggedIn ? (
            /* ALREADY LOGGED IN CONSOLE */
            <div className="space-y-6 text-left">
              {/* Brand Header inside card */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#00BFA6] flex items-center justify-center text-white font-black text-lg shadow-sm">Z</div>
                <div>
                  <span className="text-base font-black tracking-tight text-gray-900 block leading-none">zenik</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">tech</span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <span className="text-[10px] text-[#00BFA6] font-black uppercase font-mono tracking-widest bg-teal-50 px-3 py-1 rounded-full inline-block">
                  WELCOME BACK
                </span>
                <h1 className="text-2xl font-black text-[#0D0F14] tracking-tight">
                  Already Signed In
                </h1>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                  Signed in as: <strong className="text-gray-800">{user.email}</strong>
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-150/50 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center text-[9px] text-[#00BFA6] font-bold font-mono uppercase">
                  <span>Account Active</span>
                  <span>Ready</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  You are already signed into your account. You can head back to the dashboard to manage your projects or sign out below.
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  href="/"
                  className="w-full bg-[#0D0F14] hover:bg-[#00BFA6] text-white py-4 rounded-xl text-xs font-black transition-all block text-center shadow-sm"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={onLogout}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl text-xs font-bold transition-all block text-center"
                >
                  Sign out
                </button>
              </div>
            </div>

          ) : (

            /* LOGIN FORM PANEL */
            <div className="space-y-7">

              {/* 2.1 APP LOGO BLOCK */}
              <div className="flex items-center space-x-2 text-left justify-start">
                <div className="w-8 h-8 rounded-lg bg-[#00BFA6] flex items-center justify-center text-white font-black text-xl shadow-sm">
                  Z
                </div>
                <div className="leading-none">
                  <span className="text-base font-black tracking-tight text-[#0D0F14] block">zenik</span>
                  <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase block">tech</span>
                </div>
              </div>

              {/* 2.2 WELCOME BACK SUBTITLE WITH SLANTED TICK/LINES */}
              <div className="space-y-2 text-left pt-1">
                <div className="flex items-center space-x-1 text-[#00BFA6]">
                  <span className="text-[10px] font-black uppercase tracking-widest font-mono">
                    WELCOME BACK
                  </span>
                  {/* Double slanted lines matching sketched image style exactly */}
                  <svg className="w-4 h-3 text-[#00BFA6]" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M3 10 L8 2" />
                    <path d="M8 10 L13 2" />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-[32px] font-black text-[#0D0F14] tracking-tight leading-[1.05]">
                  Sign in to your account<span className="text-[#00BFA6] font-black">.</span>
                </h2>

                {/* Cursive yellow tagline "Let's build something exceptional!" */}
                <div className="relative pt-1 pb-2">
                  <p className="font-script text-xl sm:text-2xl text-[#F4A24D] font-bold tracking-wide">
                    Let's build something exceptional!
                  </p>
                  <div className="w-48 h-2 relative mt-0.5">
                    <HanddrawnUnderline className="text-[#F4A24D]" />
                  </div>
                </div>
              </div>

              {/* ERROR FEEDBACK BAR */}
              {errorText && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center space-x-2 animate-[slideDown_0.3s_ease-out] text-left relative">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <AlertCircle size={14} className="shrink-0" />
                  </div>
                  <span className="leading-snug flex-1">{errorText}</span>
                  <button
                    onClick={() => setErrorText("")}
                    className="shrink-0 hover:bg-red-100 rounded-full p-1 transition-colors"
                    aria-label="Dismiss error"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}

              {/* 2.3 MAIN FORM BLOCK */}
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">

                {/* Email Field with vector envelope */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black tracking-wider text-gray-400 font-mono block uppercase">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-300 ${emailFocused ? "text-[#00BFA6]" : "text-gray-400"
                      }`}>
                      <Mail size={15} />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      className="w-full bg-white focus:bg-white text-xs border border-gray-200 focus:border-[#00BFA6] rounded-xl py-3 px-4 pl-10.5 pr-10 outline-none text-[#0D0F14] focus:ring-1 focus:ring-[#00BFA6] shadow-sm transition-all duration-300 focus:translate-y-[-2px] placeholder:text-gray-350"
                    />
                    {emailValid && emailInput && (
                      <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-green-500 animate-[fadeIn_0.3s_ease-in]">
                        <CheckCircle size={15} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Password Field with lock logo + visibility helper */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black tracking-wider text-gray-400 font-mono block uppercase">
                    Password
                  </label>
                  <div className="relative">
                    <span className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors duration-300 ${passwordFocused ? "text-[#00BFA6]" : "text-gray-400"
                      }`}>
                      <Lock size={15} />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Enter your password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      className="w-full bg-white focus:bg-white text-xs border border-gray-200 focus:border-[#00BFA6] rounded-xl py-3 px-4 pl-10.5 pr-10 outline-none text-[#0D0F14] focus:ring-1 focus:ring-[#00BFA6] shadow-sm transition-all duration-300 focus:translate-y-[-2px] placeholder:text-gray-350"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute inset-y-0 right-0 pr-3.5 flex items-center transition-all duration-300 hover:scale-110 group ${showPassword ? "text-[#00BFA6]" : "text-gray-400 hover:text-[#00BFA6]"
                        }`}
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={15} className="transition-transform duration-300" /> : <Eye size={15} className="transition-transform duration-300" />}
                    </button>
                  </div>

                  {/* Password strength indicator */}
                  {passwordInput && (
                    <div className="mt-2 animate-[fadeIn_0.3s_ease-in]">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full ${getPasswordStrengthColor()} ${getPasswordStrengthWidth()} transition-all duration-500 ease-out`}></div>
                      </div>
                      <p className="text-[9px] text-gray-400 mt-1 font-medium">
                        {passwordStrength === 1 && "Weak password"}
                        {passwordStrength === 2 && "Medium strength"}
                        {passwordStrength === 3 && "Strong password"}
                      </p>
                    </div>
                  )}
                </div>

                {/* Remember me & Forgot Pass layout row */}
                <div className="flex items-center justify-between pt-0.5 text-xs">

                  {/* Custom Styled Checkbox matching image */}
                  <label className="flex items-center space-x-2 cursor-pointer select-none group text-gray-500 font-medium font-sans">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="sr-only"
                      />
                      <div className={`w-4.5 h-4.5 rounded-md border transition-all duration-300 flex items-center justify-center ${rememberMe
                        ? "bg-[#00BFA6] border-[#00BFA6] scale-105"
                        : "bg-white border-gray-300 group-hover:border-gray-450"
                        }`}>
                        {rememberMe && <Check size={11} className="text-white stroke-[3.5] animate-[checkmark_0.3s_ease-in]" />}
                      </div>
                    </div>
                    <span className="text-[11px] text-gray-600 font-semibold">Remember me</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-[11px] text-[#00BFA6] hover:text-teal-600 hover:underline font-extrabold transition-all duration-200"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Black solid submit click button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading || submitSuccess}
                    className={`w-full text-white transition-all duration-300 font-extrabold text-xs py-4.5 rounded-2xl flex items-center justify-center space-x-2 shadow-sm relative overflow-hidden active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed ${submitSuccess
                      ? "bg-green-600"
                      : "bg-[#040D21] hover:bg-gradient-to-r hover:from-[#00BFA6] hover:to-teal-600 hover:shadow-lg"
                      }`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !loading && !submitSuccess) {
                        handleFormSubmit(e as any);
                      }
                    }}
                  >
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    {submitSuccess ? (
                      <>
                        <CheckCircle className="text-white animate-[scaleIn_0.3s_ease-out]" size={16} />
                        <span className="font-sans">Success!</span>
                      </>
                    ) : loading ? (
                      <>
                        <Disc className="animate-spin text-white" size={13} />
                        <span className="font-sans">Authenticating secure pipeline...</span>
                      </>
                    ) : (
                      <>
                        <span className="font-sans text-[13px] tracking-tight">Sign In</span>
                        <span className="text-sm">→</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* 2.6 REDIRECT LINK TO SIGN UP PAGE */}
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500 font-bold leading-none">
                  Don’t have an account?{" "}
                  <Link href="/signup" className="text-[#00BFA6] hover:underline font-extrabold">
                    Sign Up
                  </Link>
                </p>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* FORGOT PASSWORD MODAL */}
      {showForgotModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-[slideUp_0.3s_ease-out]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black text-[#0D0F14]">Reset Password</h3>
              <button
                onClick={() => setShowForgotModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                  <Mail size={15} />
                </span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full bg-white text-xs border border-gray-200 focus:border-[#00BFA6] rounded-xl py-3 px-4 pl-10.5 outline-none text-[#0D0F14] focus:ring-1 focus:ring-[#00BFA6] shadow-sm transition-all duration-300"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowForgotModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl text-xs font-bold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleForgotPassword}
                  className="flex-1 bg-[#00BFA6] hover:bg-teal-600 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  Send Reset Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
