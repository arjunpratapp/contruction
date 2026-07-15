import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center bg-slate-900">
        {/* Architectural Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
          <span className="text-brand-accent uppercase tracking-widest font-black text-sm bg-brand-dark/50 border border-brand-accent/30 px-4 py-1.5 rounded-full">
            Real Estate & Construction Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-6 mb-6 leading-tight">
            FIND YOUR PERFECT PLOT & TRUSTED BUILDER IN JAIPUR
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-light">
            Welcome to <span className="text-brand-accent font-semibold">Urbannest Pro</span>, led by <span className="text-white font-medium">Imran Qureshi</span>. We specialize in premium plot sales, developing premium colonies, and delivering reliable construction work all over Jaipur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/projects" className="bg-brand-accent hover:bg-amber-600 text-slate-900 px-8 py-4 font-bold rounded-lg transition shadow-lg text-center">
              View Active Townships
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 font-bold rounded-lg transition text-center">
              Contact Founder
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS SECTION */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-accent uppercase tracking-wider font-bold text-xs">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-1">Our Core Services</h2>
            <div className="w-12 h-1 bg-brand-accent mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-accent/30 transition">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Plot Purchase & Sales</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Secure verified land and commercial/residential plots with clean, legitimate documentation across key strategic zones in Jaipur.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-accent/30 transition">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Colony Launching</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Developing gated residential societies, infrastructure projects, roads, and modern amenities layouts from the ground up.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-accent/30 transition">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">End-to-End Construction</h3>
              <p className="text-brand-muted leading-relaxed text-sm">
                Turnkey residential and commercial infrastructure execution with an unyielding stance on build quality and design parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RUNNING FOCUS LOCATIONS */}
      <section className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-brand-accent uppercase tracking-wider font-bold text-xs">Strategic Hubs</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6">Active Development Zones</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            While our infrastructure reaches all over Jaipur, our premium townships and active land developments are heavily focused in high-growth corridors:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-brand-accent">⚡ Jhotwara</h3>
              <p className="text-slate-300 text-sm mt-2">Premium plots and customized local construction options.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold text-brand-accent">🌳 Kalwar</h3>
              <p className="text-slate-300 text-sm mt-2">Newly launched gated colonies and fast-growing townships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION PIECE */}
      <section className="py-16 bg-brand-accent text-slate-900 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">Looking for an investment plot or custom build?</h2>
            <p className="font-medium opacity-80 mt-1">Get directly in touch with Imran Qureshi for exclusive layout inventories.</p>
          </div>
          <a href="tel:+918955137400" className="bg-brand-dark text-white px-6 py-4 font-bold rounded-xl shadow-md hover:bg-slate-800 transition whitespace-nowrap">
            📞 Call +91 8955137400
          </a>
        </div>
      </section>

    </div>
  );
}