"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="about" className="section-padding bg-brand-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14"
        >
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 font-semibold">
            Social Proof
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Stats Row - 3 symmetric columns on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-3 gap-2 sm:flex sm:justify-center sm:gap-16 mb-10 sm:mb-16 border-y border-white/10 py-6 sm:border-y-0 sm:py-0"
        >
          <div className="text-center group cursor-default hover:scale-105 transition-transform duration-300">
            <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-gold font-medium group-hover:text-white transition-colors">
              <AnimatedCounter target={10000} suffix="+" />
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs mt-1 sm:mt-2 tracking-wider uppercase font-medium">
              Happy Clients
            </p>
          </div>
          <div className="text-center border-x border-white/10 sm:border-x-0 px-2 sm:px-0 group cursor-default hover:scale-105 transition-transform duration-300">
            <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-gold font-medium group-hover:text-white transition-colors">
              <AnimatedCounter target={50} suffix="+" />
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs mt-1 sm:mt-2 tracking-wider uppercase font-medium">
              Cities
            </p>
          </div>
          <div className="text-center group cursor-default hover:scale-105 transition-transform duration-300">
            <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-gold font-medium group-hover:text-white transition-colors">
              4.9
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs mt-1 sm:mt-2 tracking-wider uppercase font-medium">
              Avg Rating
            </p>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-gold/50 hover:bg-white/[0.08] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 p-5 sm:p-7 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4 group-hover:scale-105 transition-transform origin-left">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 leading-relaxed mb-5 sm:mb-6 text-xs sm:text-sm font-light group-hover:text-white transition-colors">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-gold/20 group-hover:bg-brand-gold group-hover:scale-110 transition-all flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-gold group-hover:text-brand-black text-xs font-semibold transition-colors">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-xs sm:text-sm group-hover:text-brand-gold transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-white/50 text-[11px]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
