"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User as UserIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { User } from "../types";
import { serviceCategories } from "../data/servicesData";

interface NavbarProps {
  user: User;
  onLogout: () => void;
}

const megaMenuColumns = [
  {
    categories: ["design", "product"]
  },
  {
    categories: ["web", "mobile"]
  },
  {
    categories: ["marketing", "leadgen"]
  },
  {
    categories: ["cloud", "ai"]
  }
];

export function Navbar({ user, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDrop, setShowServicesDrop] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServicesDrop(false);
  }, [pathname]);

  useEffect(() => {
    if (!showServicesDrop) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowServicesDrop(false);
    };
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target || dropdownRef.current?.contains(target)) return;
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Zenik Tech Home">
            <div className="w-8 h-8 rounded-lg bg-[#00BFA6] flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              Z
            </div>
            <div className="leading-none">
              <span className="text-xl font-black tracking-tight text-[#0D0F14] block">
                zenik
              </span>
              <span className="text-[8px] font-bold text-gray-400 tracking-[0.2em] uppercase block">
                tech
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={link.hasDrop ? handleMouseEnter : undefined}
                  onMouseLeave={link.hasDrop ? handleMouseLeave : undefined}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={link.path}
                      className={
                        `relative text-sm font-semibold transition-colors duration-200 ${isActive
                          ? "text-[#0D0F14] after:absolute after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#00BFA6] after:rounded-full"
                          : "text-gray-500 hover:text-[#0D0F14]"
                        }`
                      }
                    >
                      {link.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </nav>

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
                href="/login"
                className="text-sm font-semibold text-gray-500 hover:text-[#0D0F14] transition-colors"
              >
                Sign in
              </Link>
            )}

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0D0F14] text-white hover:bg-[#00BFA6] transition-all duration-300 font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md"
            >
              Start a Project
            </Link>
          </div>

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

      <div
        id="services-mega-menu"
        ref={dropdownRef}
        className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-300 origin-top z-50 ${showServicesDrop ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
          }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-4 gap-8">
            {megaMenuColumns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-8">
                {serviceCategories
                  .filter((cat) => column.categories.includes(cat.id))
                  .map((category) => {
                    const IconComp = (LucideIcons as any)[category.icon] || LucideIcons.Circle;
                    return (
                      <div key={category.id}>
                        <div className="mb-3 pb-2 flex items-center gap-2">
                          <IconComp size={14} className={category.color} />
                          <h3 className={`text-[11px] font-black uppercase tracking-widest ${category.color}`}>
                            {category.name}
                          </h3>
                        </div>
                        <ul className="space-y-1">
                          {category.services.slice(0, 4).map((service) => (
                            <li key={service.id}>
                              <Link
                                href={`/services/${service.id}`}
                                className="text-[13px] text-gray-600 hover:text-[#0D0F14] py-1 transition-colors block"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 py-4">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-center gap-12">
            <Link href="/services" className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#0D0F14] transition-colors font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]"></span> View all 90+ services →
            </Link>
            <Link href="/work" className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#0D0F14] transition-colors font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]"></span> See our work →
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-[#0D0F14] transition-colors font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA6]"></span> Get a quote →
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[60px] z-40 bg-white md:hidden transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 space-y-4 flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block text-lg font-bold py-3 border-b border-gray-50 transition-colors ${isActive ? "text-[#00BFA6]" : "text-[#0D0F14]"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="py-4">
            <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] block mb-3">
              All Services
            </span>
            <div className="space-y-3">
              {serviceCategories.map((category) => {
                const IconComp = (LucideIcons as any)[category.icon] || LucideIcons.Circle;
                return (
                  <Link
                    key={category.id}
                    href={`/services/${category.id}`}
                    className="flex items-center gap-3 py-2 transition-colors"
                  >
                    <IconComp size={20} className={category.color} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-[#0D0F14]">{category.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

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
            <Link
              href="/login"
              className="block text-lg font-bold py-3 border-b border-gray-50 text-[#0D0F14]"
            >
              Sign In
            </Link>
          )}

          <div className="pt-4 mt-auto">
            <Link
              href="/contact"
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
