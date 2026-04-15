import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// If studio_bg.jpg exists, we can import it like this (optional fallback added in list)
// import studioBg from '../assets/studio_bg.jpg';

const Properties = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const tabs = ['Semua', 'Dijual', 'Disewa', 'Investasi'];

  const allProperties = [
    {
      id: 1,
      category: 'Dijual',
      name: "Villa Sudirman Estate",
      loc: "Sudirman, Jakarta Pusat",
      price: "Rp 12,5 Miliar",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      badge: "Premium",
      badgeColor: "bg-brand-900",
      specs: { bed: 5, bath: 4, area: "450 m²" }
    },
    {
      id: 2,
      category: 'Dijual',
      name: "Rumah Minimalis BSD City",
      loc: "BSD City, Tangerang Selatan",
      price: "Rp 2,8 Miliar",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      badge: "Baru",
      badgeColor: "bg-blue-500",
      specs: { bed: 3, bath: 2, area: "180 m²" }
    },
    {
      id: 3,
      category: 'Disewa',
      name: "Apartemen Senopati Suites",
      loc: "Senopati, Jakarta Selatan",
      price: "Rp 35 Juta / Bulan",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
      badge: "Hot",
      badgeColor: "bg-orange-500",
      specs: { bed: 2, bath: 2, area: "120 m²" }
    },
    {
      id: 4,
      category: 'Disewa',
      name: "Studio SCBD Premium",
      loc: "SCBD, Jakarta Selatan",
      price: "Rp 20 Juta / Bulan",
      img: "src/assets/studio_bg.jpg",
      badge: "Eksklusif",
      badgeColor: "bg-brand-600",
      specs: { bed: 1, bath: 1, area: "65 m²" }
    },
    {
      id: 5,
      category: 'Investasi',
      name: "Ruko Komersial PIK",
      loc: "Pantai Indah Kapuk, Jakarta Utara",
      price: "Rp 8,2 Miliar",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
      badge: "ROI 12%",
      badgeColor: "bg-green-600",
      specs: { bed: 0, bath: 4, area: "500 m²" }
    },
    {
      id: 6,
      category: 'Investasi',
      name: "Kompleks Kost Mahasiswa",
      loc: "Depok, Jawa Barat",
      price: "Rp 5,5 Miliar",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
      badge: "Full Occupancy",
      badgeColor: "bg-brand-800",
      specs: { bed: 20, bath: 20, area: "600 m²" }
    }
  ];

  const filteredProperties = activeTab === 'Semua'
    ? allProperties
    : allProperties.filter(p => p.category === activeTab);

  return (
    <section id="properties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-brand-600 font-semibold uppercase tracking-wider text-sm mb-3">Pilihan Terbaik</div>
            <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">
              Properti <span className="italic font-light text-brand-500">Unggulan</span>
            </h2>
          </div>
          <div className="flex bg-slate-50 p-1.5 rounded-xl border border-slate-200 overflow-x-auto hide-scrollbar w-full md:w-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map(prop => (
              <motion.div
                key={prop.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200 group cursor-pointer flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img src={prop.img} alt={prop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className={`absolute top-4 left-4 ${prop.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm`}>
                    {prop.badge}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-2xl font-bold text-brand-700 mb-2">{prop.price}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1 line-clamp-1">{prop.name}</h3>
                  <div className="text-slate-500 text-sm mb-6 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {prop.loc}
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between text-sm text-slate-600 font-medium">
                    {prop.specs.bed > 0 && <span className="flex items-center gap-1.5"><span className="text-lg">🛏</span> {prop.specs.bed} KT</span>}
                    {prop.specs.bath > 0 && <span className="flex items-center gap-1.5"><span className="text-lg">🚿</span> {prop.specs.bath} KM</span>}
                    <span className="flex items-center gap-1.5"><span className="text-lg">📐</span> {prop.specs.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Properties;
