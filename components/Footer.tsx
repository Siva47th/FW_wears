"use client";

import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  shop: {
    title: "Collections",
    links: [
      { name: "Men's Collection", href: "/collections/men" },
      { name: "Women's Collection", href: "/collections/women" },
      { name: "Streetwear & Oversized", href: "/collections/streetwear" },
      { name: "Outerwear & Jackets", href: "/collections/winterwear" },
      { name: "Footwear & Sneakers", href: "/collections/footwear" },
      { name: "Luxury Accessories", href: "/collections/accessories" },
    ],
  },
  support: {
    title: "Customer Care",
    links: [
      { name: "Size & Fit Guide", href: "/#products" },
      { name: "Shipping & Returns (India)", href: "/#about" },
      { name: "Order Tracking", href: "/#products" },
      { name: "Contact & WhatsApp", href: "/contact" },
      { name: "Terms of Service", href: "#" },
    ],
  },
  company: {
    title: "FW Wears",
    links: [
      { name: "Our Philosophy", href: "/#about" },
      { name: "Sustainable Fabrics", href: "/#about" },
      { name: "Design Studio", href: "/contact" },
      { name: "Careers", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6 group">
              <span className="font-serif text-3xl tracking-wider font-semibold group-hover:text-brand-gold transition-colors">FW</span>
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase ml-2 font-light group-hover:text-white transition-colors">
                Wears
              </span>
            </Link>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-light">
              Premium fashion designed for the modern individual. Timeless craftsmanship, modern minimalism, sustainably curated in India.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/70 hover:text-brand-black hover:bg-brand-gold hover:border-brand-gold hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300 shadow-sm"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((column) => (
            <div key={column.title}>
              <h4 className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white mb-4 sm:mb-6 font-semibold text-brand-gold">
                {column.title}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-brand-gold hover:translate-x-1.5 text-xs sm:text-sm transition-all duration-200 inline-block py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/40 text-[11px] sm:text-xs">
            &copy; 2026 FW Wears India Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-brand-gold text-[11px] sm:text-xs font-medium">
              ₹ INR Accepted
            </span>
            <span className="text-white/20">•</span>
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-[11px] sm:text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-[11px] sm:text-xs transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
