import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-un-navy/95 backdrop-blur-md text-white z-50 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Left Corner: Logo & Branding */}
          <Link 
            to="/" 
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="Urbannest Pro Home"
          >
            {/* Vector Emblem Logo */}
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-b from-slate-800 to-un-navy border border-un-gold/40 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="relative flex flex-col items-center justify-center">
                {/* Roof Peak Icon */}
                <svg className="w-5 h-5 text-emerald-400 -mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l9-9 9 9" />
                </svg>
                {/* UN Text Monogram */}
                <span className="font-black text-[10px] tracking-tighter text-white">UN</span>
              </div>
            </div>

            {/* Typography Lockup */}
            <div className="flex flex-col">
              <div className="text-base sm:text-lg md:text-xl font-black tracking-wider leading-none flex items-center gap-1">
                <span className="text-white">URBAN</span>
                <span className="text-emerald-400">NEST</span>
                <span className="text-un-gold">PRO</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] text-slate-300 uppercase mt-1">
                Sapno Se Ghar Tak
              </span>
            </div>
          </Link>

          {/* 2. Middle Block: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 font-bold text-sm tracking-wide">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 py-1 border-b-2 ${
                  isActive(link.path)
                    ? 'text-un-gold border-un-gold'
                    : 'text-slate-200 border-transparent hover:text-un-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Right Corner: Desktop Call To Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-un-gold hover:bg-yellow-500 text-un-navy font-black text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile/Tablet) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-slate-200 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-un-gold"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  // Close Icon (X)
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z"
                  />
                ) : (
                  // Hamburger Lines Icon
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* 4. Mobile Drawer & Backdrop Overlay */}
      {/* Semi-transparent Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-20 left-0 w-full bg-un-navy border-b border-un-gold/20 shadow-2xl transition-all duration-300 ease-in-out md:hidden z-50 overflow-hidden ${
          isOpen ? 'max-h-[calc(100vh-5rem)] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-6 space-y-4 flex flex-col">
          {[
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold py-2 border-l-4 pl-3 transition-colors ${
                isActive(link.path)
                  ? 'border-un-gold text-un-gold bg-white/[0.03]'
                  : 'border-transparent text-slate-200 hover:text-un-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-white/10">
            <Link
              to="/contact"
              className="block w-full bg-un-gold hover:bg-yellow-500 text-un-navy font-black text-center py-3.5 rounded-xl shadow-lg uppercase tracking-wider text-sm"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}