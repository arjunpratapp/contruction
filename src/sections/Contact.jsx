import React, { useState } from 'react';

export default function Contact() {
  // 📋 Comprehensive Lead Data States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Plot Investment', // Default selection matching core portfolio
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 📬 Secure Email Pipeline Pipeline
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // 🔒 Securely references the same hidden root environment token
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `🚨 NEW CONTACT PORTAL LEAD: ${formData.interest} - ${formData.name}`,
          from_name: "Urbannest Pro Contact Hub",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interest_type: formData.interest,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message dispatched perfectly! Imran Qureshi's desk will reach out with blueprints shortly."
        });
        // Clear out input fields upon deployment completion
        setFormData({ name: '', phone: '', email: '', interest: 'Plot Investment', message: '' });
      } else {
        throw new Error("Form delivery failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Pipeline connectivity issue. Please try verifying your internet connection or call directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-un-navy text-white min-h-screen pt-28 pb-20 relative overflow-hidden">
      
      {/* Luxury Background Architectural Grids & Light Pools */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-un-gold/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-15%] w-[500px] h-[500px] bg-un-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= SECTION TITLE HUB ================= */}
        <div className="text-center mb-16">
          <span className="inline-block text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/20 px-4 py-1.5 rounded-full mb-4">
            Direct Connection Portal
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Initiate Your <span className="text-un-gold">Jaipur Asset Build</span>
          </h1>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto font-light text-sm">
            Whether securing plots or breaking ground on multi-family developments, transmit your specs straight to our headquarters.
          </p>
          <div className="w-12 h-1 bg-un-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT SIDE COLUMN: BRAND CONTACT DATA ================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/15 shadow-2xl">
              <h2 className="text-xl font-black text-white mb-6 tracking-wide">Corporate Coordinates</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-un-gold/10 text-un-gold border border-un-gold/20 rounded-xl flex items-center justify-center font-bold shrink-0">📍</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Main Operations Office</h4>
                    <p className="text-xs text-slate-400 font-light mt-1 leading-relaxed">High-Yield Growth Axis Communities, Main Kalwar Road & Jhotwara Corridors, Jaipur, Rajasthan</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-un-gold/10 text-un-gold border border-un-gold/20 rounded-xl flex items-center justify-center font-bold shrink-0">📞</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Desk Routing</h4>
                    <p className="text-xs text-slate-400 font-light mt-1 font-mono tracking-wider">+91 [Insert Contact Phone Number]</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-un-gold/10 text-un-gold border border-un-gold/20 rounded-xl flex items-center justify-center font-bold shrink-0">✉️</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Encrypted Digital Intake</h4>
                    <p className="text-xs text-slate-400 font-light mt-1 font-mono tracking-wider">info@urbannestpro.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-center lg:text-left">
                <span className="text-[11px] text-un-gold font-black uppercase tracking-wider bg-un-gold/10 border border-un-gold/20 px-3 py-1 rounded-md">
                  ⏱️ Response SLA: Within 4 Business Hours
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE COLUMN: SECURE WEB3FORMS LEAD BOX ================= */}
          <div className="lg:col-span-7">
            <form onSubmit={handleContactSubmit} className="bg-white/[0.02] backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/15 shadow-2xl space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter full name" 
                    className="w-full px-4 py-3 bg-un-navy/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-un-gold/60 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Enter 10-digit number" 
                    className="w-full px-4 py-3 bg-un-navy/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-un-gold/60 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 bg-un-navy/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-un-gold/60 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Primary Asset Class Focus</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-un-navy border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-un-gold/60 disabled:opacity-50 appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23c5a880' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
                >
                  <option value="Plot Investment" className="bg-un-navy">JDA / RERA Plotted Investment</option>
                  <option value="Turnkey Construction" className="bg-un-navy">Turnkey Residential Construction</option>
                  <option value="Commercial Development" className="bg-un-navy">Commercial Complex Buildout</option>
                  <option value="Legal Site Consultation" className="bg-un-navy">Legal Title / Blueprint Architecture Review</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Brief / Plot Location Choice</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Share details regarding preferred sizes, target sub-localities (e.g. Jhotwara, Kalwar Road) or turnkey architectural ideas..." 
                  className="w-full px-4 py-3 bg-un-navy/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-un-gold/60 disabled:opacity-50 resize-none leading-relaxed"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-un-gold hover:bg-yellow-600 disabled:bg-slate-700 text-un-navy disabled:text-slate-400 font-black text-sm py-4 rounded-xl transition-all duration-300 shadow-xl shadow-un-gold/10 hover:shadow-un-gold/20 flex items-center justify-center group tracking-wider uppercase disabled:cursor-not-allowed"
              >
                {isSubmitting ? "TRANSMITTING SPECIFICATIONS..." : "SUBMIT INVESTMENT PROPOSAL"}
              </button>

              {/* AJAX Processing Messages UI feedback */}
              {submitStatus.type && (
                <div className={`text-center text-xs px-4 py-3 rounded-xl transition-all duration-300 ${
                  submitStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}