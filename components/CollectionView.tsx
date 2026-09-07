"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/data/products";
import { collections } from "@/data/products";
import ProductCard from "@/components/ProductCard";

interface CollectionViewProps {
  category: string;
  collectionName: string;
  collectionDescription: string;
  collectionImage: string;
  filteredProducts: Product[];
}

export default function CollectionView({
  category,
  collectionName,
  collectionDescription,
  collectionImage,
  filteredProducts,
}: CollectionViewProps) {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Collection Hero */}
      <section className="relative h-[38vh] sm:h-[48vh] min-h-[280px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src={collectionImage}
          alt={collectionName}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-10 sm:pt-0"
        >
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 font-semibold">
            FW Wears • Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-2.5 sm:mb-4 leading-tight">
            {collectionName}
          </h1>
          <p className="text-white/80 text-xs sm:text-base md:text-lg max-w-xl mx-auto font-light px-2">
            {collectionDescription}
          </p>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-brand-gray-500 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="/" className="hover:text-brand-gold transition-colors flex-shrink-0">
            Home
          </Link>
          <span className="text-brand-gray-300">/</span>
          <span className="text-brand-black">{collectionName}</span>
        </nav>
      </div>

      {/* Products Grid (2-Col Mobile, 4-Col Desktop) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <p className="text-brand-gray-500 text-xs sm:text-sm">
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "piece" : "pieces"}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <p className="text-brand-gray-400 text-base sm:text-lg">
                No products found in this collection.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Other Collections */}
      <section className="section-padding bg-brand-cream/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 font-semibold">
              Explore More
            </p>
            <h2 className="section-title">Other Collections</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(collections)
              .filter(([slug]) => slug !== category)
              .map(([slug, col], index) => (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    href={`/collections/${slug}`}
                    className="group relative block h-[220px] sm:h-[300px] overflow-hidden"
                  >
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="text-brand-gold text-[10px] tracking-widest uppercase mb-1">
                        {col.tag}
                      </p>
                      <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-brand-gold transition-colors">
                        {col.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-gray-500 hover:text-brand-gold transition-colors text-xs sm:text-sm tracking-wider uppercase"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
