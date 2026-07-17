import React from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Kualitas Terjamin",
    desc: "Briket dari batok kelapa asli tanpa campuran bahan kimia. Setiap produk melewati kontrol kualitas ketat.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "100% Alami",
    desc: "Karbonisasi sempurna tanpa bahan kimia tambahan. Aman untuk makanan dan ramah lingkungan.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tahan Lama >2 Jam",
    desc: "Dengan densitas tinggi, briket kami mampu bertahan lebih dari 2 jam dengan panas yang stabil dan merata.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pengiriman Seluruh Indonesia",
    desc: "Kami melayani pengiriman ke seluruh wilayah Indonesia melalui ekspedisi terpercaya. Tersedia COD area Jabodetabek.",
  },
];

export default function TrustSignals() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF5A1F] text-sm font-semibold tracking-widest uppercase mb-2 block">
            Kenapa Pilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Keunggulan Briket.id
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5A1F] to-[#FFA07A] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#FF5A1F]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF5A1F]/5"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center mb-5 group-hover:bg-[#FF5A1F] group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
