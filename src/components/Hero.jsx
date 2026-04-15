import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image - Lighter and clearer to match the aesthetic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle vignette for navbar readability, but mostly transparent to keep it bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        {/* Massive Text Area inspired by Flowform */}
        <div className="text-white text-center font-sans tracking-tight">
          
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] font-light">
            Temukan properti
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] font-light mt-2 md:mt-4">
            {/* Outline Pill Decoration */}
            <div className="hidden md:flex items-center justify-center opacity-80">
              <svg width="240" height="70" viewBox="0 0 240 70" fill="none" className="transform scale-75 lg:scale-100">
                <rect x="2" y="2" width="236" height="66" rx="33" stroke="white" strokeWidth="1.5"/>
                <rect x="8" y="8" width="224" height="54" rx="27" stroke="white" strokeWidth="1"/>
                <rect x="14" y="14" width="212" height="42" rx="21" stroke="white" strokeWidth="0.5"/>
                <line x1="80" y1="35" x2="160" y2="35" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>investasi terbaik</div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] font-light mt-2 md:mt-4">
            <div>untukmu</div>
            {/* Diagonal Stripes Decoration */}
            <div className="hidden md:flex items-center opacity-80">
              <svg width="180" height="60" viewBox="0 0 180 60" fill="none" className="transform scale-75 lg:scale-100">
                <path d="M10 60 L60 10 M30 60 L80 10 M50 60 L100 10 M70 60 L120 10 M90 60 L140 10 M110 60 L160 10 M130 60 L180 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
      
      {/* Clean minimalist Stats Bar without borders/backgrounds */}
      <div className="absolute bottom-10 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white/90">
          <div className="opacity-90 hover:opacity-100 transition-opacity"><div className="text-2xl font-light">2.400+</div><div className="text-[10px] font-bold mt-2 uppercase tracking-widest text-white/60">Properti Terdaftar</div></div>
          <div className="opacity-90 hover:opacity-100 transition-opacity"><div className="text-2xl font-light">18%</div><div className="text-[10px] font-bold mt-2 uppercase tracking-widest text-white/60">Rata-rata ROI</div></div>
          <div className="opacity-90 hover:opacity-100 transition-opacity"><div className="text-2xl font-light">12rb+</div><div className="text-[10px] font-bold mt-2 uppercase tracking-widest text-white/60">Investor Aktif</div></div>
          <div className="opacity-90 hover:opacity-100 transition-opacity"><div className="text-2xl font-light">98%</div><div className="text-[10px] font-bold mt-2 uppercase tracking-widest text-white/60">Kepuasan</div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
