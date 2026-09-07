import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return { title: "Product Not Found — FW Wears" };
  }

  const priceFormatted = `₹${product.price.toLocaleString("en-IN")}`;

  return {
    title: `${product.name} — FW Wears`,
    description: `${product.description} Starting at ${priceFormatted}. Free shipping across India.`,
    openGraph: {
      title: `${product.name} — FW Wears`,
      description: product.description,
      images: product.images.map((img) => ({ url: img })),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — FW Wears`,
      description: product.description,
    },
  };
}

// JSON-LD Product schema for rich Google results
function ProductJsonLd({ product }: { product: (typeof products)[number] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: "FW Wears",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://fwwears.com/products/${product.id}`,
      seller: {
        "@type": "Organization",
        name: "FW Wears",
      },
    },
    category: product.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <>
      <ProductJsonLd product={product} />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </>
  );
}
