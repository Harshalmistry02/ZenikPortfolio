import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Work } from "./pages/Work";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { User } from "./types";

// ScrollToTop component ensuring smooth page transitions on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function AppContent({
  user,
  onLogin,
  onLogout
}: {
  user: User;
  onLogin: (email: string) => void;
  onLogout: () => void;
}) {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 antialiased font-sans">
      {/* Hide header on /login or /signup */}
      {!isAuthPage && <Navbar user={user} onLogout={onLogout} />}

      {/* Core Screen Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login user={user} onLogin={onLogin} onLogout={onLogout} />}
          />
          <Route
            path="/signup"
            element={<SignUp user={user} onLogin={onLogin} />}
          />
        </Routes>
      </main>

      {/* Hide footer on /login or /signup */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState<User>(() => {
    // Attempt load from localStorage to showcase persistence
    const saved = localStorage.getItem("zenik_auth");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return { email: "", isLoggedIn: false };
  });

  const handleLogin = (email: string) => {
    const updated = { email, isLoggedIn: true };
    setUser(updated);
    localStorage.setItem("zenik_auth", JSON.stringify(updated));
  };

  const handleLogout = () => {
    const updated = { email: "", isLoggedIn: false };
    setUser(updated);
    localStorage.removeItem("zenik_auth");
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContent user={user} onLogin={handleLogin} onLogout={handleLogout} />
    </Router>
  );
}
