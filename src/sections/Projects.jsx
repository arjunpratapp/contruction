import React from 'react';

const ongoingProjects = [
  {
    title: "Premium Residential Plots - Jhotwara",
    location: "Jhotwara, Jaipur",
    status: "Selling Fast",
    description: "Ready-to-construct residential plots featuring wide roads, reliable water connectivity, and gated security parameters."
  },
  {
    title: "Urbannest Smart Township - Kalwar Road",
    location: "Kalwar Road, Jaipur",
    status: "Newly Launched Colony",
    description: "An expanding community township layout featuring modern civic infrastructure, demarcated plots, and park spaces."
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-brand-accent uppercase tracking-wider font-extrabold text-sm">Where We Operate</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-2">Running Townships & Projects</h2>
          <p className="text-brand-muted mt-2">Explore fully authenticated land spaces and construction operations across Jaipur.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition">
              <div className="p-6 bg-brand-dark text-white">
                <span className="bg-brand-accent text-slate-900 text-xs px-2.5 py-1 font-bold rounded-full uppercase tracking-wide">
                  {project.status}
                </span>
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="text-slate-400 text-sm mt-1">📍 {project.location}</p>
              </div>
              <div className="p-6">
                <p className="text-brand-muted leading-relaxed mb-6">{project.description}</p>
                <a href="tel:+918955137400" className="inline-block border-2 border-brand-dark hover:bg-brand-dark hover:text-white font-bold px-4 py-2 rounded text-sm transition">
                  Inquire About Plot Rates
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}