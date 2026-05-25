import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, User as UserIcon } from "lucide-react";
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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with simple text */}
          <Link to="/" className="flex items-center text-[#017A84] hover:text-[#0D0F14] transition-colors">
            <span className="text-3xl font-black tracking-tighter lowercase">
              zenik
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Side CTA Button & Login State */}
          <div className="hidden md:flex items-center space-x-6">
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <UserIcon size={16} />
                  <span>{user.email.split("@")[0]}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-sm text-gray-500 hover:text-red-500 font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Sign in
              </Link>
            )}

            <Link
              to="/signup"
              className="inline-flex items-center justify-center bg-[#714B67] text-white hover:bg-[#5c3c54] transition-all duration-300 font-bold text-sm px-6 py-2.5 rounded"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-in Menu Overlay */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-white md:hidden transition-transform duration-300 transform border-t border-gray-100 ${
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
                    isActive ? "text-[#017A84]" : "text-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {user.isLoggedIn ? (
              <div className="py-4 border-b border-gray-50 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-800 font-medium">
                  <UserIcon size={18} />
                  <span>{user.email}</span>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="text-red-500 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="block text-lg font-semibold py-2 border-b border-gray-50 text-gray-800"
              >
                Sign In
              </NavLink>
            )}
          </div>

          <div className="pt-4 mt-auto">
            <Link
              to="/signup"
              className="w-full inline-flex items-center justify-center bg-[#714B67] text-white py-3.5 px-6 rounded font-bold text-center hover:bg-[#5c3c54] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
