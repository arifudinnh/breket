"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../context/CartContext";

const products: Product[] = [
  {
    id: "brq-cube-01",
    name: "Briket Kubus Premium",
    price: 200000,
    weight: "10 kg / Karton",
    image: "/images/breket.jpg",
  },
  {
    id: "brq-hexa-01",
    name: "Briket Heksagonal Premium",
    price: 200000,
    weight: "10 kg / Karton",
    image: "/images/breket.jpg",
  },
  {
    id: "brq-cube-02",
    name: "Briket Kubus Eceran",
    price: 20000,
    weight: "1 kg / Box",
    image: "/images/breket.jpg",
  },
  {
    id: "brq-hexa-02",
    name: "Briket Heksagonal Eceran",
    price: 20000,
    weight: "1 kg / Box",
    image: "/images/breket.jpg",
  },
];

const categories = ["Semua", "Premium", "Eceran"];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? products
      : activeCategory === "Premium"
        ? products.filter((p) => p.weight.includes("10 kg"))
        : products.filter((p) => p.weight.includes("1 kg"));

  return (
    <section id="shop" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#FF5A1F] text-sm font-semibold tracking-widest uppercase mb-2 block">
            Produk Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pilihan Produk Premium
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FF5A1F] to-[#FFA07A] mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-base text-gray-400">
            Briket arang batok kelapa kualitas ekspor langsung dari pabrik kami di Serang, Banten.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/20"
                  : "bg-[#1A1A1A] text-gray-400 border border-[#2A2A2A] hover:border-[#FF5A1F]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Tidak ada produk di kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}
