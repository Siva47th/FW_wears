"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-brand-white pt-16 sm:pt-20">
      {/* Header */}
      <section className="bg-brand-black py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center px-4"
        >
          <p className="text-brand-gold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 font-semibold">
            Get In Touch • India
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white mb-3 sm:mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-white/70 text-xs sm:text-base max-w-xl mx-auto font-light">
            Have a question regarding styling, sizing, orders, or collaborations? We&apos;re here for you.
          </p>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b border-brand-gray-100">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-brand-gray-500">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span className="text-brand-gray-300">/</span>
          <span className="text-brand-black">Contact</span>
        </nav>
      </div>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-black mb-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-brand-gray-500 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-light">
              Whether you need help with sizing, fabric specifications, tracking, or bulk inquiries, our concierge team is on standby.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-brand-cream/40 sm:bg-brand-cream/30 border border-brand-gray-200/60 hover:border-brand-gold/60 hover:bg-brand-cream/70 hover:scale-[1.02] transition-all duration-300 group">
                <div className="w-10 h-10 bg-brand-cream flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:scale-110 transition-all">
                  <Mail size={16} className="text-brand-gold group-hover:text-brand-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-brand-black tracking-wider uppercase mb-0.5 group-hover:text-brand-gold transition-colors">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@fwwears.com"
                    className="text-brand-gray-600 hover:text-brand-gold transition-colors text-xs sm:text-sm font-medium"
                  >
                    hello@fwwears.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-brand-cream/40 sm:bg-brand-cream/30 border border-brand-gray-200/60 hover:border-brand-gold/60 hover:bg-brand-cream/70 hover:scale-[1.02] transition-all duration-300 group">
                <div className="w-10 h-10 bg-brand-cream flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:scale-110 transition-all">
                  <Phone size={16} className="text-brand-gold group-hover:text-brand-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-brand-black tracking-wider uppercase mb-0.5 group-hover:text-brand-gold transition-colors">
                    Phone & WhatsApp
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-brand-gray-600 hover:text-brand-gold transition-colors text-xs sm:text-sm font-medium"
                  >
                    +91 (987) 654-3210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-brand-cream/40 sm:bg-brand-cream/30 border border-brand-gray-200/60 hover:border-brand-gold/60 hover:bg-brand-cream/70 hover:scale-[1.02] transition-all duration-300 group">
                <div className="w-10 h-10 bg-brand-cream flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:scale-110 transition-all">
                  <MapPin size={16} className="text-brand-gold group-hover:text-brand-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-brand-black tracking-wider uppercase mb-0.5 group-hover:text-brand-gold transition-colors">
                    Design Flagship
                  </h3>
                  <p className="text-brand-gray-600 text-xs sm:text-sm">
                    42 Indiranagar 100ft Road,
                    <br />
                    Bengaluru, Karnataka 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-brand-cream/40 sm:bg-brand-cream/30 border border-brand-gray-200/60 hover:border-brand-gold/60 hover:bg-brand-cream/70 hover:scale-[1.02] transition-all duration-300 group">
                <div className="w-10 h-10 bg-brand-cream flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:scale-110 transition-all">
                  <Clock size={16} className="text-brand-gold group-hover:text-brand-black transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-brand-black tracking-wider uppercase mb-0.5 group-hover:text-brand-gold transition-colors">
                    Support Hours
                  </h3>
                  <p className="text-brand-gray-600 text-xs sm:text-sm">
                    Mon – Sat: 10:00 AM – 8:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-cream p-6 sm:p-12 text-center"
              >
                <div className="w-14 h-14 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle size={26} className="text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl text-brand-black mb-2 sm:mb-3">
                  Message Dispatched!
                </h3>
                <p className="text-brand-gray-600 text-xs sm:text-sm mb-6 max-w-sm mx-auto">
                  Thank you for contacting FW Wears. Our support team will review your inquiry and respond within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary w-full sm:w-auto hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-cream/50 p-5 sm:p-8 lg:p-10 border border-brand-gray-200 hover:border-brand-gold/40 transition-colors shadow-sm"
              >
                <h2 className="font-serif text-xl sm:text-2xl text-brand-black mb-6">
                  Send Us a Message
                </h2>
                <div className="space-y-4 sm:space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] font-medium text-brand-black tracking-wider uppercase mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Arjun Sharma"
                        className="w-full px-4 py-3 bg-white border border-brand-gray-200 text-brand-black placeholder:text-brand-gray-400 hover:border-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors text-base sm:text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-medium text-brand-black tracking-wider uppercase mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="arjun@example.com"
                        className="w-full px-4 py-3 bg-white border border-brand-gray-200 text-brand-black placeholder:text-brand-gray-400 hover:border-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors text-base sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[11px] font-medium text-brand-black tracking-wider uppercase mb-1.5"
                    >
                      Subject Topic
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-brand-gray-200 text-brand-black hover:border-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors text-base sm:text-sm"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">Order & Tracking Inquiry</option>
                      <option value="sizing">Size & Fit Consultation</option>
                      <option value="returns">Exchange or Return</option>
                      <option value="wholesale">Wholesale & Partnership</option>
                      <option value="feedback">General Feedback</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-medium text-brand-black tracking-wider uppercase mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we assist you today?"
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-brand-gray-200 text-brand-black placeholder:text-brand-gray-400 hover:border-brand-gray-400 focus:outline-none focus:border-brand-gold transition-colors text-base sm:text-sm resize-none"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full gap-2 min-h-[46px] hover:shadow-lg hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all">
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
