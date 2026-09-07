"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Crown } from "lucide-react";
import { products, formatPriceINR } from "@/data/products";

export default function ExclusiveSection() {
  const exclusiveItems = products.filter((p) => p.isExclusive).slice(0, 3);

  return (
    <section className="section-padding bg-brand-black text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2.5 font-semibold">
              <Crown size={14} className="text-brand-gold" />
              <span>The Vault • Limited Edition</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Exclusive Bespoke Drops
            </h2>
            <p className="text-white/70 text-xs sm:text-base max-w-xl mt-2 font-light">
              Individually numbered pieces, rarest Mongolian cashmere, 24k gold filament, and hand-burnished Tuscan leathers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/exclusive"
              className="inline-flex items-center gap-2 btn-primary !bg-brand-gold !text-brand-black hover:!bg-white text-xs py-3 px-6"
            >
              <span>Explore The Vault</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Exclusive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {exclusiveItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Link
                href={`/products/${item.id}`}
                className="group block bg-white/5 border border-white/10 hover:border-brand-gold hover:bg-white/[0.08] hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-400 p-3.5 sm:p-4 relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Top Rarity Badge */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-brand-gold text-brand-black text-[9px] tracking-widest uppercase px-2.5 py-1 font-bold group-hover:bg-white group-hover:text-brand-black transition-colors shadow-md">
                      {item.rarity || "Exclusive"}
                    </span>
                    {item.edition && (
                      <span className="bg-black/80 backdrop-blur-md text-white/90 text-[8px] tracking-wider uppercase px-2 py-0.5 border border-white/10 group-hover:border-brand-gold/40 transition-colors">
                        {item.edition}
                      </span>
                    )}
                  </div>
                </div>

                {/* Specs */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-brand-gold text-[10px] tracking-widest uppercase font-semibold">
                      Vault Drop #{index + 1}
                    </span>
                    <span className="text-white/40 text-[10px]">Limited Stock</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-brand-gold transition-colors line-clamp-1 mb-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    <p className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-brand-gold transition-colors">
                      {formatPriceINR(item.price)}
                    </p>
                    <span className="text-xs text-brand-gold group-hover:translate-x-1.5 transition-transform flex items-center gap-1 font-medium">
                      <span>Inspect</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Atelier Guarantee Bar */}
        <div className="mt-12 sm:mt-16 py-5 px-6 bg-white/[0.03] border border-white/10 hover:border-brand-gold/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-gold/25 transition-all">
              <ShieldCheck size={20} className="text-brand-gold" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white tracking-wider uppercase">
                Certificate of Authenticity & Atelier Numbering
              </p>
              <p className="text-[11px] text-white/60 font-light">
                Each exclusive piece is issued with an engraved serial plate and bespoke packaging.
              </p>
            </div>
          </div>
          <Link
            href="/exclusive"
            className="text-xs text-brand-gold hover:text-white uppercase tracking-wider font-semibold whitespace-nowrap hover:translate-x-1 transition-transform"
          >
            Read Vault Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
