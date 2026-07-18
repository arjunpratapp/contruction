import React from 'react';

const ongoingProjects = [
  {
    title: "Premium Residential Plots - Jhotwara",
    location: "Jhotwara, Jaipur",
    status: "Selling Fast",
    badgeColor: "bg-red-500/10 text-red-500 border-red-500/20",
    description: "Ready-to-construct residential plots featuring wide blacktop roads, reliable water utility grids, and continuous gated security parameters."
  },
  {
    title: "Urbannest Smart Township - Kalwar",
    location: "Kalwar, Jaipur",
    status: "Newly Launched Colony",
    badgeColor: "bg-un-gold/20 text-un-gold border-un-gold/30",
    description: "An expanding mega community township layout featuring modern civic infrastructure, systematically demarcated plots, and green park spaces."
  }
];

export default function Projects() {
  return (
    <section className="py-24 pt-32 bg-un-navy text-white px-6 relative overflow-hidden min-h-screen">
      
      {/* 1. High-end architectural glowing accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-un-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-un-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* 2. Construction Blueprint Grid (Animated Fade/Draw Effect) */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] motion-safe:animate-[blueprintFade_2s_ease-out_both]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="inline-block text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/20 px-4 py-1.5 rounded-full">
            Where We Operate
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight motion-safe:animate-[fadeIn_0.6s_ease-out]">
            Running Townships & Projects
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg font-light max-w-2xl motion-safe:animate-[fadeIn_0.8s_ease-out]">
            Explore fully authenticated land spaces, secure titles, and elite turnkey construction developments across high-growth corridors in Jaipur.
          </p>
          
          {/* 3. Laser Leveler Sweep Accent Line */}
          <div className="relative w-16 h-[3px] bg-slate-800 mt-6 rounded-full mx-auto md:mx-0 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-un-gold to-transparent motion-safe:animate-[laserSweep_2s_infinite_linear]"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {ongoingProjects.map((project, index) => (
            <div 
              key={index} 
              style={{ animationDelay: `${(index + 1) * 250}ms` }}
              className="group bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-un-gold/40 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-un-gold/5 flex flex-col justify-between motion-safe:animate-[foundationRise_0.8s_both_cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Card Top Block */}
              <div className="p-8 bg-white/[0.02] border-b border-white/5 text-white relative overflow-hidden">
                {/* Structural Mesh Scale Accent on Card Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-all duration-700 scale-95 group-hover:scale-100 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className={`inline-block text-xs px-3 py-1 font-black rounded-full uppercase tracking-wider border ${project.badgeColor} backdrop-blur-sm shadow-sm`}>
                    {project.status}
                  </span>
                  <p className="text-slate-300 text-sm font-semibold flex items-center gap-1 transition-transform duration-300 group-hover:translate-x-1">
                    <span className="text-un-gold">📍</span> {project.location}
                  </p>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black mt-6 tracking-tight relative z-10 text-white group-hover:text-un-gold transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              {/* Card Bottom Block */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light mb-8">
                  {project.description}
                </p>
                
                <div>
                  <a 
                    href="tel:+918955137400" 
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-white/30 text-white hover:border-un-gold hover:text-un-navy hover:bg-un-gold font-black px-6 py-3.5 rounded-xl text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <span>📞</span> Inquire About Plot Rates
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}