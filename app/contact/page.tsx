import type { Metadata } from "next";
import ContactView from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact Us — FW Wears",
  description:
    "Get in touch with FW Wears for orders, styling inquiries, partnerships, or support. We ship across India with express delivery.",
  openGraph: {
    title: "Contact Us — FW Wears",
    description: "Get in touch with FW Wears for orders and support.",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
