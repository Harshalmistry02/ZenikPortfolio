import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, User as UserIcon, LogIn, Disc, AlertCircle, Sparkles } from "lucide-react";
import { Squiggle } from "../components/Squiggle";

interface LoginProps {
  user: { email: string; isLoggedIn: boolean };
  onLogin: (email: string) => void;
  onLogout: () => void;
}

export function Login({ user, onLogin, onLogout }: LoginProps) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      onLogin(emailInput);
      setLoading(false);
      navigate("/");
    }, 1200);
  };

  const handleOAuthSimulate = (provider: string) => {
    setLoading(true);
    setErrorText("");
    setTimeout(() => {
      onLogin(`pioneer.${provider.toLowerCase()}@zenik.studio`);
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen flex items-center justify-center p-4">
      
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8 space-y-8 relative">
        <div className="absolute top-0 right-0 w-16 h-16 bg-teal-50 rounded-bl-full -z-10"></div>

        {user.isLoggedIn ? (
          /* Profile / Already Logged In State */
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center text-[#00BFA6] mx-auto animate-pulse">
              <UserIcon size={24} />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-[#0D0F14]">Client Portal Active</h2>
              <p className="text-xs text-[#00BFA6] font-mono uppercase bg-teal-50 py-1 px-3 rounded-full inline-block font-semibold">
                Logged in as: {user.email}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl text-left space-y-3">
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold font-mono">
                <span>PORTAL TOKEN STATUS</span>
                <span className="text-emerald-500">SECURE ACTIVE</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Welcome to Zenik Studio Client Workspace. Here you can monitor project staging pipelines, review legal GRC compliance reports, and exchange direct messages with your engineering lead.
              </p>
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                to="/"
                className="w-full bg-[#0D0F14] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#00BFA6] hover:text-white transition-colors block text-center"
              >
                Go to Homepage
              </Link>
              <button
                onClick={onLogout}
                className="w-full bg-red-50 text-red-600 font-bold py-3 rounded-xl text-xs hover:bg-red-100 transition-colors"
              >
                Sign Out / Terminate Session
              </button>
            </div>
          </div>
        ) : (
          /* Login Dialog Card State */
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-[#00BFA6] uppercase tracking-wider font-mono">
                <ShieldCheck size={12} />
                <span>ZENIK ENG SECURE ENTRANCE</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-black text-[#0D0F14] tracking-tight">
                Client Workspace
              </h1>
              
              <p className="text-xs text-gray-500 leading-relaxed font-normal">
                Access your staging targets, milestones tracker, and team dispatch files.
              </p>
            </div>

            {errorText && (
              <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center space-x-2">
                <AlertCircle size={14} className="shrink-0" />
                <span className="leading-snug">{errorText}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold font-mono text-gray-400 block uppercase">WORKSPACE EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-[#F5F5F5] focus:bg-white text-xs border border-transparent focus:border-[#00BFA6] rounded-xl py-3 px-4 outline-none text-[#0D0F14] focus:ring-1 focus:ring-[#00BFA6] transition-all duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold font-mono text-gray-400 block uppercase">ACCESS KEY / PASS</label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); setErrorText("Check standard email files or ask your account strategist."); }} className="text-[10px] text-[#00BFA6] hover:underline font-semibold">Forgot Key?</a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-[#F5F5F5] focus:bg-white text-xs border border-transparent focus:border-[#00BFA6] rounded-xl py-3 px-4 outline-none text-[#0D0F14] focus:ring-1 focus:ring-[#00BFA6] transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0D0F14] text-white hover:bg-[#00BFA6] transition-colors font-bold text-xs py-3.5 rounded-xl flex items-center justify-center space-x-2 shadow-md"
              >
                {loading ? (
                  <>
                    <Disc className="animate-spin text-white" size={12} />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <LogIn size={12} />
                    <span>Sign In to Portal</span>
                  </>
                )}
              </button>
            </form>

            {/* Separator Line */}
            <div className="relative flex items-center justify-center py-2 h-2 text-xs text-gray-400">
              <span className="w-full border-t border-gray-100" />
              <span className="bg-white px-3 font-mono text-[9px] uppercase tracking-wider shrink-0 text-gray-400 font-bold">OR SIMULATE OAUTH</span>
              <span className="w-full border-t border-gray-100" />
            </div>

            {/* Simulated OAuth Integrations */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleOAuthSimulate("Google")}
                className="flex items-center justify-center space-x-2 bg-gray-50 border border-gray-100 hover:border-gray-300 py-3 rounded-xl transition-all font-semibold text-xs text-gray-700"
              >
                <GoogleLogo />
                <span>Google Auth</span>
              </button>

              <button
                type="button"
                onClick={() => handleOAuthSimulate("GitHub")}
                className="flex items-center justify-center space-x-2 bg-[#0D0F14] text-white hover:bg-gray-800 py-3 rounded-xl transition-all font-semibold text-xs"
              >
                <GitHubLogo />
                <span>GitHub Auth</span>
              </button>
            </div>

            {/* Foot note */}
            <div className="text-center">
              <Link to="/about" className="text-[10px] text-gray-400 hover:text-[#00BFA6] font-medium leading-relaxed">
                Need client portal onboarding parameters? Read compliance docs
              </Link>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

// Minimal vector Logos
function GoogleLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}
