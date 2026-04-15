import React from 'react';

const ContactCta = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-50 border border-slate-200 p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16">

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Siap untuk <br className="hidden lg:block" />
              <span className="italic font-light text-slate-500">ekspansi</span> portofolio?
            </h2>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Bergabunglah dengan program eksklusif kami. Dapatkan analitik mendalam, riset pasar premium, dan konsultasi privat bersama tim penasihat investasi kelas atas NestVest.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="bg-white p-8 border border-slate-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="text-sm font-bold tracking-widest text-slate-900 uppercase mb-8">
                Jadwalkan Konsultasi Gratis
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan Nama Anda"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-slate-900 transition-colors text-slate-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">Alamat Email</label>
                  <input
                    type="email"
                    placeholder="himyemail@example.com"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:ring-0 focus:border-slate-900 transition-colors text-slate-900"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 w-full bg-slate-900 text-white font-semibold tracking-wide py-4 hover:bg-slate-800 hover:shadow-lg transition-all"
              >
                Kirim Permintaan
              </button>

              <p className="text-xs text-slate-400 mt-6 flex items-center justify-center gap-2">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                Data Anda dilindungi oleh enkripsi end-to-end.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCta;
