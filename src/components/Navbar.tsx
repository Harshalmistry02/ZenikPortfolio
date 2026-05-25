import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, User as UserIcon, ChevronDown } from "lucide-react";
import type { User } from "../types";
import { serviceCategories } from "../data/servicesData";

interface NavbarProps {
  user: User;
  onLogout: () => void;
}

// Organize services into mega menu columns
const megaMenuColumns = [
  {
    title: "DESIGN & CREATIVE",
    color: "text-purple-600",
    categories: ["design"]
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
    title: "INFRASTRUCTURE",
    color: "text-cyan-600",
    categories: ["cloud", "email", "ai", "product"]
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

                {/* Mega Dropdown for Services */}
                {link.hasDrop && showServicesDrop && (
                  <div
                    id="services-mega-menu"
                    ref={dropdownRef}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[min(900px,calc(100vw-2rem))] bg-white rounded-[28px] border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden animate-fade-down z-50 max-h-[75vh] overflow-y-auto scrollbar-none"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    role="menu"
                  >
                    {/* Arrow pointer */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45" />

                    <div className="p-8">
                      <div className="grid grid-cols-4 gap-6">
                        {megaMenuColumns.map((column, colIdx) => (
                          <div key={colIdx} className="space-y-4">
                            {/* Column Header */}
                            <div className="pb-3 border-b border-gray-100">
                              <h3 className={`text-[10px] font-black uppercase tracking-[0.15em] ${column.color}`}>
                                {column.title}
                              </h3>
                            </div>

                            {/* Services in this column */}
                            <div className="space-y-1">
                              {serviceCategories
                                .filter(cat => column.categories.includes(cat.id))
                                .map((category) => (
                                  <div key={category.id}>
                                    <Link
                                      to="/services"
                                      className="block py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                      <div className="flex items-start gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${category.bg} mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        <div className="flex-1 min-w-0">
                                          <div className="text-xs font-bold text-[#0D0F14] group-hover:text-[#00BFA6] transition-colors leading-tight">
                                            {category.name}
                                          </div>
                                          <div className="text-[10px] text-gray-400 mt-0.5 leading-tight line-clamp-1">
                                            {category.services.length} services
                                          </div>
                                        </div>
                                      </div>
                                    </Link>

                                    {/* Show first 3 services as sub-items */}
                                    <div className="ml-6 mt-1 space-y-0.5">
                                      {category.services.slice(0, 3).map((service) => (
                                        <Link
                                          key={service.id}
                                          to="/services"
                                          className="block py-1 px-2 text-[10px] text-gray-500 hover:text-[#00BFA6] transition-colors leading-tight"
                                        >
                                          {service.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Bar */}
                      <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="text-xs text-gray-500">
                            <span className="font-black text-[#00BFA6]">150+</span> services available
                          </div>
                          <div className="text-xs text-gray-500">
                            <span className="font-black text-[#00BFA6]">9</span> categories
                          </div>
                        </div>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#00BFA6] hover:bg-[#0D0F14] px-4 py-2 rounded-full transition-colors"
                        >
                          View All Services
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
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
