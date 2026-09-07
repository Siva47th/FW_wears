"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag, ArrowRight, Crown, Flame } from "lucide-react";
import Link from "next/link";
import { collections } from "@/data/products";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Special Deals", href: "/sale", isSale: true },
  { name: "Collections", href: "/#collections" },
  { name: "Featured", href: "/#products" },
  { name: "Exclusive Vault", href: "/exclusive", isSpecial: true },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-black/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Hover Animation */}
            <Link href="/" className="group flex items-center gap-1.5 focus:outline-none">
              <span className="font-serif text-2xl sm:text-3xl text-white tracking-wider font-semibold group-hover:text-brand-gold transition-colors duration-300">
                FW
              </span>
              <span className="text-white/70 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-light group-hover:text-white transition-colors duration-300">
                Wears
              </span>
            </Link>

            {/* Desktop Nav Links with Animated Underline Hover */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-[0.16em] uppercase transition-all duration-300 font-medium flex items-center gap-1.5 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:transition-all after:duration-300 ${
                    link.isSale
                      ? "text-red-400 hover:text-red-300 font-bold after:bg-red-400 hover:scale-105"
                      : link.isSpecial
                      ? "text-brand-gold hover:text-white after:bg-brand-gold hover:scale-105"
                      : "text-white/80 hover:text-brand-gold after:bg-brand-gold"
                  }`}
                >
                  {link.isSale && <Flame size={12} className="text-red-400 transition-transform group-hover:scale-125" />}
                  {link.isSpecial && <Crown size={12} className="text-brand-gold transition-transform group-hover:rotate-12" />}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Actions (Desktop & Mobile) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button with Hover Glow */}
              <Link
                href="/#products"
                aria-label="Search collection"
                className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-brand-gold hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Search size={18} />
              </Link>

              {/* Cart Button linking to /cart with Hover Scale & Glow */}
              <Link
                href="/cart"
                aria-label="Shopping bag"
                className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-brand-gold hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 relative group"
              >
                <ShoppingBag size={19} className="group-hover:rotate-6 transition-transform" />
                {totalItems > 0 ? (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-gold text-brand-black text-[10px] rounded-full flex items-center justify-center font-bold animate-pulse group-hover:scale-110 transition-transform shadow-sm">
                    {totalItems}
                  </span>
                ) : (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-white/40 group-hover:bg-brand-gold rounded-full transition-colors" />
                )}
              </Link>

              {/* Desktop CTA with Hover Animation */}
              <Link
                href="/sale"
                className="hidden md:inline-flex btn-primary text-xs py-2 px-5 min-h-[36px] !bg-red-600 hover:!bg-brand-gold hover:!text-brand-black hover:shadow-lg hover:shadow-red-600/30"
              >
                50% Off Deals
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 rounded-full active:scale-90 transition-all duration-200 ml-1"
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-xl flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
          >
            {/* Main Nav Links */}
            <div className="flex flex-col gap-4 py-4 border-b border-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl tracking-[0.15em] uppercase font-light transition-all duration-200 flex items-center justify-between hover:translate-x-2 ${
                    link.isSale
                      ? "text-red-400 font-semibold hover:text-red-300"
                      : link.isSpecial
                      ? "text-brand-gold font-medium hover:text-white"
                      : "text-white hover:text-brand-gold"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    {link.isSale && <Flame size={16} />}
                    {link.isSpecial && <Crown size={16} />}
                    <span>{link.name}</span>
                  </span>
                  <ArrowRight size={16} className="text-brand-gold" />
                </Link>
              ))}

              {/* Direct View Bag link in drawer */}
              <Link
                href="/cart"
                className="text-white/80 text-base tracking-[0.15em] uppercase font-light hover:text-brand-gold hover:translate-x-2 transition-all flex items-center justify-between pt-2 border-t border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag size={16} className="text-brand-gold" />
                  <span>View Shopping Bag</span>
                </span>
                <span className="px-2 py-0.5 bg-brand-gold text-brand-black text-xs font-bold rounded-full">
                  {totalItems}
                </span>
              </Link>
            </div>

            {/* Quick Collections Browser */}
            <div className="py-5 border-b border-white/10">
              <p className="text-brand-gold text-[10px] tracking-[0.3em] uppercase mb-3.5 font-semibold">
                Explore Collections
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(collections).map(([slug, col]) => (
                  <Link
                    key={slug}
                    href={
                      slug === "sale"
                        ? "/sale"
                        : slug === "exclusive"
                        ? "/exclusive"
                        : `/collections/${slug}`
                    }
                    className={`p-3 border rounded-none text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      slug === "sale"
                        ? "bg-red-950/40 border-red-500/40 text-red-300 hover:border-red-400"
                        : slug === "exclusive"
                        ? "bg-brand-gold/15 border-brand-gold/40 text-brand-gold hover:border-brand-gold"
                        : "bg-white/5 border-white/5 text-white hover:border-brand-gold"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <p className="text-xs font-medium line-clamp-1">
                      {col.name}
                    </p>
                    <p className="text-white/40 text-[10px] mt-0.5 tracking-wider">
                      {col.tag}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="mt-auto pt-6 flex flex-col gap-3">
              <Link
                href="/sale"
                className="btn-primary w-full text-center gap-2 !bg-red-600 text-white hover:!bg-brand-gold hover:!text-brand-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Flame size={16} />
                <span>Shop 50% Off Special Deals</span>
              </Link>
              <p className="text-white/40 text-[11px] text-center tracking-wider font-light">
                Express Delivery Across India • ₹ INR Accepted
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
