"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms: background moves slower, text moves faster
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[560px] sm:min-h-[680px] h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt="FW Wears fashion collection showcase"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay with parallax opacity */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"
        style={{ opacity: overlayOpacity }}
      />

      {/* Sparkle Particles for premium alive feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="sparkle-particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Content with parallax shift */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-16 sm:pt-0"
        style={{ y: textY }}
      >
        <div className="animate-hero-fade-in inline-block">
          <span className="text-brand-gold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[11px] sm:text-xs mb-4 sm:mb-6 block font-medium">
            New Collection 2026 • India
          </span>
        </div>

        <h1 className="animate-hero-fade-in-delayed-1 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6">
          Wear the
          <br />
          <span className="italic shimmer-text">Future</span>
        </h1>

        <p className="animate-hero-fade-in-delayed-2 text-white/80 text-sm sm:text-lg md:text-xl max-w-xl mx-auto mb-8 sm:mb-10 font-light px-2">
          Premium fashion for the modern individual. Timeless craftsmanship, contemporary aesthetics, priced in INR.
        </p>

        <div className="animate-hero-fade-in-delayed-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <Link
            href="/#products"
            className="btn-primary !bg-brand-gold !text-brand-black hover:!bg-white hover:!text-brand-black font-semibold shadow-lg shadow-brand-gold/20 hover:shadow-white/20 w-full sm:w-auto"
          >
            Shop New Arrivals
          </Link>
          <Link
            href="/#collections"
            className="btn-primary !bg-brand-gold !text-brand-black hover:!bg-white hover:!text-brand-black font-semibold shadow-lg shadow-brand-gold/20 hover:shadow-white/20 w-full sm:w-auto"
          >
            Explore Collections
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 hidden xs:block"
      >
        <Link
          href="#collections"
          className="group flex flex-col items-center gap-1 text-white/50 hover:text-brand-gold transition-colors duration-300 cursor-pointer p-2"
          aria-label="Scroll to collections"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="group-hover:scale-125 transition-transform duration-300"
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
