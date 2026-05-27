import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail, Lock, User as UserIcon, Eye, EyeOff, ArrowLeft, Disc, AlertCircle, Check
} from "lucide-react";
import { HanddrawnUnderline, Sparkles } from "../components/Squiggle";

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

  const handleOAuthSimulate = (provider: string) => {
    setLoading(true);
    setErrorText("");
    setTimeout(() => {
      onLogin(`pioneer.${provider.toLowerCase()}@zenik.studio`);
      setLoading(false);
      router.push("/");
    }, 1000);
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

      {/* 2. FULL GRID SPLIT DESIGN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full min-h-screen">

        {/* LEFT COLUMN: AUTH FORM PANEL (Padded nicely, Centered) */}
        <div className="lg:col-span-5 flex items-center justify-center px-4 sm:px-8 lg:px-12 py-20 bg-[#FAF9F5]/30">

          <div className="w-full max-w-lg bg-white rounded-4xl border border-gray-100 shadow-[0_20px_50px_rgba(13,15,20,0.03)] p-8 sm:p-11 relative animate-fadeIn">

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
                    <span className="text-[9px] text-gray-400 font-bold tracking-widest uppercase block">studio</span>
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
                    className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-gray-300 py-3 px-2 rounded-xl transition-all font-bold text-xs text-gray-700 shadow-sm hover:bg-gray-50 cursor-pointer"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                    <span className="font-sans text-[11px] leading-none shrink-0 text-gray-800">Continue with Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOAuthSimulate("GitHub")}
                    className="flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:border-gray-300 py-3 px-2 rounded-xl transition-all font-bold text-xs text-gray-700 shadow-sm hover:bg-gray-50 cursor-pointer"
                  >
                    <svg className="w-4 h-4 shrink-0 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span className="font-sans text-[11px] leading-none shrink-0 text-gray-800">Continue with GitHub</span>
                  </button>
                </div>

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
              <div className="absolute inset-0 bg-linear-to-tr from-stone-900/40 via-white/5 to-white/10 mix-blend-overlay"></div>
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
                <span className="block text-3xl font-black text-zinc-950 tracking-tight leading-none uppercase">
                  zenik
                </span>
                <span className="block text-xs font-mono font-bold tracking-[0.45em] text-zinc-950/70 uppercase leading-none">
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

    </div>
  );
}
