import React from "react";

const testimonials = [
  {
    name: "Rina Wijaya",
    location: "Jakarta Selatan",
    text: "Briketnya bagus banget! Nyala stabil, nggak banyak asap, cocok buat bakaran keluarga di akhir pekan. Pengiriman cepat dan packing rapi. Recommended!",
    rating: 5,
  },
  {
    name: "Ahmad Fauzi",
    location: "Bandung",
    text: "Udah order berkali-kali, kualitasnya konsisten. Panasnya tahan lama, abunya sedikit. Pas buat jualan sate saya. Grosir juga dapat harga lebih murah.",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    location: "Tangerang",
    text: "Baru pertama coba dan ternyata bagus. Pengiriman cepat, barang sesuai. Briketnya padat dan nggak mudah hancur. Next pasti repeat order!",
    rating: 4,
  },
  {
    name: "Budi Santoso",
    location: "Serang",
    text: "Langsung dari pabrik, harga lebih bersahabat. Kualitas ekspor beneran, saya pakai buat barbecue catering client. Semua puas.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF5A1F] text-sm font-semibold tracking-widest uppercase mb-2 block">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5A1F] to-[#FFA07A] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#FF5A1F]/40 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className={`w-4 h-4 ${j < t.rating ? "text-yellow-500" : "text-gray-600"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#2A2A2A]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF5A1F] to-[#FFA07A] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
