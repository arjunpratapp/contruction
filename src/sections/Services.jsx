import React from 'react';
//import TypewriterHeader from '../components/TypewriterHeader'; // 🛠️ Fixed closing quote and added semicolon here
import TypewriterHeader from '../components/Typewriter';

const serviceList = [
  { 
    title: "Commercial Construction", 
    desc: "State-of-the-art office buildings, premium retail spaces, and warehouses customized specifically to upscale business frameworks in Jaipur." 
  },
  { 
    title: "Residential Plotted Developments", 
    desc: "Premium secure gated colonies, JDA/RERA approved townships, and customized residential layouts designed for long-term growth." 
  },
  { 
    title: "Pre-Construction & Engineering", 
    desc: "Rigorous feasibility studies, blueprint designs, strict legal title verification, and highly accurate turnkey budgeting estimates." 
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-un-navy text-white px-6 relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= SECTION HEADER WITH TYPEWRITER ================= */}
        <div className="text-center mb-16">
          <span className="inline-block text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/20 px-4 py-1.5 rounded-full mb-3">
            What We Deliver
          </span>
          
          <TypewriterHeader 
            phrases={["OUR SPECIALIZATIONS", "CORE ARCHITECTURAL SERVICES", "ELITE LAND BLUEPRINTS"]} 
            staticTextAfter=""
          />
          
          <div className="w-12 h-1 bg-un-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* ================= SERVICES DISPLAY GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-un-gold/40 shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-un-gold/10 text-un-gold rounded-xl flex items-center justify-center font-black text-lg mb-6 border border-un-gold/20 group-hover:bg-un-gold group-hover:text-un-navy transition-colors duration-300">
                0{idx + 1}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-un-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}