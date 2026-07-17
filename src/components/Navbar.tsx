"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setSearchQuery("");
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-lg border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold text-[#F9FAFB] tracking-tight">
                Briket<span className="text-[#FF5A1F]">.id</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#home" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Beranda</Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                  Kategori
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a href="#shop" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-colors">Semua Produk</a>
                  <a href="#shop" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-colors">Briket Kubus</a>
                  <a href="#shop" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-colors">Briket Heksagonal</a>
                  <a href="#shop" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#2A2A2A] transition-colors border-t border-[#2A2A2A] mt-1 pt-2">Paket Grosir</a>
                </div>
              </div>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Tentang</Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Kontak</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari produk..."
                  className="w-52 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A1F] transition-colors"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-gray-300 hover:text-white transition-colors group bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg"
              aria-label="Keranjang Belanja"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#FF5A1F] rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 text-gray-300 hover:text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg transition-colors"
                aria-label="Menu Mobile"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-b border-[#2A2A2A]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <form onSubmit={handleSearch} className="mb-3">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari produk..."
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg pl-9 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A1F]"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
            <Link href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-[#2A2A2A]">Beranda</Link>
            <Link href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-[#2A2A2A]">Semua Produk</Link>
            <Link href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-[#2A2A2A] pl-6">Briket Kubus</Link>
            <Link href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-[#2A2A2A] pl-6">Briket Heksagonal</Link>
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-[#2A2A2A]">Tentang Kami</Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-[#2A2A2A]">Kontak</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
