"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Flame, ArrowRight, Tag, Percent, ShieldCheck, Truck } from "lucide-react";
import { products, formatPriceINR } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const saleFilterTabs = [
  "All Sale Items",
  "50% OFF",
  "40%+ OFF",
  "Winterwear",
  "Footwear",
  "Women",
  "Men",
];

export default function SaleView() {
  const [activeTab, setActiveTab] = useState("All Sale Items");

  // Get all products with significant discounts
  const saleProducts = products.filter((p) => {
    const savings = p.originalPrice ? p.originalPrice - p.price : 0;
    const percentage = p.originalPrice ? Math.round((savings / p.originalPrice) * 100) : 0;

    if (activeTab === "50% OFF") return percentage >= 50;
    if (activeTab === "40%+ OFF") return percentage >= 40;
    if (activeTab === "Winterwear") return p.category === "Winterwear" && savings > 0;
    if (activeTab === "Footwear") return p.category === "Footwear" && savings > 0;
    if (activeTab === "Women") return p.category === "Women" && savings > 0;
    if (activeTab === "Men") return p.category === "Men" && savings > 0;

    return p.isSpecialDeal || savings > 0;
  });

  return (
    <div className="min-h-screen bg-brand-white pt-16 sm:pt-20">
      {/* Sale Hero Banner */}
      <section className="bg-brand-black text-white py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-600 text-white text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-3 font-bold"
          >
            <Flame size={14} className="animate-bounce" />
            <span>Limited Flash Event • Up to 50% Off</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-3 leading-tight"
          >
            Special Offers & Clearance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xs sm:text-base max-w-xl mx-auto font-light leading-relaxed"
          >
            Acquire bespoke luxury essentials, tailored trousers, selvedge jackets, and handcrafted footwear at exceptional limited-time markdowns.
          </motion.p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-brand-gray-100">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-brand-gray-500">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span className="text-brand-gray-300">/</span>
          <span className="text-brand-black">Special Deals & Sale</span>
        </nav>
      </div>

      {/* Main Catalog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* Filter Pills Carousel on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 sm:flex-wrap sm:justify-center mb-8 sm:mb-12">
          {saleFilterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-widest transition-all duration-200 flex-shrink-0 hover:scale-105 active:scale-95 ${
                activeTab === tab
                  ? "bg-red-600 text-white shadow-md font-bold hover:bg-red-700"
                  : "bg-white text-brand-gray-600 hover:text-brand-black hover:border-brand-gold border border-brand-gray-200 shadow-xs"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Item Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-brand-gray-500">
            Showing <strong className="text-brand-black">{saleProducts.length}</strong> special discounted pieces
          </p>
          <span className="text-[11px] text-red-600 font-semibold uppercase tracking-wider flex items-center gap-1">
            <Percent size={13} />
            <span>Prices inclusive of all discounts</span>
          </span>
        </div>

        {/* Products Grid (2-Col Mobile / 4-Col Desktop) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {saleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Value Perks */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 border-t border-brand-gray-200 pt-10">
          <div className="p-4 bg-brand-cream/60 border border-brand-gray-200 hover:border-brand-gold/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center group">
            <Truck size={20} className="text-brand-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-black mb-1 group-hover:text-brand-gold transition-colors">
              Free Express Delivery
            </h3>
            <p className="text-[11px] text-brand-gray-500 font-light">
              Complimentary expedited courier on all sale orders in India.
            </p>
          </div>
          <div className="p-4 bg-brand-cream/60 border border-brand-gray-200 hover:border-brand-gold/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center group">
            <Tag size={20} className="text-brand-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-black mb-1 group-hover:text-brand-gold transition-colors">
              Extra 10% With Code FW10
            </h3>
            <p className="text-[11px] text-brand-gray-500 font-light">
              Stack welcome coupon FW10 at checkout for additional savings.
            </p>
          </div>
          <div className="p-4 bg-brand-cream/60 border border-brand-gray-200 hover:border-brand-gold/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center group">
            <ShieldCheck size={20} className="text-brand-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-black mb-1 group-hover:text-brand-gold transition-colors">
              Authentic Atelier Guarantee
            </h3>
            <p className="text-[11px] text-brand-gray-500 font-light">
              All sale items crafted to the same uncompromising quality standards.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-8 text-center sm:text-left">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-brand-gray-500 hover:text-brand-gold transition-colors text-xs sm:text-sm tracking-wider uppercase font-medium"
          >
            <ArrowRight size={15} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
