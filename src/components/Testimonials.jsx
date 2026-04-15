import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  
  const testimonials = [
    {
      id: 1,
      name: "Sari Dewi",
      location: "Jakarta, Indonesia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
      headline: "Platform yang mengubah cara kami berinvestasi.",
      text: "Portofolio saya bertumbuh 23% dalam 8 bulan. NestVest memberikan analitik mendalam yang sangat membantu dalam pengambilan keputusan akurat setiap saat."
    },
    {
      id: 2,
      name: "Reza Permana",
      location: "Surabaya, Indonesia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
      headline: "Visionary design with practical execution.",
      text: "Saya berawal dari pemula, tapi platform ini menyajikan data kompleks menjadi gambaran yang mudah dimengerti. Semua proses dari pencarian hingga akuisisi berjalan mulus dan elegan."
    },
    {
      id: 3,
      name: "Maya Anggraini",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
      headline: "Rekomendasi algoritma yang sangat mutakhir.",
      text: "AI yang digunakan NestVest benar-benar akurat. Mereka merekomendasikan villa premium di Seminyak yang persis dengan profil risiko saya dan membuahkan hasil luar biasa."
    },
    {
      id: 4,
      name: "Budi Santoso",
      location: "Bandung, Indonesia",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80",
      headline: "Keamanan transaksi tanpa kompromi.",
      text: "Sistem hukum terintegrasi dan escrow membuat investasi jauh lebih tenang. Saya menghabiskan lebih sedikit waktu mengurus dokumen berkat manajemen portofolio otomatis."
    },
    {
      id: 5,
      name: "Andi Wijaya",
      location: "Medan, Indonesia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
      headline: "Hasil melampaui ekspektasi proyeksi.",
      text: "NestVest adalah rekan setia saya untuk membangun kekayaan. Real-time yield yang diberikan selalu sama atau bahkan lebih tinggi dari angka historis."
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-light text-slate-900 text-center mb-16 tracking-tight leading-tight max-w-3xl">
          Cerita sukses dari investor <br className="hidden md:block" /> yang berkembang bersama kami.
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full max-w-5xl h-[450px] flex justify-center items-center mb-10">
          
          {testimonials.map((testi, index) => {
            const isActive = index === activeIndex;
            const isLeft = index < activeIndex;
            const isRight = index > activeIndex;
            const distance = Math.abs(index - activeIndex);

            // Hide items further than 2 slots away
            if (distance > 2) return null;

            // Calculate dynamic transforms
            let xPos = 0;
            let scaleFactor = 1;
            let rotateVal = 0;
            let zVal = 10 - distance;
            let opac = 1;

            if (isActive) {
              xPos = 0;
              scaleFactor = 1.1;
              rotateVal = 0;
              zVal = 20;
              opac = 1;
            } else if (isLeft) {
              // Depending on screen size, the distance calculation can be tweaked, but using percentage or fixed px is fine.
              xPos = distance === 1 ? -180 : -320;
              scaleFactor = distance === 1 ? 0.85 : 0.7;
              rotateVal = distance === 1 ? -6 : -12;
              opac = distance === 1 ? 0.7 : 0.3;
            } else if (isRight) {
              xPos = distance === 1 ? 180 : 320;
              scaleFactor = distance === 1 ? 0.85 : 0.7;
              rotateVal = distance === 1 ? 6 : 12;
              opac = distance === 1 ? 0.7 : 0.3;
            }

            return (
              <motion.div
                key={testi.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: xPos,
                  scale: scaleFactor,
                  rotate: rotateVal,
                  zIndex: zVal,
                  opacity: opac
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25
                }}
                className={`absolute w-64 md:w-72 h-[350px] rounded-2xl overflow-hidden cursor-pointer border border-white/50 bg-slate-200 ${
                  isActive 
                    ? 'ring-4 ring-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-offset-2 ring-offset-slate-50' 
                    : 'shadow-xl'
                }`}
              >
                <img src={testi.image} alt={testi.name} className="w-full h-full object-cover select-none" draggable={false} />
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16 text-center"
                    >
                      <h4 className="text-white font-semibold text-xl">{testi.name}</h4>
                      <p className="text-white/80 text-sm mt-1">{testi.location}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* Floating Quote Icon */}
          <div className="absolute -bottom-8 z-30 pointer-events-none">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border border-slate-100 text-4xl font-serif text-slate-900 leading-none">
              <span className="mt-4 opacity-80">"</span>
            </div>
          </div>
        </div>

        {/* Dynamic Text Content */}
        <div className="text-center w-full max-w-2xl mx-auto min-h-[160px] relative flex flex-col justify-start pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full top-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">
                {testimonials[activeIndex].headline}
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed px-4">
                {testimonials[activeIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
