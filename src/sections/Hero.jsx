import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imranImg from '../assets/imran.png'; 

// Available dynamic positions across the screen for the floating banner
const BANNER_POSITIONS = [
  {
    name: 'top-center',
    classes: 'top-24 left-1/2 -translate-x-1/2',
    visibleAnimation: 'translate-y-0 opacity-100 pointer-events-auto',
    hiddenAnimation: '-translate-y-12 opacity-0 pointer-events-none'
  },
  {
    name: 'bottom-right',
    classes: 'bottom-6 right-6 md:right-10',
    visibleAnimation: 'translate-y-0 opacity-100 pointer-events-auto',
    hiddenAnimation: 'translate-y-12 opacity-0 pointer-events-none'
  },
  {
    name: 'bottom-left',
    classes: 'bottom-6 left-6 md:left-10',
    visibleAnimation: 'translate-y-0 opacity-100 pointer-events-auto',
    hiddenAnimation: 'translate-y-12 opacity-0 pointer-events-none'
  }
];

export default function Hero() {
  // ================= 1. TYPEWRITER 1: HEADLINE PHRASES =================
  const headlinePhrases = [
    "FIND YOUR PERFECT PLOT",
    "FIND YOUR TRUSTED BUILDER",
    "FIND YOUR SMART TOWNSHIP"
  ];
  
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [headlineText, setHeadlineText] = useState("");
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);
  const [headlineSpeed, setHeadlineSpeed] = useState(150);

  useEffect(() => {
    const handleHeadlineType = () => {
      const fullPhrase = headlinePhrases[currentHeadlineIndex];
      
      if (!isDeletingHeadline) {
        setHeadlineText(fullPhrase.substring(0, headlineText.length + 1));
        setHeadlineSpeed(80); 
        if (headlineText === fullPhrase) {
          setHeadlineSpeed(2500); 
          setIsDeletingHeadline(true);
        }
      } else {
        setHeadlineText(fullPhrase.substring(0, headlineText.length - 1));
        setHeadlineSpeed(40); 
        if (headlineText === "") {
          setIsDeletingHeadline(false);
          setCurrentHeadlineIndex((prev) => (prev + 1) % headlinePhrases.length);
          setHeadlineSpeed(400); 
        }
      }
    };

    const timer = setTimeout(handleHeadlineType, headlineSpeed);
    return () => clearTimeout(timer);
  }, [headlineText, isDeletingHeadline, headlineSpeed, currentHeadlineIndex]);

  // ================= 2. TYPEWRITER 2: LOGO LOCKUP =================
  const fullLogoString = "URBANNEST PRO";
  const [logoText, setLogoText] = useState("");
  const [isDeletingLogo, setIsDeletingLogo] = useState(false);
  const [logoSpeed, setLogoSpeed] = useState(120);

  useEffect(() => {
    const handleLogoType = () => {
      if (!isDeletingLogo) {
        setLogoText(fullLogoString.substring(0, logoText.length + 1));
        setLogoSpeed(90);
        if (logoText === fullLogoString) {
          setLogoSpeed(3500); 
          setIsDeletingLogo(true);
        }
      } else {
        setLogoText(fullLogoString.substring(0, logoText.length - 1));
        setLogoSpeed(45);
        if (logoText === "") {
          setIsDeletingLogo(false);
          setLogoSpeed(500);
        }
      }
    };

    const logoTimer = setTimeout(handleLogoType, logoSpeed);
    return () => clearTimeout(logoTimer);
  }, [logoText, isDeletingLogo, logoSpeed]);

  // 📢 Dynamic Floating Ad Banner States
  const [showAdBanner, setShowAdBanner] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(BANNER_POSITIONS[0]);

  // 🖼️ State for fixed founder image visibility
  const [isImageVisible, setIsImageVisible] = useState(true);

  // 🛠️ Contact Form States
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  // 🎲 Timer Engine for FLOATING AD BANNER
  useEffect(() => {
    let timer;
    if (showAdBanner) {
      const visibleDuration = Math.floor(Math.random() * 3000) + 5000;
      timer = setTimeout(() => setShowAdBanner(false), visibleDuration);
    } else {
      const hiddenDuration = Math.floor(Math.random() * 6000) + 6000;
      timer = setTimeout(() => {
        const nextPositionIndex = Math.floor(Math.random() * BANNER_POSITIONS.length);
        setCurrentPosition(BANNER_POSITIONS[nextPositionIndex]);
        setShowAdBanner(true);
      }, hiddenDuration);
    }
    return () => clearTimeout(timer);
  }, [showAdBanner]);

  // 🎲 Timer Engine for IN-PLACE FOUNDER IMAGE VISIBILITY
  useEffect(() => {
    let timer;
    if (isImageVisible) {
      const visibleDuration = Math.floor(Math.random() * 3000) + 5000;
      timer = setTimeout(() => setIsImageVisible(false), visibleDuration);
    } else {
      const hiddenDuration = Math.floor(Math.random() * 3000) + 4000;
      timer = setTimeout(() => setIsImageVisible(true), hiddenDuration);
    }
    return () => clearTimeout(timer);
  }, [isImageVisible]);

  // Quick Lead Submission
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
          access_key: import.meta.env.VITE_WEB3FORMS_KEY, 
          subject: "🚨 NEW INSTANT WEEKEND CALLBACK LEAD - Urbannest Pro",
          from_name: "Urbannest Pro Web Pipeline",
          lead_phone_number: phoneNumber,
          message: `A visitor requested an immediate callback for weekend plot inspection/construction consult. Phone Number: ${phoneNumber}`
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

  // Helper to slice multi-color brand logo text for typewriter (CENTERED)
  const renderLogoTypewriter = () => {
    const count = logoText.length;
    const urbanPart = fullLogoString.substring(0, Math.min(count, 5));
    const nestPart = count > 5 ? fullLogoString.substring(5, Math.min(count, 9)) : "";
    const proPart = count > 9 ? fullLogoString.substring(9, Math.min(count, 13)) : "";

    return (
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-3">
          {/* Logo Emblem Icon */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-un-gold/60 bg-un-navy flex items-center justify-center shadow-lg overflow-hidden shrink-0">
            <div className="absolute inset-0 rounded-full border-t-2 border-un-gold/80 transform -rotate-45"></div>
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l9-9 9 9" />
                </svg>
                <span className="absolute top-0.5 text-[8px] text-un-gold font-black">▲</span>
              </div>
              <span className="font-black text-[10px] tracking-tighter text-slate-200 -mt-1">UN</span>
            </div>
          </div>

          {/* Typewritten Colored Brand Title */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider leading-none">
            <span className="text-white">{urbanPart}</span>
            <span className="text-emerald-400">{nestPart}</span>
            <span className="text-un-gold">{proPart}</span>
            <span className="inline-block text-un-gold font-light animate-[pulse_0.8s_infinite] ml-1">|</span>
          </div>
        </div>

        {/* Sub-Tagline appearing once logo completes typing */}
        <span className={`text-[10px] sm:text-xs font-extrabold tracking-[0.25em] text-slate-300 uppercase mt-1.5 transition-opacity duration-500 ${count >= 13 ? 'opacity-100' : 'opacity-0'}`}>
          SAPNO SE GHAR TAK
        </span>
      </div>
    );
  };

  return (
    <div className="bg-un-navy text-white min-h-screen relative overflow-hidden pt-20 md:pt-24">
      
      {/* ================= 📢 DYNAMIC FLOATING AD BANNER ================= */}
      <div 
        className={`fixed z-50 w-[92%] max-w-xl bg-un-navy/95 border-2 border-un-gold/60 backdrop-blur-xl p-3 md:p-4 rounded-2xl shadow-2xl transition-all duration-700 ease-in-out ${currentPosition.classes} ${
          showAdBanner 
            ? currentPosition.visibleAnimation 
            : currentPosition.hiddenAnimation
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-0.5 bg-gradient-to-tr from-un-gold to-emerald-400 overflow-hidden">
              <img 
                src={imranImg} 
                alt="Imran Qureshi" 
                className="w-full h-full object-cover object-top rounded-[28%_68%_68%_28%/28%_28%_68%_68%]" 
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-un-navy rounded-full"></span>
          </div>

          <div className="flex-1 text-left">
            <div className="flex items-center gap-2">
              <span className="bg-un-gold text-un-navy font-black text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">DIRECTOR'S SPOTLIGHT</span>
              <span className="text-slate-400 text-[10px]">• Verified Ownership</span>
            </div>
            <p className="text-xs md:text-sm font-black text-white mt-0.5">
              Build & Buy directly with <span className="text-un-gold">Imran Qureshi</span>
            </p>
            <p className="text-[11px] text-slate-300 font-light hidden sm:block">
              JDA Approved Townships & High-End Construction in Jaipur
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link 
              to="/contact" 
              onClick={() => setShowAdBanner(false)}
              className="bg-un-gold hover:bg-yellow-600 text-un-navy font-black text-xs px-3 py-2 rounded-lg transition-transform hover:scale-105"
            >
              Connect
            </Link>
            <button 
              onClick={() => setShowAdBanner(false)}
              className="text-slate-400 hover:text-white p-1 text-base font-bold transition-colors"
              aria-label="Close Ad"
            >
              ✕
            </button>
          </div>

        </div>
      </div>

      {/* Global Architectural Light Glow Background Layer */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-un-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-un-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* ================= 🖊️ LOGO TYPEWRITER IN BLANK HEADER SPACE (CENTER ALIGNED) ================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 pt-4 pb-2 flex justify-center items-center">
        {renderLogoTypewriter()}
      </div>

      {/* ================= HERO INTRO SECTION ================= */}
      <section className="relative min-h-[calc(100vh-10rem)] pb-16 md:py-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-un-navy/80 via-un-navy/95 to-un-navy"></div>
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-7xl mx-auto px-6 z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <span className="inline-block text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Real Estate & Construction Excellence
            </span>
            
            {/* 🖊️ TYPEWRITER 1: Dynamic Headline Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 mb-6 leading-tight tracking-tight min-h-[7rem] md:min-h-[8rem] flex flex-col justify-center lg:justify-start">
              <span className="text-un-gold relative inline-block max-w-full break-words">
                {headlineText}
                <span className="inline-block text-white font-light animate-[pulse_0.8s_infinite] ml-1">|</span>
              </span> 
              <span className="text-white mt-1 block">IN JAIPUR</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="text-un-gold font-semibold">Urbannest Pro</span>, founded & directed by <span className="text-white font-semibold underline decoration-un-gold/50 underline-offset-4">Imran Qureshi</span>. We specialize in premium plot sales, developing gated colonies, and delivering highly refined turnkey construction work across Jaipur.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center">
              <Link to="/projects" className="w-full sm:w-auto bg-un-gold hover:bg-yellow-600 text-un-navy px-8 py-4 font-black rounded-xl transition-all duration-300 shadow-xl shadow-un-gold/10 hover:shadow-un-gold/20 hover:scale-105 text-center">
                View Active Townships
              </Link>
              <Link to="/contact" className="w-full sm:w-auto border border-white/40 backdrop-blur-sm hover:border-un-gold hover:text-un-gold text-white px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 text-center">
                Contact Founder
              </Link>
            </div>
          </div>

          {/* Right Column: Founder Image / Card Block */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[380px] sm:min-h-[420px]">
            
            {/* Fallback Placeholder Card */}
            <div 
              className={`absolute w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[420px] rounded-3xl border border-un-gold/30 bg-white/[0.02] backdrop-blur-xl p-6 flex flex-col justify-center items-center text-center shadow-2xl transition-all duration-1000 ${
                !isImageVisible 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-un-gold/10 border border-un-gold/40 flex items-center justify-center text-3xl mb-4">
                🏛️
              </div>
              <span className="text-un-gold text-xs font-black uppercase tracking-widest bg-un-gold/10 px-3 py-1 rounded-full mb-2">
                URBANNEST PRO
              </span>
              <h3 className="text-xl font-black text-white">Jaipur's Premier Builder</h3>
              <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">
                Developing JDA-approved townships & engineered luxury constructions with 100% legal integrity.
              </p>
              <Link 
                to="/projects" 
                className="mt-6 text-xs font-bold text-un-gold border border-un-gold/40 hover:bg-un-gold hover:text-un-navy px-4 py-2 rounded-xl transition-colors"
              >
                Browse Townships →
              </Link>
            </div>

            {/* Main Founder Image */}
            <div 
              className={`relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[420px] transition-all duration-1000 ease-in-out transform ${
                isImageVisible 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-un-gold/30 via-emerald-500/20 to-transparent rounded-[40%_60%_70%_30%/50%_60%_30%_70%] blur-2xl animate-[spin_15s_linear_infinite] opacity-60"></div>
              
              <div className="relative w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] p-2 bg-gradient-to-tr from-un-gold via-slate-700 to-emerald-500 shadow-2xl transition-all duration-500 hover:rounded-[50%_50%_30%_70%/50%_30%_70%_50%] group">
                <div className="w-full h-full overflow-hidden rounded-[28%_68%_68%_28%/28%_28%_68%_68%] group-hover:rounded-[48%_48%_28%_68%/48%_28%_68%_48%] transition-all duration-500 bg-un-navy relative">
                  <img 
                    src={imranImg} 
                    alt="Imran Qureshi - Founder & Director" 
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-un-navy via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="absolute -bottom-2 -left-2 bg-un-navy/90 backdrop-blur-md border border-un-gold/40 text-white px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                  <div>
                    <p className="text-xs font-black text-un-gold uppercase tracking-wider">Imran Qureshi</p>
                    <p className="text-[10px] text-slate-300 font-medium">Founder & Managing Director</p>
                  </div>
                </div>

                <div className="absolute top-4 -right-2 bg-un-navy/90 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 text-xs font-bold">
                  <span className="text-un-gold text-sm">🏆</span> 10+ Yrs Trust
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS TRACK RECORD BLOCK ================= */}
      <section className="relative z-20 -mt-8 md:-mt-12 max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 motion-safe:animate-foundation-rise">
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

      {/* ================= REFINED TURNKEY CONSTRUCTION OFFERING ================= */}
      <section className="py-20 bg-gradient-to-b from-un-navy via-white/[0.02] to-un-navy border-y border-white/10 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/[0.02] border border-un-gold/30 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-un-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-un-gold uppercase tracking-widest font-black text-xs bg-un-gold/10 border border-un-gold/30 px-3.5 py-1.5 rounded-full inline-block">
                  Custom Building Solutions
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  Looking to Build Your <span className="text-un-gold">Dream Property</span>?
                </h2>
                <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
                  Beyond acquiring prime plot land, we provide **end-to-end, highly refined construction services**. From initial architectural planning and structural engineering to luxury interior finishes—we build your vision with precision, premium materials, and complete quality control.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  <div className="border border-white/10 bg-un-navy/60 p-3 rounded-xl">
                    <span className="text-un-gold font-bold text-xs uppercase block">📐 Custom Blueprints</span>
                    <span className="text-slate-400 text-[11px] font-light">Architectural & Vastu designs</span>
                  </div>
                  <div className="border border-white/10 bg-un-navy/60 p-3 rounded-xl">
                    <span className="text-un-gold font-bold text-xs uppercase block">🧱 Premium Materials</span>
                    <span className="text-slate-400 text-[11px] font-light">Grade-A concrete & steel</span>
                  </div>
                  <div className="border border-white/10 bg-un-navy/60 p-3 rounded-xl">
                    <span className="text-un-gold font-bold text-xs uppercase block">🔑 Turnkey Execution</span>
                    <span className="text-slate-400 text-[11px] font-light">On-time, hassle-free delivery</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center items-lg-end gap-4">
                <Link 
                  to="/services" 
                  className="w-full bg-un-gold hover:bg-yellow-600 text-un-navy font-black text-sm py-4 rounded-xl text-center transition-all duration-300 shadow-xl shadow-un-gold/10 hover:shadow-un-gold/20 hover:scale-105 uppercase tracking-wider"
                >
                  Explore Construction
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full border border-white/20 hover:border-un-gold text-white hover:text-un-gold font-bold text-sm py-3.5 rounded-xl text-center transition-all duration-300 backdrop-blur-sm"
                >
                  Consult Construction Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED TOWNSHIPS PREVIEW GRID ================= */}
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

      {/* ================= QUICK LEAD CALLBACK CAPTURE STRIP ================= */}
      <section className="py-12 bg-gradient-to-r from-un-navy via-white/[0.02] to-un-navy border-b border-white/5 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-black tracking-tight">Want to inspect plots or discuss construction this weekend?</h4>
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