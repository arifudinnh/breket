"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "briket10") {
      setPromoApplied(true);
    }
  };

  const shipping = totalPrice >= 200000 ? 0 : 15000;
  const discount = promoApplied ? Math.round(totalPrice * 0.1) : 0;
  const grandTotal = totalPrice + shipping - discount;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md transform transition-transform duration-300 ease-in-out bg-[#1A1A1A] border-l border-[#2A2A2A] shadow-2xl h-full flex flex-col">
          <div className="px-6 py-5 border-b border-[#2A2A2A] flex items-center justify-between bg-[#111111]">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <svg className="w-5 h-5 text-[#FF5A1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Keranjang ({cart.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-white transition-colors bg-[#2A2A2A] hover:bg-[#3A3A3A] p-2 rounded-full"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <svg className="w-24 h-24 mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-base font-medium">Keranjang masih kosong</p>
                <p className="text-sm mt-1">Tambahkan produk untuk memulai belanja</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-[#FF5A1F] hover:bg-[#E04815] text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Mulai Belanja
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-[#222] p-3.5 rounded-xl border border-[#2A2A2A]">
                    <div
                      className="w-16 h-16 bg-cover bg-center rounded-lg bg-[#0D0D0D] flex-shrink-0"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-medium truncate">{item.name}</h3>
                      <p className="text-[#FF5A1F] font-bold text-xs mt-0.5">{formatPrice(item.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#3A3A3A] rounded-md bg-[#0D0D0D]">
                          <button
                            className="px-2 py-1 text-gray-400 hover:text-white hover:bg-[#2A2A2A] rounded-l-md text-xs"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Kurangi jumlah"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-1 text-white text-xs font-medium border-x border-[#3A3A3A] min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-gray-400 hover:text-white hover:bg-[#2A2A2A] rounded-r-md text-xs"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Tambah jumlah"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors p-1 ml-auto"
                          title="Hapus"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-[#2A2A2A] bg-[#111111]">
              {/* Promo code */}
              <div className="px-6 py-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Kode promo"
                    className="flex-1 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FF5A1F]"
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                    className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    {promoApplied ? "Terpakai" : "Pakai"}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-green-500 text-xs mt-2">Diskon 10% berhasil diterapkan!</p>
                )}
              </div>

              <div className="px-6 pb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Ongkos Kirim</span>
                  <span className={shipping === 0 ? "text-green-500 font-medium" : "text-white font-medium"}>
                    {shipping === 0 ? "GRATIS" : formatPrice(shipping)}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Diskon (10%)</span>
                    <span className="text-green-500 font-medium">-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold pt-3 border-t border-[#2A2A2A]">
                  <span className="text-white">Total</span>
                  <span className="text-[#FF5A1F]">{formatPrice(grandTotal)}</span>
                </div>
                {totalPrice < 200000 && (
                  <p className="text-gray-500 text-xs text-center pt-1">
                    Belanja Rp 200.000 lagi untuk gratis ongkir
                  </p>
                )}
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-[#FF5A1F] to-[#E04815] hover:from-[#E04815] hover:to-[#CC3D0A] text-white font-bold rounded-xl transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-[#FF5A1F]/20"
                >
                  Lanjut ke Pembayaran
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
