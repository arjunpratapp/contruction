import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.jpeg';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulates the page asset compilation window
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-un-navy z-[9999] flex flex-col items-center justify-center gap-6">
      <div className="relative flex items-center justify-center">
        {/* Architectural Scanning Radar Ring */}
        <div className="absolute w-28 h-28 border border-un-gold/20 rounded-full animate-ping"></div>
        <div className="absolute w-36 h-36 border-2 border-t-un-gold border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Breathing Logo Asset */}
        <img 
          src={logoImg} 
          alt="Urbannest Pro Loading" 
          className="h-20 w-auto object-contain rounded-xl relative z-10 animate-[pulse_1.5s_ease-in-out_infinite] shadow-2xl shadow-un-gold/10"
        />
      </div>
      
      {/* Precision Engineering Label */}
      <div className="text-center">
        <p className="text-un-gold tracking-[0.3em] uppercase font-black text-xs animate-pulse">
          Urbannest Pro
        </p>
        <p className="text-slate-500 text-[10px] tracking-wider mt-1 font-medium">
          Loading Structural Blueprints...
        </p>
      </div>
    </div>
  );
}