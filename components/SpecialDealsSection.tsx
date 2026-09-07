"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Flame, ArrowRight, Clock, Tag, Sparkles } from "lucide-react";
import { products, formatPriceINR } from "@/data/products";
import Product3DCard from "@/components/Product3DCard";

export default function SpecialDealsSection() {
  const deals = products.filter((p) => p.isSpecialDeal || (p.originalPrice && p.originalPrice - p.price >= 2000)).slice(0, 4);

  // Live countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-brand-cream/80 via-white to-brand-cream/40 border-y border-brand-gray-200 relative overflow-hidden">
      {/* Decorative Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Countdown Timer */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 text-red-600 text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-3 font-bold rounded-none">
              <Flame size={14} className="text-red-600 animate-bounce" />
              <span>Special Offers • Up to 50% Off</span>
            </div>
            <h2 className="section-title">High Discount Deals</h2>
            <p className="section-subtitle">
              Limited-quantity seasonal markdowns on luxury tailoring, footwear, and heavyweight knitwear.
            </p>
          </motion.div>

          {/* Countdown Clock Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 p-3.5 sm:p-4 bg-brand-black text-white border border-brand-gold/30 shadow-md hover:border-brand-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group glow-ring"
          >
            <Clock size={18} className="text-brand-gold flex-shrink-0 animate-pulse group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-[10px] text-white/60 tracking-widest uppercase font-semibold">
                Flash Offer Closes In:
              </p>
              <div className="flex items-center gap-1.5 font-serif text-lg sm:text-xl text-brand-gold font-bold">
                <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
                <span className="text-white/40">:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
                <span className="text-white/40">:</span>
                <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4-Item High Discount Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {deals.map((product, index) => (
            <Product3DCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Deals CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            href="/sale"
            className="btn-primary gap-2 w-full sm:w-auto !bg-red-600 hover:!bg-brand-black text-white hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-1 transition-all duration-300"
          >
            <Tag size={15} />
            <span>Explore All Special Discounts & Sale</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
