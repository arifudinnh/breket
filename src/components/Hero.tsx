import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/breket.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/70 to-[#0D0D0D]"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-[#FF5A1F]/30 rounded-full animate-pulse" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-[#FF5A1F]/20 rounded-full animate-pulse" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 left-[20%] w-4 h-4 bg-[#FF5A1F]/10 rounded-full animate-pulse" style={{ animationDelay: "2s", animationDuration: "3.5s" }} />
        <div className="absolute top-[45%] right-[25%] w-2.5 h-2.5 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "4.5s" }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
        <div className="animate-fadeIn">


          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Briket Arang Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#FFA07A]">
              Tahan Lama & Panas Merata
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-gray-300 mx-auto mb-10 leading-relaxed">
            Briket arang batok kelapa kualitas tinggi untuk segala kebutuhan bakar-bakar Anda.
            Panas lebih maksimal, tahan lama, dan membuat momen berkumpul lebih nyaman dinikmati semua orang.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-[#FF5A1F] to-[#E04815] hover:from-[#E04815] hover:to-[#CC3D0A] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#FF5A1F]/30 shadow-lg shadow-[#FF5A1F]/20"
            >
              Belanja Sekarang
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl text-white bg-[#1A1A1A] border border-[#3A3A3A] hover:bg-[#2A2A2A] hover:border-[#FF5A1F]/50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pembelian Grosir
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-[#2A2A2A]/50 max-w-lg mx-auto">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Kualitas Ekspor
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Pengiriman &checkmark; Indonesia
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Pembayaran Aman
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Link href="#shop" className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
