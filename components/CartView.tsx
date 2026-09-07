"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Tag,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPriceINR, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CartView() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    discount,
    promoCode,
    applyPromoCode,
    removePromoCode,
    total,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [promoMessage, setPromoMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;

    const res = applyPromoCode(inputCode);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) setInputCode("");
    setTimeout(() => setPromoMessage(null), 4000);
  };

  // Recommended products for empty cart or bottom carousel
  const recommended = products.filter((p) => p.isBestseller || p.isExclusive).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-white pt-16 sm:pt-20">

      {/* Header */}
      <section className="bg-brand-black py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 font-semibold">
            FW Wears • Shopping Bag
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-white">
            Your Cart {totalItems > 0 && <span className="text-brand-gold text-2xl sm:text-3xl">({totalItems})</span>}
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-brand-gray-100">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-brand-gray-500">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span className="text-brand-gray-300">/</span>
          <span className="text-brand-black">Shopping Bag</span>
        </nav>
      </div>

      {/* Main Cart Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {cart.length === 0 ? (
          /* Empty Bag State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-20"
          >
            <div className="w-20 h-20 bg-brand-cream flex items-center justify-center rounded-full mx-auto mb-6">
              <ShoppingBag size={32} className="text-brand-gold" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black mb-3">
              Your Shopping Bag is Empty
            </h2>
            <p className="text-brand-gray-500 text-sm sm:text-base max-w-md mx-auto mb-8 font-light">
              Explore our new arrivals, limited vault drops, and timeless essentials crafted for luxury.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/#products" className="btn-primary w-full sm:w-auto">
                Explore Featured Pieces
              </Link>
              <Link href="/exclusive" className="btn-outline !text-brand-black !border-brand-black hover:!bg-brand-black hover:!text-white w-full sm:w-auto">
                View Exclusive Vault Drops
              </Link>
            </div>

            {/* Recommended Carousel */}
            <div className="mt-16 sm:mt-24 text-left border-t border-brand-gray-200 pt-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase font-semibold">
                    Curated For You
                  </p>
                  <h3 className="font-serif text-2xl text-brand-black">
                    Popular This Week
                  </h3>
                </div>
                <Link
                  href="/#collections"
                  className="text-xs text-brand-gold hover:underline uppercase tracking-wider font-medium hidden sm:inline"
                >
                  View All Collections →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {recommended.map((p, index) => (
                  <ProductCard key={p.id} product={p} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          /* Active Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Items Column (7 Cols on desktop) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="flex items-center justify-between pb-4 border-b border-brand-gray-200 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gray-500">
                  Item Details
                </span>
                <button
                  onClick={clearCart}
                  className="text-xs text-brand-gray-400 hover:text-red-500 transition-colors uppercase tracking-wider font-medium"
                >
                  Clear Bag
                </button>
              </div>

              {/* Items List */}
              <div className="divide-y divide-brand-gray-100">
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="py-5 sm:py-6 flex gap-4 sm:gap-6 items-start"
                  >
                    {/* Item Thumbnail */}
                    <Link
                      href={`/products/${item.product.id}`}
                      className="relative w-20 h-28 sm:w-28 sm:h-36 bg-brand-gray-100 flex-shrink-0 overflow-hidden block group border border-transparent hover:border-brand-gold/50 transition-colors"
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="120px"
                      />
                    </Link>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-brand-gold text-[10px] tracking-widest uppercase font-semibold">
                            {item.product.category}
                          </p>
                          <Link
                            href={`/products/${item.product.id}`}
                            className="font-medium text-sm sm:text-base text-brand-black hover:text-brand-gold transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                        </div>
                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="text-brand-gray-400 hover:text-red-600 hover:scale-110 hover:rotate-6 p-1.5 transition-all duration-200"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Variant Specs */}
                      <div className="flex items-center gap-3 mt-2 text-xs text-brand-gray-600">
                        <span className="px-2 py-0.5 bg-brand-cream border border-brand-gray-200 font-medium hover:border-brand-gold/40 transition-colors">
                          Size: {item.size}
                        </span>
                        <span className="text-brand-gray-500">
                          Color: <strong className="text-brand-black">{item.color}</strong>
                        </span>
                      </div>

                      {/* Price & Stepper Row */}
                      <div className="flex items-center justify-between gap-2 mt-4 pt-2">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-brand-gray-200 bg-white shadow-xs">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-brand-gray-500 hover:text-brand-black hover:bg-brand-cream active:bg-brand-gray-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-brand-gray-500 hover:text-brand-black hover:bg-brand-cream active:bg-brand-gray-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        {/* Price Subtotal */}
                        <div className="text-right">
                          <p className="font-serif text-base sm:text-lg text-brand-black font-semibold">
                            {formatPriceINR(item.product.price * item.quantity)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-[10px] text-brand-gray-400">
                              {formatPriceINR(item.product.price)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Continue Shopping Link */}
              <div className="pt-6 border-t border-brand-gray-200 mt-6">
                <Link
                  href="/#products"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm text-brand-gray-600 hover:text-brand-gold transition-colors uppercase tracking-wider font-medium"
                >
                  <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                  <span>Continue Browsing Collections</span>
                </Link>
              </div>
            </div>

            {/* Right Summary Column (5 Cols on desktop) */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
              <div className="bg-brand-cream/60 border border-brand-gray-200 hover:border-brand-gold/40 transition-colors p-5 sm:p-7 shadow-sm">
                <h2 className="font-serif text-xl sm:text-2xl text-brand-black mb-5 pb-3 border-b border-brand-gray-200">
                  Order Summary
                </h2>

                {/* Promo Code Input */}
                <div className="mb-6 pb-6 border-b border-brand-gray-200">
                  <label
                    htmlFor="promo"
                    className="block text-[11px] font-semibold text-brand-black uppercase tracking-widest mb-2 flex items-center gap-1.5"
                  >
                    <Tag size={13} className="text-brand-gold" />
                    <span>Apply Promo Code</span>
                  </label>

                  {promoCode ? (
                    <div className="flex items-center justify-between p-2.5 bg-brand-gold/15 border border-brand-gold/30">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-brand-gold" />
                        <span className="text-xs font-semibold text-brand-black uppercase">
                          {promoCode} Applied
                        </span>
                      </div>
                      <button
                        onClick={removePromoCode}
                        className="text-[11px] text-red-600 hover:underline font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        id="promo"
                        value={inputCode}
                        onChange={(e) => setInputCode(e.target.value)}
                        placeholder="e.g. FW10"
                        className="flex-1 px-3 py-2 bg-white border border-brand-gray-200 text-xs text-brand-black placeholder:text-brand-gray-400 hover:border-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors uppercase"
                      />
                      <button
                        type="submit"
                        className="btn-primary text-[11px] px-4 py-2 min-h-[36px] hover:shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {/* Promo Message */}
                  {promoMessage && (
                    <p
                      className={`text-[11px] mt-2 ${
                        promoMessage.isError ? "text-red-500" : "text-green-600 font-medium"
                      }`}
                    >
                      {promoMessage.text}
                    </p>
                  )}
                  <p className="text-[10px] text-brand-gray-400 mt-1.5 font-light">
                    Tip: Use coupon <strong className="text-brand-black">FW10</strong> for 10% off your order.
                  </p>
                </div>

                {/* Calculation Breakdown */}
                <div className="space-y-3 text-xs sm:text-sm mb-6">
                  <div className="flex justify-between text-brand-gray-600">
                    <span>Bag Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
                    <span className="text-brand-black font-medium">{formatPriceINR(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Discount ({promoCode})</span>
                      <span>-{formatPriceINR(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-brand-gray-600">
                    <span className="flex items-center gap-1">
                      <Truck size={13} className="text-brand-gold" />
                      <span>Express Shipping (India)</span>
                    </span>
                    <span className="text-brand-gold font-semibold uppercase text-[11px]">Free</span>
                  </div>

                  <div className="flex justify-between text-brand-gray-600">
                    <span>GST / Taxes</span>
                    <span className="text-brand-gray-400 text-[11px]">Included</span>
                  </div>

                  <div className="border-t border-brand-gray-200 pt-4 flex justify-between items-baseline">
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-brand-black">
                        Estimated Total
                      </p>
                      <p className="text-[10px] text-brand-gray-400 font-light">
                        All inclusive of GST
                      </p>
                    </div>
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-black">
                      {formatPriceINR(total)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="btn-primary w-full gap-2 min-h-[48px] text-sm shadow-lg mb-4 hover:shadow-xl hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all group text-center"
                >
                  <Lock size={15} className="group-hover:scale-110 transition-transform" />
                  <span>Proceed to Checkout</span>
                </Link>

                {/* Trust Badges */}
                <div className="text-center pt-4 border-t border-brand-gray-200 space-y-2">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-gray-600">
                    <ShieldCheck size={14} className="text-brand-gold" />
                    <span>256-bit Encrypted Checkout • UPI, Cards & NetBanking</span>
                  </div>
                  <p className="text-[10px] text-brand-gray-400">
                    30-Day Hassle-Free Returns across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
