import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-un-navy text-white z-50 shadow-md min-h-20 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 flex flex-col md:flex-row justify-between md:items-center py-2 md:py-0">
        
        {/* Top Bar (Logo & Mobile Menu Trigger) */}
        <div className="flex justify-between items-center w-full md:w-auto h-16 md:h-20">
          {/* 1. Left Corner: Logo */}
          <Link to="/" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}>
            <img 
              src={logoImg} 
              alt="Urbannest Pro" 
              className="h-16 w-auto object-contain rounded" 
            />
          </Link>

          {/* Hamburger Button (Visible only on mobile) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            <svg 
              className="h-6 w-6 fill-current" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // "X" Close Icon
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z" 
                />
              ) : (
                // 3-Line Hamburger Icon
                <path 
                  fillRule="evenodd" 
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation Content Area */}
        <div 
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row w-full md:w-auto items-left md:items-center pb-4 md:pb-0 font-bold text-base tracking-wide transition-all duration-300 ease-in-out`}
        >
          {/* 2. Middle Block: Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 mb-6 md:mb-0">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-un-gold transition-colors duration-200 text-white">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-un-gold transition-colors duration-200 text-white">Services</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-un-gold transition-colors duration-200 text-white">Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-un-gold transition-colors duration-200 text-white">Contact</Link>
          </div>       
          
          {/* 3. Right Corner: Call To Action Button */}
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-un-gold hover:bg-yellow-600 text-un-navy px-5 py-2.5 font-black rounded-lg transition-all duration-200 shrink-0 shadow-sm hover:scale-105 md:ml-10 text-center w-full md:w-auto"
          >
            Get Quote
          </Link>
        </div>
        
      </div>
    </nav>
  );
}