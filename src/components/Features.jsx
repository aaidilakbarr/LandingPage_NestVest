import React from 'react';

const Features = () => {
  const features = [
    { icon: "📊", title: "Analitik Real-Time", desc: "Pantau performa investasi dengan dashboard interaktif — ROI, tingkat hunian, dan tren pasar semua dalam satu layar." },
    { icon: "🤖", title: "Rekomendasi AI", desc: "Algoritma cerdas kami menganalisis ratusan variabel untuk merekomendasikan properti dengan potensi pertumbuhan tertinggi." },
    { icon: "🔒", title: "Transaksi Aman", desc: "Setiap transaksi diverifikasi dan dilindungi oleh sistem escrow terintegrasi dan sertifikat digital bersertifikat." },
    { icon: "📍", title: "Peta Interaktif", desc: "Visualisasikan lokasi properti dengan overlay data infrastruktur, sekolah, transportasi, dan potensi harga sekitar." },
    { icon: "💼", title: "Manajemen Portofolio", desc: "Kelola semua aset propertimu dari satu tempat — laporan bulanan, pajak, dan dokumen legal tersimpan otomatis." },
    { icon: "🤝", title: "Komunitas Investor", desc: "Terhubung dengan 12.000+ investor berpengalaman, berbagi insight, dan belajar dari kisah sukses mereka." },
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <div className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3 text-center w-full block">Mengapa NestVest?</div>
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
            Semua yang kamu butuhkan <br className="hidden md:block" /> untuk <span className="text-brand-500 italic">investasi cerdas</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Platform kami menggabungkan teknologi AI mutakhir, data pasar real-time, dan komunitas investor terpercaya untuk memandu setiap langkahmu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 bg-white">
              <div className="w-14 h-14 rounded-xl bg-brand-50 text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feat.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
