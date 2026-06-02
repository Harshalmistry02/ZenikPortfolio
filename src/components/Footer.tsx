"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Github, Globe } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#212529] text-[#adb5bd] pt-0 pb-8 text-sm">
      {/* Newsletter Strip */}
      <div className="bg-[#1a1e24] py-8 mb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-white font-medium text-base">Get updates on new services and projects</p>
          <NewsletterSignup />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 pb-12 border-b border-gray-700">
          
          {/* Column 1: Brand & Bio */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block text-white">
              <span className="text-4xl font-black tracking-tighter lowercase">
                zenik
              </span>
            </Link>
            <p className="text-sm max-w-sm leading-relaxed">
              Design, development and security combined. We partner with ambitious brands to launch modern digital solutions across the UK & USA.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
            <div className="flex items-center space-x-3 pt-4">
              <span className="text-[9px] font-bold uppercase border border-gray-700 px-2 py-1 rounded-full text-gray-500">ISO 27001</span>
              <span className="text-[9px] font-bold uppercase border border-gray-700 px-2 py-1 rounded-full text-gray-500">GDPR Compliant</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="col-span-1">
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/#" className="hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@zenik.studio" className="hover:text-white transition-colors">
                  hello@zenik.studio
                </a>
              </li>
              <li>
                <a href="tel:+442079460958" className="hover:text-white transition-colors">
                  +44 20 7946 0958
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-white font-medium mb-1">London, UK</span>
                <span className="block">71-75 Shelton Street, WC2H 9JQ</span>
              </li>
              <li className="pt-2">
                <span className="block text-white font-medium mb-1">New York, USA</span>
                <span className="block">250 Park Ave, Suite 700, 10177</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© 2026 Zenik Studio. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms</Link>
            <button className="hover:text-white transition-colors text-left">Cookie Settings</button>
            <Link href="/about" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
