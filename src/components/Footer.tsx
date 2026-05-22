import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Globe, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#0D0F14] text-gray-400 pt-20 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-gray-900">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg overflow-hidden">
                <span className="text-white font-extrabold text-2xl tracking-tighter">Z</span>
                <span className="absolute right-0 bottom-0 w-3 h-3 bg-[#00BFA6] rounded-tl-full"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight group-hover:text-[#00BFA6] transition-colors">
                  zenik
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#00BFA6] -mt-1.5">
                  studio
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Design, development and security combined. We partner with ambitious brands and enterprises to launch modern digital solutions across the UK & USA.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00BFA6] hover:text-[#0D0F14] text-gray-400 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00BFA6] hover:text-[#0D0F14] text-gray-400 transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00BFA6] hover:text-[#0D0F14] text-gray-400 transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00BFA6] hover:text-[#0D0F14] text-gray-400 transition-all duration-300"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-200">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-200">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-200">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors duration-200 text-[#00BFA6]">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-[#00BFA6] mt-0.5 shrink-0" />
                <a href="mailto:hello@zenik.studio" className="hover:text-white transition-colors">
                  hello@zenik.studio
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-[#00BFA6] mt-0.5 shrink-0" />
                <a href="tel:+442079460958" className="hover:text-white transition-colors">
                  +44 20 7946 0958
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#00BFA6] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-white font-medium">London, UK</span>
                  <span className="text-xs text-gray-500">71-75 Shelton Street, WC2H 9JQ</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#00BFA6] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-white font-medium">New York, USA</span>
                  <span className="text-xs text-gray-500">250 Park Ave, Suite 700, 10177</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Zenik Studio. All rights reserved. Registered UK and US Entity.</p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <Link to="/about" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
