"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatPriceINR, type Product } from "@/data/products";

interface Product3DCardProps {
  product: Product;
  index: number;
}

export default function Product3DCard({ product, index }: Product3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const savings = product.originalPrice
    ? product.originalPrice - product.price
    : 0;
  const percentage = product.originalPrice
    ? Math.round((savings / product.originalPrice) * 100)
    : 0;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 20; // -10 to +10 deg
      const rotateX = (0.5 - y) * 20; // -10 to +10 deg

      setTilt({ rotateX, rotateY });
      setGlarePos({ x: x * 100, y: y * 100 });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.32),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="perspective-container"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card-3d"
        style={{
          transform: isHovering
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.03, 1.03, 1.03)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          boxShadow: isHovering
            ? "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 30px rgba(201,169,110,0.1)"
            : "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Link
          href={`/products/${product.id}`}
          className="group block cursor-pointer active:opacity-95"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray-100 mb-2.5 sm:mb-3.5 border border-brand-gray-200/60 group-hover:border-brand-gold/40 transition-colors">
            {/* Parallax image shift */}
            <div
              className="absolute inset-[-8px] transition-transform duration-500 ease-out"
              style={{
                transform: isHovering
                  ? `translate(${-tilt.rotateY * 0.5}px, ${tilt.rotateX * 0.5}px)`
                  : "translate(0px, 0px)",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Glare overlay */}
            <div
              className="glare-overlay"
              style={
                {
                  "--glare-x": `${glarePos.x}%`,
                  "--glare-y": `${glarePos.y}%`,
                } as React.CSSProperties
              }
            />

            {/* Badges with float animation */}
            <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 flex flex-col gap-1.5 z-10">
              {percentage >= 35 && (
                <span className="floating-badge bg-red-600 text-white text-[8px] sm:text-[9px] tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold shadow-md">
                  {product.discountBadge || `-${percentage}% OFF`}
                </span>
              )}
              {product.isNew && (
                <span className="floating-badge bg-brand-black text-white text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-medium" style={{ animationDelay: "0.5s" }}>
                  New
                </span>
              )}
              {product.isBestseller && (
                <span className="floating-badge bg-brand-gold text-brand-black text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-semibold" style={{ animationDelay: "1s" }}>
                  Bestseller
                </span>
              )}
              {product.isExclusive && (
                <span className="floating-badge bg-brand-gold text-brand-black text-[8px] sm:text-[9px] tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 font-bold shadow-sm" style={{ animationDelay: "0.7s" }}>
                  Vault
                </span>
              )}
            </div>

            {/* Hover Overlay & Action (Desktop) */}
            <div className="hidden sm:flex absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 items-center justify-center z-10">
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
      </div>
    </motion.div>
  );
}
