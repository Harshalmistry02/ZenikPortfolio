import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail, Lock, User as UserIcon, Eye, EyeOff, ArrowLeft, Disc, AlertCircle, Check
} from "lucide-react";
import { HanddrawnUnderline } from "../components/Squiggle";

interface SignUpProps {
  user: { email: string; isLoggedIn: boolean };
  onLogin: (email: string) => void;
}

export function SignUp({ user, onLogin }: SignUpProps) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) {
      setErrorText("Please state your registered or full corporate name.");
      return;
    }
    if (!emailInput.trim()) {
      setErrorText("Workspace email is required.");
      return;
    }
    if (passwordInput.length < 8) {
      setErrorText("Pass keys must contain at least 8 characters with uppercase, lowercase, number, and symbol.");
      return;
    }
    if (!termsAgreed) {
      setErrorText("To provision workspace targets, you must accept policy terms.");
      return;
    }

    setErrorText("");
    setLoading(true);

    try {
      const csrfResponse = await fetch("/api/auth/csrf", { credentials: "include" });
      const { csrfToken } = await csrfResponse.json();
      const [firstName, ...lastNameParts] = nameInput.trim().split(/\s+/);
      const usernameBase = emailInput.split("@")[0].replace(/[^a-zA-Z0-9_-]/g, "").toLowerCase();

      const response = await fetch("/api/auth/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
          email: emailInput,
          username: usernameBase,
          password: passwordInput,
          firstName,
          lastName: lastNameParts.join(" ") || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        const details = data.details?.map((item: { message: string }) => item.message).join(" ");
        setErrorText(details || data.error || "Unable to create your account.");
        setLoading(false);
        return;
      }

      onLogin(data.user.email);
      setLoading(false);
      router.push("/");
    } catch {
      setErrorText("Secure account creation is unavailable right now. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] flex relative overflow-hidden font-sans selection:bg-teal-100 selection:text-teal-900">

      {/* 1. FLOATING REDIRECT HOME ICON TO ROLLBACK TO MAIN PAGE */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center justify-center space-x-2 bg-white border border-gray-200/80 text-[#00BFA6] hover:text-zinc-950 shadow-sm hover:shadow-md transition-all px-4 py-2.5 rounded-full group"
        title="Rollback to main website home"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold font-mono tracking-tight text-zinc-950">Back to website</span>
      </Link>

      {/* CENTERED FORM */}
      <div className="flex w-full min-h-screen items-center justify-center px-4 py-20">

        <div className="w-full max-w-lg bg-white rounded-4xl border border-gray-100 shadow-[0_20px_50px_rgba(13,15,20,0.03)] p-8 sm:p-11 relative animate-fadeIn">

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
                  PRO PORTAL ACTIVE
                </span>
                <h1 className="text-2xl font-black text-zinc-950 tracking-tight">
                  Secured Client Session
                </h1>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                  Logged in workspace: <strong className="text-gray-800">{user.email}</strong>
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <Link
                  href="/"
                  className="w-full bg-zinc-950 hover:bg-[#00BFA6] text-white py-4 rounded-xl text-xs font-black transition-all block text-center shadow-sm"
                >
                  Go to Dashboard Target
                </Link>
              </div>
            </div>

          ) : (

            /* SIGN UP FORM PANEL */
            <div className="space-y-7">

              {/* 2.1 APP LOGO BLOCK */}
              <div className="flex items-center space-x-2 text-left justify-start">
                <div className="w-8 h-8 rounded-lg bg-[#00BFA6] flex items-center justify-center text-white font-black text-xl shadow-sm">
                  Z
                </div>
                <div className="leading-none">
                  <span className="text-base font-black tracking-tight text-zinc-950 block">zenik</span>
                  <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase block">tech</span>
                </div>
              </div>

              {/* 2.2 WELCOME SUBTITLE WITH SLANTED TICK/LINES */}
              <div className="space-y-2 text-left pt-1">
                <div className="flex items-center space-x-1 text-[#00BFA6]">
                  <span className="text-[10px] font-black uppercase tracking-widest font-mono">
                    START YOUR PIPELINE
                  </span>
                  {/* Double slanted lines matching sketched image style exactly */}
                  <svg className="w-4 h-3 text-[#00BFA6]" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M3 10 L8 2" />
                    <path d="M8 10 L13 2" />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-[32px] font-black text-zinc-950 tracking-tight leading-[1.05]">
                  Create your account<span className="text-[#00BFA6] font-black">.</span>
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
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center space-x-2 animate-shake text-left">
                  <AlertCircle size={14} className="shrink-0" />
                  <span className="leading-snug">{errorText}</span>
                </div>
              )}

              {/* 2.3 MAIN FORM BLOCK */}
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">

                {/* Name field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black tracking-wider text-gray-400 font-mono block uppercase">
                    Workspace Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <UserIcon size={15} />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="John Doe / Company Ltd"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="w-full bg-white focus:bg-white text-xs border border-gray-200 focus:border-[#00BFA6] rounded-xl py-3 px-4 pl-10.5 outline-none text-zinc-950 focus:ring-1 focus:ring-[#00BFA6] shadow-sm transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black tracking-wider text-gray-400 font-mono block uppercase">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <Mail size={15} />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full bg-white focus:bg-white text-xs border border-gray-200 focus:border-[#00BFA6] rounded-xl py-3 px-4 pl-10.5 outline-none text-zinc-950 focus:ring-1 focus:ring-[#00BFA6] shadow-sm transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black tracking-wider text-gray-400 font-mono block uppercase">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                      <Lock size={15} />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Create workspace key"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      className="w-full bg-white focus:bg-white text-xs border border-gray-200 focus:border-[#00BFA6] rounded-xl py-3 px-4 pl-10.5 pr-10 outline-none text-zinc-950 focus:ring-1 focus:ring-[#00BFA6] shadow-sm transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-[#00BFA6] transition-colors"
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                {/* Terms option alignment */}
                <div className="flex items-center pt-0.5 text-xs">
                  <label className="flex items-center space-x-2 cursor-pointer select-none group text-gray-500 font-medium font-sans">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={termsAgreed}
                        onChange={() => setTermsAgreed(!termsAgreed)}
                        className="sr-only"
                      />
                      <div className={`w-4.5 h-4.5 rounded-md border transition-all flex items-center justify-center ${termsAgreed
                        ? "bg-[#00BFA6] border-[#00BFA6]"
                        : "bg-white border-gray-300 group-hover:border-gray-450"
                        }`}>
                        {termsAgreed && <Check size={11} className="text-white stroke-[3.5]" />}
                      </div>
                    </div>
                    <span className="text-[10.5px] text-gray-600 font-semibold leading-relaxed">
                      I agree to the <span className="text-[#00BFA6] font-bold">Terms of Service</span> & <span className="text-[#00BFA6] font-bold">Privacy Statement</span>.
                    </span>
                  </label>
                </div>

                {/* Sign Up Action Trigger */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#040D21] text-white hover:bg-[#00BFA6] transition-colors duration-300 font-extrabold text-xs py-4.5 rounded-2xl flex items-center justify-center space-x-2 shadow-sm relative overflow-hidden active:scale-98 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Disc className="animate-spin text-white" size={13} />
                        <span className="font-sans">Provisioning workspace ID...</span>
                      </>
                    ) : (
                      <>
                        <span className="font-sans text-[13px] tracking-tight">Sign Up</span>
                        <span className="text-sm">→</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* 2.6 REDIRECT LINK TO LOGIN PAGE */}
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500 font-bold leading-none">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#00BFA6] hover:underline font-extrabold">
                    Sign In
                  </Link>
                </p>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
