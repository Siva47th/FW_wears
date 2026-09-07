"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 4000);
    }
  };

  return (
    <section className="section-padding bg-brand-cream">
      <div className="max-w-3xl mx-auto text-center px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 font-semibold">
            Exclusive Welcome Offer
          </p>
          <h2 className="section-title mb-3 sm:mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="section-subtitle mx-auto mb-6 sm:mb-8 text-xs sm:text-base">
            Join 50,000+ fashion enthusiasts across India. Get early access to limited drops, VIP discounts, and style curations.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 sm:px-5 py-3.5 bg-white border border-brand-gray-200 text-brand-black placeholder:text-brand-gray-400 hover:border-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors text-base sm:text-sm min-h-[46px]"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap gap-2 w-full sm:w-auto min-h-[46px] hover:shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all">
            <Send size={15} />
            <span>Subscribe</span>
          </button>
        </motion.form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-1.5 text-brand-black mt-4 text-xs sm:text-sm font-medium bg-brand-gold/20 py-2.5 px-4 rounded-none"
          >
            <CheckCircle size={16} className="text-brand-gold" />
            <span>Welcome to FW Wears! Your 10% discount code has been sent.</span>
          </motion.div>
        )}

        <p className="text-brand-gray-500 text-[11px] mt-4 font-light">
          No spam, ever. Unsubscribe with one click anytime.
        </p>
      </div>
    </section>
  );
}
