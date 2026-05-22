import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ShieldCheck, User as UserIcon } from "lucide-react";
import { User } from "../types";

interface NavbarProps {
  user: User;
  onLogout: () => void;
}

export function Navbar({ user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Z symbol and text */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#0D0F14] rounded-lg overflow-hidden shadow-md">
              <span className="text-white font-extrabold text-2xl tracking-tighter">Z</span>
              <div className="absolute right-0 bottom-0 w-3 h-3 bg-[#00BFA6] rounded-tl-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#0D0F14] tracking-tight group-hover:text-[#00BFA6] transition-colors duration-200">
                zenik
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 -mt-1.5">
                studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-[#00BFA6]"
                      : "text-gray-600 hover:text-[#0D0F14]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00BFA6] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Side CTA Button & Login State */}
          <div className="hidden md:flex items-center space-x-4">
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-3 bg-gray-50 border border-gray-100 py-1.5 px-3 rounded-full">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-[#00BFA6]">
                  <UserIcon size={12} />
                </div>
                <span className="text-xs font-semibold text-gray-700 max-w-[100px] truncate">
                  {user.email.split("@")[0]}
                </span>
                <button
                  onClick={onLogout}
                  className="text-xs text-red-500 hover:text-red-700 font-semibold pl-1 border-l border-gray-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-[#0D0F14] transition-colors"
              >
                Sign In
              </Link>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#0D0F14] text-white hover:bg-[#00BFA6] transition-all duration-300 font-medium text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <span>Start a Project</span>
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-4">
            {user.isLoggedIn && (
              <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-[#00BFA6]">
                <UserIcon size={14} />
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0D0F14] hover:text-[#00BFA6] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-in Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-white md:hidden transition-transform duration-300 transform border-t border-gray-100 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 flex flex-col h-full bg-white">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block text-lg font-semibold py-2 border-b border-gray-50 transition-colors ${
                    isActive ? "text-[#00BFA6] pl-2 border-l-2 border-[#00BFA6]" : "text-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {user.isLoggedIn ? (
              <div className="py-4 border-b border-gray-50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-[#00BFA6]">
                    <UserIcon size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{user.email}</p>
                    <p className="text-xs text-gray-500">Logged in via Portal</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block text-lg font-semibold py-2 border-b border-gray-50 transition-colors ${
                    isActive ? "text-[#00BFA6] pl-2 border-l-2 border-[#00BFA6]" : "text-gray-800"
                  }`
                }
              >
                Sign In / Client Portal
              </NavLink>
            )}
          </div>

          <div className="pt-4 mt-auto">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center bg-[#0D0F14] text-white py-3.5 px-6 rounded-full font-bold text-center shadow-md hover:bg-[#00BFA6] transition-colors"
            >
              Start a Project <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
