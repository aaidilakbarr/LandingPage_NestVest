import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-500 rounded-3xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-500 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" 
              alt="Properti Premium" 
              className="relative rounded-3xl w-full object-cover h-[500px] shadow-2xl"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center text-xl">🏆</div>
              <div>
                <div className="text-2xl font-bold font-serif text-slate-800">Rp 2,1T+</div>
                <div className="text-sm text-slate-500 font-medium">Total Nilai Properti Terdaftar</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">Tentang NestVest</div>
            <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              Kami percaya investasi <span className="text-brand-500 italic">lebih cerdas</span> dimulai dari sini
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              NestVest lahir dari misi sederhana: membuat investasi properti lebih transparan, mudah diakses, dan menguntungkan bagi semua orang — dari investor pemula hingga profesional berpengalaman.
            </p>
            
            <div className="space-y-5 mb-10">
              <div className="flex bg-slate-50 p-4 rounded-xl items-start gap-4 border border-slate-100">
                <div className="text-brand-500 mt-1"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
                <div className="text-slate-700 font-medium font-sans">Verifikasi properti berlapis dengan teknologi AI dan tim ahli berpengalaman.</div>
              </div>
              <div className="flex bg-slate-50 p-4 rounded-xl items-start gap-4 border border-slate-100">
                <div className="text-brand-500 mt-1"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg></div>
                <div className="text-slate-700 font-medium font-sans">Proses kepemilikan digital yang aman, cepat, dan 100% legal.</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#properties" className="px-8 py-3.5 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition shadow-lg shadow-brand-500/20">
                Lihat Semua Properti
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-full bg-white text-brand-600 font-medium hover:bg-slate-50 transition border border-slate-200">
                Konsultasi Gratis
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
