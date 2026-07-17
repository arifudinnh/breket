"use client";

import React, { useState } from "react";
import { Product, useCart } from "../context/CartContext";

export default function ProductCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const isPremium = product.weight.includes("10 kg");

  return (
    <div className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-[#FF5A1F]/60 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-[#FF5A1F]/5 hover:-translate-y-1">
      <div className="relative h-56 w-full overflow-hidden bg-[#0D0D0D]">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {isPremium && (
            <span className="bg-gradient-to-r from-[#FF5A1F] to-[#E04815] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg">
              BEST SELLER
            </span>
          )}
          {!isPremium && (
            <span className="bg-[#1A1A1A]/80 backdrop-blur-sm text-gray-200 text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#3A3A3A]">
              ECERAN
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-semibold text-white border border-[#3A3A3A]">
          {product.weight}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-white mb-1 line-clamp-1 group-hover:text-[#FF5A1F] transition-colors">
          {product.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-[10px] text-gray-500 ml-1">(4.8)</span>
        </div>

        <p className="text-[#FF5A1F] font-bold text-lg mb-4">{formatPrice(product.price)}</p>

        {/* Quantity selector */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center border border-[#3A3A3A] rounded-lg bg-[#0D0D0D]">
            <button
              className="px-3 py-1.5 text-gray-400 hover:text-white hover:bg-[#2A2A2A] rounded-l-lg transition-colors text-sm"
              onClick={() => setQty(Math.max(1, qty - 1))}
            >
              -
            </button>
            <span className="px-3 py-1.5 text-white text-sm font-medium border-x border-[#3A3A3A] min-w-[2.5rem] text-center">
              {qty}
            </span>
            <button
              className="px-3 py-1.5 text-gray-400 hover:text-white hover:bg-[#2A2A2A] rounded-r-lg transition-colors text-sm"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-2.5 px-4 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
            added
              ? "bg-green-600"
              : "bg-[#2A2A2A] hover:bg-[#FF5A1F] group-hover:shadow-[0_0_15px_rgba(255,90,31,0.2)]"
          }`}
        >
          {added ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Ditambahkan
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah ke Keranjang
            </>
          )}
        </button>
      </div>
    </div>
  );
}
