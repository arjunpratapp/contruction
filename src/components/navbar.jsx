import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpeg'; 

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-un-navy text-white z-50 shadow-md h-20 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-6 flex justify-between items-center">
        
        {/* 1. Left Corner: Logo Only (Removed duplicate text elements) */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={logoImg} 
            alt="Urbannest Pro" 
            className="h-16 w-auto object-contain rounded" 
          />
        </Link>
        
        {/* 2. Middle Block: Premium Laptop Spacing for Options */}
        <div className="flex items-center space-x-10 font-bold text-base tracking-wide">
          <Link to="/" className="hover:text-un-gold transition-colors duration-200 text-white">Home</Link>
          <Link to="/services" className="hover:text-un-gold transition-colors duration-200 text-white">Services</Link>
          <Link to="/projects" className="hover:text-un-gold transition-colors duration-200 text-white">Projects</Link>
          <Link to="/contact" className="hover:text-un-gold transition-colors duration-200 text-white">Contact</Link>
        </div>       
        
        {/* 3. Right Corner: Call To Action Button */}
        <Link 
          to="/contact" 
          className="bg-un-gold hover:bg-yellow-600 text-un-navy px-5 py-2.5 font-black rounded-lg transition-all duration-200 shrink-0 shadow-sm hover:scale-105"
        >
          Get Quote
        </Link>
        
      </div>
    </nav>
  );
}