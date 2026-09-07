import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SpecialDealsSection from "@/components/SpecialDealsSection";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import ExclusiveSection from "@/components/ExclusiveSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "FW Wears — Premium Fashion for the Modern Individual | Shop New Arrivals",
  description:
    "Discover curated collections, limited vault editions, and premium essentials at FW Wears. Shop men's, women's, streetwear, and exclusive drops priced in INR with free shipping across India.",
  openGraph: {
    title: "FW Wears — Premium Fashion for the Modern Individual",
    description:
      "Shop curated collections, limited vault editions, and premium essentials.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialDealsSection />
      <Categories />
      <FeaturedProducts />
      <ExclusiveSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}
