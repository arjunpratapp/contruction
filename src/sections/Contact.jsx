import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* Company Details Panel */}
        <div>
          <span className="text-brand-accent uppercase tracking-wider font-extrabold text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mt-2 mb-4">Connect With Urbannest Pro</h2>
          
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-8">
            <h4 className="text-xs uppercase font-bold text-brand-muted tracking-wider">Leadership</h4>
            <p className="text-lg font-bold text-slate-800">Imran Qureshi</p>
            <p className="text-xs text-brand-muted">Founder & Director</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider text-brand-muted mb-1">Corporate Address</h4>
              <p className="text-slate-700 font-medium">48, Shivaji Nagar, Jhotwara, Jaipur, Rajasthan - 302012</p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider text-brand-muted mb-1">Mobile Connection</h4>
              <a href="tel:+918955137400" className="text-xl font-bold text-brand-dark hover:text-brand-accent transition">
                +91 8955137400
              </a>
            </div>
          </div>
        </div>

        {/* Lead Generation Form */}
        <form className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-6">
          <h3 className="text-xl font-bold text-brand-dark">Request an Allotment Site Visit</h3>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Your Name</label>
            <input type="text" required placeholder="Enter your full name" className="w-full p-3 border border-slate-300 rounded bg-white focus:outline-brand-accent" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Phone Number</label>
            <input type="tel" required placeholder="Enter your mobile number" className="w-full p-3 border border-slate-300 rounded bg-white focus:outline-brand-accent" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Preferred Location</label>
            <select className="w-full p-3 border border-slate-300 rounded bg-white focus:outline-brand-accent">
              <option>Jhotwara Projects</option>
              <option>Kalwar Road Townships</option>
              <option>Other locations across Jaipur</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 px-6 rounded transition">
            Book Site Appointment
          </button>
        </form>

      </div>
    </section>
  );
}