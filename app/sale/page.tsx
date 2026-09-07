import type { Metadata } from "next";
import SaleView from "@/components/SaleView";

export const metadata: Metadata = {
  title: "Special Deals & Sale — Up to 50% Off | FW Wears",
  description:
    "Shop limited-time markdowns on premium outerwear, footwear, knitwear, and essentials at FW Wears. Up to 50% off with free shipping across India.",
  openGraph: {
    title: "Special Deals & Sale — Up to 50% Off | FW Wears",
    description: "Limited-time markdowns on premium fashion. Up to 50% off.",
  },
};

export default function SalePage() {
  return <SaleView />;
}
