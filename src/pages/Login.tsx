import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      setErrorText("Please enter your registered workspace email.");
      return;
    }
    if (passwordInput.length < 6) {
      setErrorText("Workspace access keys must contain at least 6 characters.");
      return;
    }

    setErrorText("");
    setLoading(true);

    // Simulate short loader for premium experience
    setTimeout(() => {
      setSubmitSuccess(true);
      setTimeout(() => {
        onLogin(emailInput);
        setLoading(false);
        navigate("/");
      }, 800);
    }, 1200);
  };

  const handleOAuthSimulate = (provider: string) => {
    setOauthLoading(provider);
    setErrorText("");
    setTimeout(() => {
      onLogin(`pioneer.${provider.toLowerCase()}@zenik.studio`);
      setOauthLoading(null);
      navigate("/");
    }, 1000);
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
        to="/"
        className="absolute top-6 left-6 z-50 flex items-center justify-center space-x-2 bg-white border border-[#00BFA6]/30 text-[#00BFA6] hover:text-[#0D0F14] hover:bg-[#00BFA6]/5 shadow-sm hover:shadow-md transition-all px-4 py-2.5 rounded-full group"
        title="Return to main site"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-xs font-bold font-mono tracking-tight text-[#0D0F14]">Back to website</span>
      </Link>

      {/* 2. FULL GRID SPLIT DESIGN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-screen">

        {/* LEFT COLUMN: AUTH FORM PANEL (Padded nicely, Centered) */}
        <div className="lg:col-span-5 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-20 bg-[#FAF9F5]/30">

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
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none">studio</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <span className="text-[10px] text-[#00BFA6] font-black uppercase font-mono tracking-widest bg-teal-50 px-3 py-1 rounded-full inline-block">
                    PRO PORTAL ACTIVE
                  </span>
                  <h1 className="text-2xl font-black text-[#0D0F14] tracking-tight">
                    Secured Client Session
                  </h1>
                  <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                    Logged in workspace: <strong className="text-gray-800">{user.email}</strong>
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-150/50 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-[9px] text-[#00BFA6] font-bold font-mono uppercase">
                    <span>Target Tunnel Pipeline</span>
                    <span>Synchronized</span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    You have active pipelines registered under this identity. Head back to the consulting directory to review ongoing architectural staging, or safe terminate below.
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <Link
                    to="/"
                    className="w-full bg-[#0D0F14] hover:bg-[#00BFA6] text-white py-4 rounded-xl text-xs font-black transition-all block text-center shadow-sm"
                  >
                    Go to Dashboard Target
                  </Link>
                  <button
                    onClick={onLogout}
                    className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl text-xs font-bold transition-all block text-center"
                  >
                    Terminate Secure Connection
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
                    <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase block">studio</span>
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

                {/* 2.4 OR CONTINUE WITH SEPARATOR STYLE */}
                <div className="relative flex items-center justify-center py-1.5 h-2 text-xs text-gray-400 select-none">
                  <span className="w-full border-t border-gray-150/65" />
                  <span className="bg-white px-3 font-semibold text-[9.5px] uppercase tracking-wide shrink-0 text-gray-400 font-mono">
                    or continue with
                  </span>
                  <span className="w-full border-t border-gray-150/65" />
                </div>

                {/* 2.5 OAUTH SIMULATION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 pb-2">
                  <button
                    type="button"
                    onClick={() => handleOAuthSimulate("Google")}
                    disabled={oauthLoading !== null}
                    className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-blue-300 py-3 px-2 rounded-xl transition-all duration-300 font-bold text-xs text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                    title="Continue with Google"
                  >
                    {oauthLoading === "Google" ? (
                      <Disc className="animate-spin w-4 h-4 text-blue-500" />
                    ) : (
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                      </svg>
                    )}
                    <span className="font-sans text-[11px] leading-none shrink-0 text-gray-800 truncate">Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOAuthSimulate("GitHub")}
                    disabled={oauthLoading !== null}
                    className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-gray-800 py-3 px-2 rounded-xl transition-all duration-300 font-bold text-xs text-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                    title="Continue with GitHub"
                  >
                    {oauthLoading === "GitHub" ? (
                      <Disc className="animate-spin w-4 h-4 text-gray-800" />
                    ) : (
                      <svg className="w-4 h-4 shrink-0 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    )}
                    <span className="font-sans text-[11px] leading-none shrink-0 text-gray-800 truncate">GitHub</span>
                  </button>
                </div>

                {/* 2.6 REDIRECT LINK TO SIGN UP PAGE */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500 font-bold leading-none">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-[#00BFA6] hover:underline font-extrabold">
                      Sign Up
                    </Link>
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* RIGHT COLUMN: GORGEOUS ZENIK BRANDED OFFICE COLLAGE (Desktop Only) */}
        <div className="hidden lg:col-span-7 lg:flex items-center justify-center bg-stone-100 p-8 select-none relative overflow-hidden">

          {/* Main frame wrapping simulating office space perfectly */}
          <div className="w-full h-full rounded-[40px] overflow-hidden relative border border-white/20 shadow-2xl">

            {/* Real aesthetic corporate background overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center filter saturate-[1.05] brightness-[1.02]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80')"
              }}
            >
              {/* Soft warm sun ray styled color masking */}
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/40 via-white/5 to-white/10 mix-blend-overlay"></div>
            </div>

            {/* ART OVERLAY: 3D-styled glass board on the partition wall mimicking text "BUILD CREATE GROW" */}
            <div className="absolute left-1/5 top-1/3 p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-lg text-left select-none max-w-xs transform -rotate-1 group hover:rotate-0 transition-transform duration-300">
              <span className="block text-[11px] font-mono tracking-widest text-slate-800 font-black mb-2 uppercase opacity-80">
                OUR PHILOSOPHY
              </span>
              <h3 className="font-sans font-black text-2xl text-slate-950 tracking-wide uppercase leading-tight">
                BUILD <br />
                CREATE <br />
                GROW
              </h3>
              <div className="w-8 h-1 bg-[#00BFA6] rounded-full mt-3"></div>
            </div>

            {/* ART OVERLAY: Wall branding 3D styled logo (Z zenik studio) */}
            <div className="absolute right-12 top-1/4 p-10 bg-white/30 backdrop-blur-xl border border-white/35 rounded-3xl text-center select-none shadow-2xl max-w-sm flex flex-col items-center justify-center transform hover:scale-[1.02] transition-transform duration-300">

              {/* Giant volumetric teal Z logo */}
              <div className="relative w-28 h-28 flex items-center justify-center group mb-4">
                {/* 3D Drop shadow depth helper */}
                <div className="absolute top-1 left-1 opacity-20 text-[#00BFA6]/40 text-8xl font-black font-sans pointer-events-none select-none">
                  Z
                </div>

                {/* Visual main letter Z marker */}
                <span className="text-[104px] font-black text-[#00BFA6] tracking-tighter leading-none relative drop-shadow-[0_15px_30px_rgba(0,191,166,0.35)] filter saturate-120 animate-wiggle">
                  Z
                </span>

                {/* Sparkling overlays */}
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                </div>
              </div>

              {/* Identity taglines */}
              <div className="space-y-1">
                <span className="block text-3xl font-black text-[#0D0F14] tracking-tight leading-none uppercase">
                  zenik
                </span>
                <span className="block text-xs font-mono font-bold tracking-[0.45em] text-[#0D0F14]/70 uppercase leading-none">
                  studio
                </span>
              </div>

              <div className="mt-5 px-3.5 py-1 bg-teal-950/20 rounded-full border border-teal-900/30">
                <p className="text-[10px] font-black tracking-wider text-teal-800 uppercase font-mono">
                  PRO LEVEL CREATIVE DIGITAL DIVISION
                </p>
              </div>

            </div>

            {/* Subtle branding coordinates marker on the footer boundary */}
            <div className="absolute bottom-6 left-8 flex items-center space-x-2 text-white/50 font-mono text-[9px] select-none uppercase tracking-widest bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping"></span>
              <span>Workspace Active Node: LDN-NYC</span>
            </div>

          </div>

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
