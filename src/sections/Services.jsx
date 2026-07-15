import React from 'react';

const serviceList = [
  { title: "Commercial Construction", desc: "State-of-the-art office buildings, retail spaces, and warehouses tailored to business needs." },
  { title: "Residential Development", desc: "Custom homes and multi-family structures built with premium materials and finishes." },
  { title: "Pre-Construction Planning", desc: "Feasibility studies, site assessments, structural blueprints, and accurate budgeting estimates." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark mb-4">Our Specializations</h2>
          <div className="w-16 h-1 bg-brand-yellow mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-100 text-brand-yellow rounded-lg flex items-center justify-center font-bold text-xl mb-6">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-brand-gray leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}