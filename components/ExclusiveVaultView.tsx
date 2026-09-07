"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Crown, Sparkles, Shield, ArrowRight, Lock } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ExclusiveVaultView() {
  const exclusiveProducts = products.filter((p) => p.isExclusive);

  return (
    <div className="min-h-screen bg-brand-white pt-16 sm:pt-20">
      {/* Luxury Hero Banner */}
      <section className="relative min-h-[420px] sm:min-h-[500px] bg-brand-black flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1920&q=80"
          alt="FW Wears Exclusive Vault Drop"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
          >
            <Crown size={13} />
            <span>The Vault Collection • 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight"
          >
            Limited Numbered Editions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xs sm:text-base max-w-xl mx-auto font-light leading-relaxed"
          >
            Where rarity meets uncompromising artistry. Every creation in The Vault is crafted in single micro-batches with serialized authenticity certificates.
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
          <span className="text-brand-black">The Exclusive Vault</span>
        </nav>
      </div>

      {/* Exclusive Catalog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <p className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">
              Available Vault Drops
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl text-brand-black">
              Current Micro-Batch
            </h2>
          </div>
          <p className="text-brand-gray-500 text-xs sm:text-sm">
            {exclusiveProducts.length} Bespoke Creations In Stock
          </p>
        </div>

        {/* 2-Col Mobile / 4-Col Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {exclusiveProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collector Privileges */}
      <section className="section-padding bg-brand-cream/60 border-t border-brand-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 font-semibold">
              Collector Tier
            </p>
            <h2 className="section-title">The Vault Privileges</h2>
            <p className="section-subtitle mx-auto">
              Every Vault acquisition includes bespoke concierge support and private provenance records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 border border-brand-gray-200 hover:border-brand-gold/60 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all">
                <Shield size={22} className="text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-brand-black mb-2 group-hover:text-brand-gold transition-colors">
                Serialized Provenance
              </h3>
              <p className="text-brand-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Individually engraved brass serial badge sewn directly into the interior lining, accompanied by a numbered certificate of origin.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-brand-gray-200 hover:border-brand-gold/60 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all">
                <Sparkles size={22} className="text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-brand-black mb-2 group-hover:text-brand-gold transition-colors">
                Bespoke Garment Bag
              </h3>
              <p className="text-brand-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Delivered in a breathable custom velvet travel case with solid cedarwood hangers to protect fiber elasticity for decades.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 border border-brand-gray-200 hover:border-brand-gold/60 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-brand-gold/15 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold/30 transition-all">
                <Lock size={22} className="text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-brand-black mb-2 group-hover:text-brand-gold transition-colors">
                VIP Drop Access
              </h3>
              <p className="text-brand-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                Vault patrons receive a 48-hour private invitation before seasonal micro-batches are released to the public.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-brand-gray-500 hover:text-brand-gold transition-colors text-xs sm:text-sm tracking-wider uppercase font-medium"
        >
          <ArrowRight size={15} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
