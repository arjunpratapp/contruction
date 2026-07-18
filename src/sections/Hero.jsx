import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Ensure your asset paths match your folder architecture perfectly
import imranImg from '../assets/imran.png'; 

export default function Hero() {
  const phrases = [
    "FIND YOUR PERFECT PLOT",
    "FIND YOUR TRUSTED BUILDER",
    "FIND YOUR SMART TOWNSHIP"
  ];
  
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // 🛠️ Contact Form States
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  useEffect(() => {
    const handleType = () => {
      const fullPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(80); 
        
        if (currentText === fullPhrase) {
          setTypingSpeed(2500); 
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(40); 
        
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(400); 
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typingSpeed, currentPhraseIndex, phrases]);

  // 📬 Direct Email Pipeline Handler
  // 📬 Direct Email Pipeline Handler
  const handleQuickSubmit = async (e) => {
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
          // 🔒 The key is now safely injected at build-time and hidden from plain text source code
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
          subject: "🚨 NEW INSTANT WEEKEND CALLBACK LEAD - Urbannest Pro",
          from_name: "Urbannest Pro Web Pipeline",
          lead_phone_number: phoneNumber,
          message: `A visitor requested an immediate callback for weekend plot inspection. Phone Number: ${phoneNumber}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ 
          type: "success", 
          message: "Lead received! Imran Qureshi's desk will call you back shortly." 
        });
        setPhoneNumber(""); 
      } else {
        throw new Error("Form delivery failed");
      }
    } catch (error) {
      setSubmitStatus({ 
        type: "error", 
        message: "Network issue. Please try calling directly or verify form connection." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-un-navy text-white min-h-screen relative overflow-hidden">
      
      {/* Global Architectural Light Glow Background Layer */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-un-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-un-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= HERO INTRO SECTION ================= */}
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-un-navy/80 via-un-navy/95 to-un-navy"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
          <span className="inline-block text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Real Estate & Construction Excellence
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mt-6 mb-6 leading-tight tracking-tight min-h-[9rem] md:min-h-[11rem] flex flex-col justify-center items-center">
            <span className="text-un-gold relative inline-block max-w-full break-words px-2">
              {currentText}
              <span className="absolute -right-2 md:-right-4 top-0 text-white font-light animate-[pulse_0.8s_infinite]">|</span>
            </span> 
            <span className="text-white mt-2 block">IN JAIPUR</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to <span className="text-un-gold font-semibold">Urbannest Pro</span>, led by <span className="text-white font-semibold underline decoration-un-gold/50 underline-offset-4">Imran Qureshi</span>. We specialize in premium plot sales, developing gated colonies, and delivering reliable turnkey construction work all over Jaipur.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Link to="/projects" className="w-full sm:w-auto bg-un-gold hover:bg-yellow-600 text-un-navy px-8 py-4 font-black rounded-xl transition-all duration-300 shadow-xl shadow-un-gold/10 hover:shadow-un-gold/20 hover:scale-105 text-center">
              View Active Townships
            </Link>
            <Link to="/contact" className="w-full sm:w-auto border border-white/40 backdrop-blur-sm hover:border-un-gold hover:text-un-gold text-white px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 text-center">
              Contact Founder
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS TRACK RECORD BLOCK ================= */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 motion-safe:animate-foundation-rise">
        {[
          { metric: "100%", label: "Authenticated Titles" },
          { metric: "500+", label: "Happy Plot Owners" },
          { metric: "2+", label: "Active Mega Townships" },
          { metric: "10+", label: "Years Construction Trust" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl md:text-4xl font-black text-un-gold tracking-tight">{stat.metric}</h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1 font-medium tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* ================= EXECUTIVE PROFILE & WHY CHOOSE US ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-un-gold/20 to-transparent rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            <div className="relative border border-white/15 p-3 bg-white/[0.02] backdrop-blur-md rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-un-gold/40 max-w-[340px] md:max-w-sm">
              <img 
                src={imranImg} 
                alt="Imran Qureshi - Founder & Director" 
                className="w-full h-auto object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-inner"
              />
              <div className="absolute -bottom-4 -right-4 bg-un-gold text-un-navy px-4 py-2 rounded-xl font-black text-xs tracking-widest uppercase shadow-xl">
                FOUNDER & DIRECTOR
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/20 px-3 py-1 rounded-full">
                Leadership Core
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">
                Why Invest With <span className="text-un-gold">Urbannest Pro</span>?
              </h2>
              <p className="text-slate-400 mt-2 font-light text-base leading-relaxed">
                Under the strategic management of Imran Qureshi, we eliminate land investment risks across Rajasthan by enforcing bulletproof structural authenticity and absolute legal transparency.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: "📜", title: "JDA & RERA Compliance", text: "Zero legal grey areas. All plotted development communities are fully vetted under strict local municipal boundaries." },
                { icon: "🏗️", title: "Turnkey Infrastructure", text: "We don't just clear fields. Our townships come complete with wide blacktop internal roads, heavy underground electrification, and dedicated utility grids." },
                { icon: "🔒", title: "Secure Gated Perimeters", text: "Every township asset features round-the-clock boundary parameters, grand entrance archways, and structured security checkpoints." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors duration-200">
                  <span className="text-2xl pt-1">{item.icon}</span>
                  <div>
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-xs font-light mt-0.5 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ================= NEW: FEATURED TOWNSHIPS PREVIEW GRID ================= */}
      <section className="py-24 bg-white/[0.01] border-t border-white/5 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/20 px-3 py-1 rounded-full">
                Premium Portfolios
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-3">Featured Developments</h2>
            </div>
            <Link to="/projects" className="text-un-gold font-bold text-sm tracking-wider hover:underline mt-4 md:mt-0 inline-flex items-center gap-2 group">
              Explore All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Jhotwara Elite Enclave", loc: "Shivaji Nagar Corridor, Jaipur", tags: ["JDA Approved", "Gated Ready"], img: "https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80" },
              { title: "Kalwar Road Townships", loc: "High-Growth Western Axis, Jaipur", tags: ["RERA Registered", "Mega Utilities"], img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80" }
            ].map((proj, idx) => (
              <div key={idx} className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-un-gold/40">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-un-navy via-transparent to-transparent z-10 opacity-80"></div>
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 flex gap-2 z-20">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="bg-un-navy/80 backdrop-blur-md text-un-gold text-[10px] font-black px-2.5 py-1 rounded border border-un-gold/30 uppercase">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 relative z-20">
                  <p className="text-xs text-un-gold font-bold tracking-wider uppercase mb-1">{proj.loc}</p>
                  <h3 className="text-xl font-black text-white mb-4">{proj.title}</h3>
                  <Link to="/contact" className="inline-block bg-white/5 hover:bg-un-gold hover:text-un-navy text-white text-xs font-black px-4 py-2.5 rounded-xl border border-white/10 transition-colors duration-300">
                    Schedule Site Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TURNKEY CONSTRUCTION PROCESS ================= */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Our Blueprint to Execution Process</h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto font-light">From selecting a prime raw parcel to handover of your architectural custom build.</p>
            <div className="w-12 h-1 bg-un-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Plot Allocation", desc: "Select and verify your preferred residential footprint across high-yield growth sectors." },
              { step: "02", title: "Legal Title Validation", desc: "Receive transparent, fully authenticated registry documents clear of heavy liabilities." },
              { step: "03", title: "Civil Engineering", desc: "Premium concrete structural configuration overseen directly by our site foundation teams." },
              { step: "04", title: "Key Handover", desc: "Step inside a premium luxury architecture setup tailored directly to your family's blueprint parameters." }
            ].map((proc, index) => (
              <div key={index} className="relative p-6 bg-un-navy border border-white/10 rounded-2xl group hover:border-un-gold/40 transition-colors duration-300">
                <div className="absolute -top-5 right-4 text-4xl font-black text-white/5 group-hover:text-un-gold/10 transition-colors duration-300">{proc.step}</div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-un-gold transition-colors duration-300">{proc.title}</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUICK LEAD CALLBACK CAPTURE STRIP (NOW ACTIVE WITH E-MAIL INTAKE) ================= */}
      <section className="py-12 bg-gradient-to-r from-un-navy via-white/[0.02] to-un-navy border-b border-white/5 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-black tracking-tight">Want to inspect plots this weekend?</h4>
              <p className="text-slate-400 text-xs font-light mt-0.5">Drop your mobile number. Imran Qureshi's desk will route an engineer to call you back.</p>
            </div>
            <form onSubmit={handleQuickSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 shrink-0">
              <input 
                type="tel" 
                required 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isSubmitting}
                placeholder="Enter mobile number" 
                className="px-4 py-3 bg-un-navy border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-un-gold/60 w-full sm:w-64 disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-un-gold hover:bg-yellow-600 disabled:bg-slate-700 text-un-navy disabled:text-slate-400 font-black text-sm px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg shadow-un-gold/15 flex items-center justify-center min-w-[150px]"
              >
                {isSubmitting ? "Sending..." : "Request Callback"}
              </button>
            </form>
          </div>

          {/* Form Processing Feedback Messages */}
          {submitStatus.type && (
            <div className={`mt-4 text-center text-xs px-4 py-2 rounded-lg max-w-md mx-auto ${
              submitStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
            }`}>
              {submitStatus.message}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}