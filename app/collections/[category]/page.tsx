import { products, collections } from "@/data/products";
import { notFound } from "next/navigation";
import CollectionView from "@/components/CollectionView";
import type { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(collections).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const collection = collections[category];

  if (!collection) {
    return { title: "Collection Not Found — FW Wears" };
  }

  return {
    title: `${collection.name} — FW Wears`,
    description: collection.description,
    openGraph: {
      title: `${collection.name} — FW Wears`,
      description: collection.description,
      images: [collection.image],
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const collection = collections[category];

  if (!collection) {
    notFound();
  }

  const filteredProducts = products.filter(
    (p) => p.categorySlug === category
  );

  return (
    <CollectionView
      category={category}
      collectionName={collection.name}
      collectionDescription={collection.description}
      collectionImage={collection.image}
      filteredProducts={filteredProducts}
    />
  );
}
