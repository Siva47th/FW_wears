"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  RotateCcw,
  Shield,
  Check,
} from "lucide-react";
import { formatPriceINR, type Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "./ProductCard";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="pt-16 sm:pt-20 bg-brand-white min-h-screen">
      {/* Breadcrumb - Swipeable on mobile without awkward break */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-brand-gray-500 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link href="/" className="hover:text-brand-gold transition-colors flex-shrink-0 hover:underline">
            Home
          </Link>
          <span className="text-brand-gray-300">/</span>
          <Link
            href={`/collections/${product.categorySlug}`}
            className="hover:text-brand-gold transition-colors flex-shrink-0 hover:underline"
          >
            {product.category}
          </Link>
          <span className="text-brand-gray-300">/</span>
          <span className="text-brand-black truncate max-w-[180px] sm:max-w-none font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-gray-100 mb-3 sm:mb-4 group border border-brand-gray-200">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.isNew && (
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-black text-white text-[9px] sm:text-xs tracking-widest uppercase px-3 py-1 font-medium shadow-md">
                  New
                </span>
              )}
              {product.isBestseller && (
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-brand-gold text-brand-black text-[9px] sm:text-xs tracking-widest uppercase px-3 py-1 font-semibold shadow-md">
                  Bestseller
                </span>
              )}
            </div>

            {/* Thumbnail Gallery with Hover Zoom */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden bg-brand-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                    selectedImage === index
                      ? "ring-2 ring-brand-gold ring-offset-2 shadow-md"
                      : "ring-1 ring-brand-gray-200 opacity-70 hover:opacity-100 hover:ring-brand-gold/60"
                  }`}
                  aria-label={`View photo ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Category & Title */}
            <p className="text-brand-gold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1.5 sm:mb-2 font-semibold">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-black mb-3 sm:mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price Row */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="font-serif text-2xl sm:text-3xl text-brand-black font-semibold">
                {formatPriceINR(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-brand-gray-400 line-through text-base sm:text-lg">
                  {formatPriceINR(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-50 text-red-600 text-[10px] sm:text-xs px-2.5 py-1 tracking-wider uppercase font-semibold border border-red-200">
                  Save {formatPriceINR(product.originalPrice - product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-light">
              {product.description}
            </p>

            {/* Color Selector with Hover Enlargement */}
            <div className="mb-6">
              <p className="text-xs sm:text-sm font-medium text-brand-black mb-2.5 tracking-wider uppercase">
                Color —{" "}
                <span className="font-normal text-brand-gray-500">
                  {selectedColor}
                </span>
              </p>
              <div className="flex gap-2.5 sm:gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300 hover:scale-120 hover:shadow-md active:scale-95 cursor-pointer ${
                      selectedColor === color.name
                        ? "border-brand-gold scale-110 ring-2 ring-brand-gold/40 shadow-sm"
                        : "border-brand-gray-200 hover:border-brand-gold/60"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name} color`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector with Hover State */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-xs sm:text-sm font-medium text-brand-black tracking-wider uppercase">
                  Select Size
                </p>
                <button className="text-[11px] sm:text-xs text-brand-gold hover:underline hover:text-brand-black tracking-wider uppercase font-medium transition-colors cursor-pointer">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[2.75rem] sm:min-w-[3.25rem] px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
                      selectedSize === size
                        ? "bg-brand-black text-white shadow-md"
                        : "bg-white border border-brand-gray-200 text-brand-black hover:border-brand-black hover:bg-brand-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-[11px] sm:text-xs text-brand-gold mt-2 font-medium">
                  * Please select a size to proceed
                </p>
              )}
            </div>

            {/* Quantity, Cart & Wishlist Actions with Hover Feedback */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-brand-gray-200 bg-white shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-11 flex items-center justify-center text-brand-gray-500 hover:text-brand-black hover:bg-brand-cream active:bg-brand-gray-200 transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-11 flex items-center justify-center text-brand-gray-500 hover:text-brand-black hover:bg-brand-cream active:bg-brand-gray-200 transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                {/* Wishlist Button on Mobile */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`sm:hidden h-11 px-3.5 border transition-all duration-300 flex items-center justify-center active:scale-95 cursor-pointer hover:scale-105 ${
                    isWishlisted
                      ? "border-red-300 bg-red-50 text-red-500 shadow-sm"
                      : "border-brand-gray-200 text-brand-gray-400 hover:text-red-500 hover:border-red-300"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 btn-primary gap-2 min-h-[44px] hover:shadow-xl hover:shadow-brand-gold/20 ${
                  !selectedSize
                    ? "opacity-60 cursor-not-allowed hover:bg-brand-black hover:text-brand-white"
                    : ""
                } ${addedToCart ? "!bg-green-600 !text-white hover:!bg-green-600" : ""}`}
              >
                {addedToCart ? (
                  <>
                    <Check size={18} />
                    <span>Added to Cart ({quantity})</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>{selectedSize ? `Add to Cart • ${formatPriceINR(product.price * quantity)}` : "Select a Size"}</span>
                  </>
                )}
              </button>

              {/* Desktop Wishlist Button with Hover Animation */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`hidden sm:flex h-11 px-4 border transition-all duration-300 items-center justify-center active:scale-95 hover:scale-110 cursor-pointer ${
                  isWishlisted
                    ? "border-red-300 bg-red-50 text-red-500 shadow-sm"
                    : "border-brand-gray-200 text-brand-gray-400 hover:text-red-500 hover:border-red-300 hover:bg-red-50/50"
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Quick View Cart link after adding */}
            {addedToCart && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-3 bg-brand-cream border border-brand-gold/40 flex items-center justify-between shadow-sm"
              >
                <span className="text-xs text-brand-black font-medium">
                  Item added to your shopping bag!
                </span>
                <Link
                  href="/cart"
                  className="text-xs text-brand-gold hover:underline hover:text-brand-black font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  <span>View Bag & Checkout →</span>
                </Link>
              </motion.div>
            )}

            {/* Trust Badges with Hover Highlight */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-5 sm:py-6 border-t border-brand-gray-200">
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded hover:bg-brand-cream/60 transition-colors">
                <Truck size={18} className="text-brand-gold" />
                <span className="text-[10px] sm:text-xs text-brand-gray-600 font-medium">
                  Free Shipping in India
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded hover:bg-brand-cream/60 transition-colors">
                <RotateCcw size={18} className="text-brand-gold" />
                <span className="text-[10px] sm:text-xs text-brand-gray-600 font-medium">
                  30-Day Easy Returns
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 p-2 rounded hover:bg-brand-cream/60 transition-colors">
                <Shield size={18} className="text-brand-gold" />
                <span className="text-[10px] sm:text-xs text-brand-gray-600 font-medium">
                  100% Authentic Quality
                </span>
              </div>
            </div>

            {/* Product Details Specs */}
            <div className="pt-5 sm:pt-6 border-t border-brand-gray-200">
              <h3 className="text-xs sm:text-sm font-medium text-brand-black tracking-wider uppercase mb-3 sm:mb-4">
                Fabric & Product Details
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li
                    key={index}
                    className="text-xs sm:text-sm text-brand-gray-600 flex items-start gap-2 hover:text-brand-black transition-colors"
                  >
                    <span className="text-brand-gold mt-1 text-[6px]">●</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-brand-cream/50 border-t border-brand-gray-200">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 font-semibold">
                You May Also Like
              </p>
              <h2 className="section-title">Related Pieces</h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
              {relatedProducts.slice(0, 4).map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link with Hover Underline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-gray-500 hover:text-brand-gold transition-all text-xs sm:text-sm tracking-wider uppercase hover:underline"
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
