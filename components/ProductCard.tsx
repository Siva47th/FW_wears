"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatPriceINR, type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  const percentage = product.originalPrice
    ? Math.round((savings / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <Link href={`/products/${product.id}`} className="group block cursor-pointer active:opacity-95">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray-100 mb-2.5 sm:mb-3.5 border border-brand-gray-200/60 group-hover:border-brand-gold/40 transition-colors">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex flex-col gap-1.5 z-10">
            {percentage >= 35 && (
              <span className="bg-red-600 text-white text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold shadow-sm group-hover:scale-105 transition-transform">
                {product.discountBadge || `-${percentage}% OFF`}
              </span>
            )}
            {product.isNew && (
              <span className="bg-brand-black text-white text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-medium">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-brand-gold text-brand-black text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-semibold">
                Bestseller
              </span>
            )}
            {product.isExclusive && (
              <span className="bg-brand-gold text-brand-black text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold shadow-sm">
                Vault
              </span>
            )}
          </div>

          {/* Hover Overlay & Action (Desktop) */}
          <div className="hidden sm:flex absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 items-center justify-center">
            <span className="btn-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 text-xs py-2 px-4 min-h-[36px] !bg-white !text-brand-black hover:!bg-brand-gold hover:!text-brand-black shadow-lg">
              Inspect Piece
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-0.5">
          <p className="text-brand-gray-500 text-[10px] sm:text-xs tracking-[0.15em] uppercase mb-0.5 sm:mb-1 font-medium group-hover:text-brand-gold transition-colors">
            {product.category}
          </p>
          <h3 className="font-medium text-brand-black text-xs sm:text-sm lg:text-base mb-1 group-hover:text-brand-gold transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <p className="text-brand-black font-serif text-sm sm:text-lg font-semibold">
              {formatPriceINR(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-brand-gray-400 line-through text-[11px] sm:text-sm">
                {formatPriceINR(product.originalPrice)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
