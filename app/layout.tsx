import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FW Wears — Premium Fashion for the Modern Individual",
  description:
    "Discover curated collections and limited vault editions. Timeless design meets modern style at FW Wears. Shop premium clothing, accessories, and exclusive vault drops priced in INR.",
  keywords: ["FW Wears", "premium fashion", "Indian clothing brand", "luxury fashion India", "men fashion", "women fashion", "streetwear", "exclusive vault drops"],
  openGraph: {
    title: "FW Wears — Premium Fashion for the Modern Individual",
    description:
      "Discover curated collections and limited vault editions. Timeless design meets modern style.",
    type: "website",
    siteName: "FW Wears",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "FW Wears — Premium Fashion",
    description: "Discover curated collections and limited vault editions.",
  },
  other: {
    "theme-color": "#0A0A0A",
  },
};

// JSON-LD structured data for Organization + WebSite
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "FW Wears",
      url: "https://fwwears.com",
      description: "Premium fashion brand offering curated collections for the modern individual.",
      brand: { "@type": "Brand", name: "FW Wears" },
    },
    {
      "@type": "WebSite",
      name: "FW Wears",
      url: "https://fwwears.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
