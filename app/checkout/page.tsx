import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — FW Wears",
  description:
    "Complete your order at FW Wears. Secure checkout with UPI, Cards, NetBanking, and Cash on Delivery across India.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    // Dynamic import not needed here — CheckoutView is client-only and imported directly
    <CheckoutViewWrapper />
  );
}

// Wrapper to keep the page as a server component with metadata export,
// while rendering the client component
import CheckoutView from "@/components/CheckoutView";

function CheckoutViewWrapper() {
  return <CheckoutView />;
}
