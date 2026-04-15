import React from 'react';

const SearchBox = () => {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-6 -mt-4 lg:-mt-8 mb-20 lg:mb-24">
      <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-end border border-white/50">
        
        <div className="flex-1 flex flex-col md:flex-row gap-6 w-full">
          {/* Lokasi */}
          <div className="flex-1 space-y-1.5 relative">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Lokasi</label>
            <select className="w-full bg-transparent text-slate-900 font-semibold border-b-2 border-slate-200 pb-2 focus:border-slate-800 focus:ring-0 cursor-pointer appearance-none outline-none transition-colors">
              <option>Jakarta Selatan</option>
              <option>Jakarta Barat</option>
              <option>Surabaya</option>
              <option>Bali</option>
            </select>
          </div>

          <div className="hidden md:block w-px bg-slate-200 mx-2 self-stretch"></div>

          {/* Tipe Properti */}
          <div className="flex-1 space-y-1.5 relative">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Tipe Properti</label>
            <select className="w-full bg-transparent text-slate-900 font-semibold border-b-2 border-slate-200 pb-2 focus:border-slate-800 focus:ring-0 cursor-pointer appearance-none outline-none transition-colors">
              <option>Semua Tipe</option>
              <option>Rumah Mewah</option>
              <option>Apartemen</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="hidden md:block w-px bg-slate-200 mx-2 self-stretch"></div>

          {/* Kisaran Harga */}
          <div className="flex-1 space-y-1.5 relative">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Kisaran Harga</label>
            <select className="w-full bg-transparent text-slate-900 font-semibold border-b-2 border-slate-200 pb-2 focus:border-slate-800 focus:ring-0 cursor-pointer appearance-none outline-none transition-colors">
              <option>Semua Harga</option>
              <option>Rp 1M - 3M</option>
              <option>Rp 3M - 5M</option>
              <option>Rp 5M+</option>
            </select>
          </div>
        </div>

        {/* Button container */}
        <div className="w-full md:w-auto h-full">
          <button 
            onClick={() => {
              const propertiesSection = document.getElementById('properties');
              if (propertiesSection) {
                propertiesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="cursor-pointer bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-3.5 rounded-full transition shadow-lg shadow-slate-900/20 w-full md:w-auto flex justify-center items-center gap-2 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            Cari Properti
          </button>
        </div>

      </div>
    </div>
  );
}

export default SearchBox;
