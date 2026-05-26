import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, User as UserIcon, ChevronDown } from "lucide-react";
import type { User } from "../types";
import { serviceCategories } from "../data/servicesData";

interface NavbarProps {
  user: User;
  onLogout: () => void;
}

// Organize services into mega menu columns (exactly 8 categories, 2 per column)
const megaMenuColumns = [
  {
    title: "DESIGN & PRODUCT",
    color: "text-purple-600",
    categories: ["design", "product"]
  },
  {
    title: "DEVELOPMENT",
    color: "text-blue-600",
    categories: ["web", "mobile"]
  },
  {
    title: "MARKETING & GROWTH",
    color: "text-red-600",
    categories: ["marketing", "leadgen"]
  },
  {
    title: "CLOUD & AI",
    color: "text-cyan-600",
    categories: ["cloud", "ai"]
  }
];

export function Navbar({ user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDrop, setShowServicesDrop] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServicesDrop(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!showServicesDrop) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowServicesDrop(false);
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;

      const clickedInsideDropdown = dropdownRef.current?.contains(target);
      const clickedTrigger = servicesTriggerRef.current?.contains(target);
      if (clickedInsideDropdown || clickedTrigger) return;

      setShowServicesDrop(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
    };
  }, [showServicesDrop]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowServicesDrop(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowServicesDrop(false), 200);
  };

  const navLinks = [
    { name: "Services", path: "/services", hasDrop: true },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Zenik Studio Home">
            <div className="w-8 h-8 rounded-lg bg-[#00BFA6] flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              Z
            </div>
            <div className="leading-none">
              <span className="text-xl font-black tracking-tight text-[#0D0F14] block">
                zenik
              </span>
              <span className="text-[8px] font-bold text-gray-400 tracking-[0.2em] uppercase block">
                studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={link.hasDrop ? handleMouseEnter : undefined}
                onMouseLeave={link.hasDrop ? handleMouseLeave : undefined}
              >
                <div className="flex items-center gap-1">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-semibold transition-colors duration-200 ${isActive
                        ? "text-[#0D0F14]"
                        : "text-gray-500 hover:text-[#0D0F14]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>

                  {link.hasDrop && (
                    <button
                      ref={servicesTriggerRef}
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={showServicesDrop}
                      aria-controls="services-mega-menu"
                      onClick={() => setShowServicesDrop((v) => !v)}
                      className="p-1 rounded-md text-gray-500 hover:text-[#0D0F14] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]/30"
                      title="Open services menu"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${showServicesDrop ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mega Dropdown for Services (Moved to header root) */}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {user.isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <UserIcon size={16} />
                  <span>{user.email.split("@")[0]}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="text-xs text-gray-400 hover:text-red-500 font-bold transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-500 hover:text-[#0D0F14] transition-colors"
              >
                Sign in
              </Link>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#0D0F14] text-white hover:bg-[#00BFA6] transition-all duration-300 font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-[#0D0F14] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Dropdown for Services (Odoo Style) */}
      <div
        id="services-mega-menu"
        ref={dropdownRef}
        className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-300 origin-top z-50 ${
          showServicesDrop ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-4 gap-8">
            {megaMenuColumns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-8">
                {serviceCategories
                  .filter((cat) => column.categories.includes(cat.id))
                  .map((category) => (
                    <div key={category.id}>
                      <div className="mb-3 pb-2 relative">
                        <h3 className={`text-[12px] font-bold uppercase tracking-widest ${column.color}`}>
                          {category.name}
                        </h3>
                        <div className={`absolute bottom-0 left-0 w-full h-px ${column.color.replace('text-', 'bg-')} opacity-30`}></div>
                      </div>
                      <ul className="space-y-1">
                        {category.services.slice(0, 2).map((service) => (
                          <li key={service.id}>
                            <Link
                              to="/services"
                              className="text-[13px] text-gray-600 hover:text-[#0D0F14] hover:bg-gray-50 block py-1.5 px-2 -mx-2 rounded-md transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                        {category.services.length > 2 && (
                          <li>
                            <Link
                              to="/services"
                              className="text-[13px] font-semibold text-[#00BFA6] hover:text-[#0D0F14] block py-1.5 px-2 -mx-2 transition-colors"
                            >
                              + {category.services.length - 2} more
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Row */}
        <div className="bg-gray-50 border-t border-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-12">
            <Link to="/services" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0D0F14] transition-colors font-medium">
              <span className="text-gray-400">🌐</span> Third party apps
            </Link>
            <Link to="/work" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0D0F14] transition-colors font-medium">
              <span className="text-gray-400">✏️</span> Zenik Studio
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0D0F14] transition-colors font-medium">
              <span className="text-gray-400">☁️</span> Client Cloud Platform
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-white md:hidden transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 space-y-4 flex flex-col h-full overflow-y-auto">
          {/* Nav Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block text-lg font-bold py-3 border-b border-gray-50 transition-colors ${isActive ? "text-[#00BFA6]" : "text-[#0D0F14]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Service Grid */}
          <div className="py-4">
            <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] block mb-3">
              All Services
            </span>
            <div className="space-y-3">
              {serviceCategories.map((category) => (
                <Link
                  key={category.id}
                  to="/services"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl ${category.bg} ${category.color} flex items-center justify-center shrink-0`}>
                    <span className="text-lg">•</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[#0D0F14]">{category.name}</div>
                    <div className="text-[10px] text-gray-400">{category.services.length} services</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Auth state */}
          {user.isLoggedIn ? (
            <div className="py-3 border-t border-gray-50 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-800 font-medium">
                <UserIcon size={18} />
                <span className="text-sm">{user.email}</span>
              </div>
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="text-red-500 font-bold text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="block text-lg font-bold py-3 border-b border-gray-50 text-[#0D0F14]"
            >
              Sign In
            </NavLink>
          )}

          {/* Bottom CTA */}
          <div className="pt-4 mt-auto">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center bg-[#0D0F14] text-white py-3.5 px-6 rounded-full font-bold text-center hover:bg-[#00BFA6] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
