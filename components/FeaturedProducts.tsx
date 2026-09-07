"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import Product3DCard from "./Product3DCard";

const filterCategories = [
  "All",
  "Men",
  "Women",
  "Streetwear",
  "Winterwear",
  "Footwear",
  "Accessories",
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-brand-cream/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10"
        >
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 font-semibold">
            Handpicked In India
          </p>
          <h2 className="section-title">Featured Pieces</h2>
          <p className="section-subtitle mx-auto">
            Our most coveted pieces, crafted with premium materials and priced in INR.
          </p>
        </motion.div>

        {/* Interactive Filter Chips with Hover Effects */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 sm:px-0 sm:flex-wrap sm:justify-center mb-8 sm:mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-widest transition-all duration-300 flex-shrink-0 cursor-pointer active:scale-95 ${
                activeCategory === cat
                  ? "bg-brand-black text-white shadow-md font-semibold scale-105"
                  : "bg-white text-brand-gray-600 hover:text-white hover:bg-brand-black hover:border-brand-black border border-brand-gray-200 hover:-translate-y-0.5 hover:shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Col Mobile Grid, 4-Col Desktop Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <Product3DCard product={product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore All CTA with Hover State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10 sm:mt-14"
        >
          <a href="/#collections" className="btn-primary w-full sm:w-auto">
            Explore All Collections
          </a>
        </motion.div>
      </div>
    </section>
  );
}
