import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import PageLoader from './sections/PageLoader';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// 👇 IMPORT YOUR LOGO ASSET HERE FOR THE GLOBAL BACKGROUND
import logoImg from './assets/logo.jpeg'; 

function App() {
  return (
    <div className="bg-un-navy text-slate-100 flex flex-col min-h-screen selection:bg-un-gold selection:text-un-navy relative overflow-hidden">
      
      {/* 1. Elite Construction Preloader Screen */}
      <PageLoader />

      {/* 2. Global Animated Background Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-[0.015] pointer-events-none mix-blend-overlay overflow-hidden select-none z-0">
        <img 
          src={logoImg} 
          alt="" 
          className="w-full h-auto object-contain rounded-full animate-[spin_120s_linear_infinite]" 
        />
      </div>

      <Navbar />
      
      {/* 3. Main Content Area */}
      <main className="flex-grow pt-20 relative z-10"> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;