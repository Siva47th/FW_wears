import type { Metadata } from "next";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Shopping Bag — FW Wears",
  description:
    "Review your shopping bag at FW Wears. Apply promo codes, adjust quantities, and proceed to checkout.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return <CartView />;
}
