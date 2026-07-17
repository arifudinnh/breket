"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "Apa perbedaan briket kubus dan heksagonal?",
    a: "Bentuknya berbeda, tetapi kualitasnya sama-sama premium. Briket kubus lebih mudah disusun, sementara heksagonal memiliki luas permukaan lebih besar untuk pembakaran lebih merata. Keduanya berbahan dasar batok kelapa murni.",
  },
  {
    q: "Berapa lama waktu pembakaran briket?",
    a: "Rata-rata briket kami mampu bertahan lebih dari 2 jam dengan panas yang stabil. Cocok untuk berbagai kebutuhan memasak, dari bakaran kecil hingga acara besar.",
  },
  {
    q: "Apakah ada minimal pembelian?",
    a: "Tidak ada minimal pembelian untuk produk eceran. Untuk pembelian grosir (10 kg/karton), kami juga melayani pengiriman ke seluruh Indonesia.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (OVO, Dana, ShopeePay), dan COD untuk area Jabodetabek. Pembayaran dapat dilakukan setelah pesanan dikonfirmasi.",
  },
  {
    q: "Berapa lama waktu pengiriman?",
    a: "Pengiriman area Jabodetabek 1-2 hari kerja. Untuk luar pulau, estimasi 3-7 hari kerja tergantung lokasi dan ekspedisi yang digunakan.",
  },
  {
    q: "Apakah briket ini aman untuk makanan?",
    a: "Sangat aman. Briket kami 100% batok kelapa alami tanpa bahan kimia tambahan, sehingga tidak mengontaminasi makanan yang dibakar.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#111111]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF5A1F] text-sm font-semibold tracking-widest uppercase mb-2 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pertanyaan Umum
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5A1F] to-[#FFA07A] mx-auto rounded-full" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-medium hover:bg-[#222] transition-colors"
              >
                <span>{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
