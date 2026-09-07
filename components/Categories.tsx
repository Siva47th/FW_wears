"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { collections, products } from "@/data/products";

export default function Categories() {
  const collectionEntries = Object.entries(collections);

  return (
    <section id="collections" className="section-padding bg-brand-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 font-semibold">
            <Sparkles size={12} />
            <span>Curated For You</span>
          </div>
          <h2 className="section-title">Explore Our Collections</h2>
          <p className="section-subtitle mx-auto">
            Discover precision tailoring, luxury fabrics, and contemporary streetwear designed for effortless sophistication.
          </p>
        </motion.div>

        {/* 6-Collection Responsive Grid with Rich Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {collectionEntries.map(([slug, category], index) => {
            const count = products.filter((p) => p.categorySlug === slug).length;

            return (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="transition-all duration-300 hover:-translate-y-1.5"
              >
                <Link
                  href={
                    slug === "sale"
                      ? "/sale"
                      : slug === "exclusive"
                      ? "/exclusive"
                      : `/collections/${slug}`
                  }
                  className="group relative block overflow-hidden rounded-none h-[280px] xs:h-[320px] sm:h-[380px] lg:h-[420px] bg-brand-black shadow-md hover:shadow-2xl hover:shadow-black/30 transition-all duration-500"
                >
                  {/* Image with Ultra-Smooth Zoom */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-85 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Top Tag Badge with Hover Glow */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <span className="bg-black/60 group-hover:bg-brand-gold group-hover:text-brand-black backdrop-blur-md text-white/90 border border-white/15 group-hover:border-brand-gold text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 font-semibold transition-all duration-300 shadow-sm">
                      {category.tag}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-7">
                    <p className="text-brand-gold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1 font-medium group-hover:tracking-[0.25em] transition-all duration-300">
                      {count} {count === 1 ? "Item" : "Items"}
                    </p>
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-white group-hover:text-brand-gold transition-colors duration-300 leading-tight">
                          {category.name}
                        </h3>
                        <p className="text-white/70 group-hover:text-white/90 text-xs mt-1 line-clamp-2 font-light hidden xs:block transition-colors">
                          {category.description}
                        </p>
                      </div>
                      {/* Arrow circle with rotation & gold fill on hover */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-white transition-all duration-300 group-hover:bg-brand-gold group-hover:text-brand-black group-hover:border-brand-gold group-hover:scale-110 group-hover:rotate-45 shadow-md">
                        <ArrowRight size={15} className="transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
