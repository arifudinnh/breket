"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "transfer",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const itemsText = cart.map(item => `${item.quantity}x ${item.name}`).join('%0A');
    const waMessage = `*Pesanan Baru - Briket.id*%0A%0A*Nama:* ${formData.name}%0A*No HP:* ${formData.phone}%0A*Alamat:* ${formData.address}%0A*Metode Pembayaran:* ${formData.paymentMethod === 'transfer' ? 'Transfer Bank' : formData.paymentMethod === 'cod' ? 'Bayar di Tempat (COD)' : 'E-Wallet (OVO/Dana/dll)'}%0A%0A*Detail Pesanan:*%0A${itemsText}%0A%0A*Total Pembayaran:* Rp ${totalPrice.toLocaleString('id-ID')}`;
    
    // Open WhatsApp langsung (tanpa setTimeout agar tidak diblokir popup blocker)
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${waMessage}`, '_blank');
    
    // Simulate API call untuk UI
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="checkout" className="py-24 bg-[#111111] border-t border-[#2A2A2A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Selesaikan Pesanan
          </h2>
          <div className="w-16 h-1 bg-[#FF5A1F] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400">
            Lengkapi formulir di bawah ini. Kami akan mengarahkan Anda ke WhatsApp untuk konfirmasi pembayaran dan pengiriman.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-[#1A1A1A] border border-green-500 rounded-xl p-8 text-center shadow-lg shadow-green-500/10">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">Pesanan Diterima!</h3>
            <p className="text-gray-400">Terima kasih atas pesanan Anda, {formData.name}. Tim kami akan segera memprosesnya.</p>
          </div>
        ) : (
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 sm:p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors"
                    placeholder="Budi Santoso"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors"
                    placeholder="081234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">Alamat Lengkap</label>
                <textarea
                  id="address"
                  name="address"
                  rows={4}
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors resize-none"
                  placeholder="Nama Jalan, Kota, Provinsi, Kode Pos"
                />
              </div>

              <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-300 mb-2">Metode Pembayaran</label>
                <div className="relative">
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors appearance-none"
                  >
                    <option value="transfer">Transfer Bank (BCA/Mandiri/BRI)</option>
                    <option value="cod">Bayar di Tempat (COD) - Se-Jabodetabek</option>
                    <option value="ewallet">E-Wallet (OVO/Dana/ShopeePay)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 mt-4">
                <h4 className="text-white font-medium mb-3 border-b border-[#2A2A2A] pb-2">Ringkasan Pesanan</h4>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>{item.quantity}x {item.name}</span>
                    <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                  </div>
                ))}
                <div className="flex justify-between text-white font-bold text-lg mt-4 pt-4 border-t border-[#2A2A2A]">
                  <span>Total Tagihan:</span>
                  <span className="text-[#FF5A1F]">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#3A3A3A]">
                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  className="w-full py-4 bg-gradient-to-r from-[#FF5A1F] to-[#E04815] text-white text-lg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,90,31,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all duration-300 flex justify-center items-center gap-3 transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
                  ) : (
                    <>
                      Pesan via WhatsApp
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </>
                  )}
                </button>
                {cart.length === 0 && (
                  <p className="text-red-500 text-sm text-center mt-3">Keranjang masih kosong. Tambahkan produk untuk checkout.</p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
