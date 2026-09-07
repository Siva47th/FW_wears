export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  categorySlug: string;
  image: string;
  images: string[];
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isBestseller?: boolean;
  isExclusive?: boolean;
  isSpecialDeal?: boolean;
  discountBadge?: string;
  edition?: string;
  rarity?: string;
}

export const colorMap: Record<string, string> = {
  Black: "#0A0A0A",
  White: "#FFFFFF",
  Navy: "#1B2A4A",
  Cream: "#F5F0EB",
  Olive: "#556B2F",
  Brown: "#8B4513",
  Tan: "#D2B48C",
  Red: "#C41E3A",
  Blue: "#4169E1",
  Gray: "#808080",
  Charcoal: "#333333",
  Beige: "#E8D8C8",
  Gold: "#C9A96E",
  Camel: "#C19A6B",
  Burgundy: "#800020",
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Black Heavyweight Tee",
    price: 1499,
    originalPrice: 1999,
    category: "Men",
    categorySlug: "men",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&q=80",
    ],
    description:
      "Our signature black tee, crafted from 100% premium Pima cotton. The perfect foundation for any wardrobe — soft, durable, and effortlessly stylish with a relaxed yet refined fit.",
    details: [
      "100% Pima cotton, 220 GSM heavyweight",
      "Relaxed fit with tapered body",
      "Reinforced collar that won't stretch",
      "Pre-shrunk fabric",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    isBestseller: true,
  },
  {
    id: 2,
    name: "Selvedge Denim Jacket",
    price: 4999,
    originalPrice: 6499,
    category: "Winterwear",
    categorySlug: "winterwear",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=900&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=900&q=80",
    ],
    description:
      "A modern take on the timeless denim jacket. Made from premium Japanese selvedge denim with a comfortable stretch, this piece develops a unique patina with wear.",
    details: [
      "98% cotton, 2% elastane Japanese denim",
      "14 oz selvedge construction",
      "Antique brass hardware",
      "Interior and exterior pockets",
      "Spot clean or dry clean recommended",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Blue", hex: "#4169E1" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    isNew: true,
  },
  {
    id: 3,
    name: "Mulberry Silk Fluid Blouse",
    price: 3499,
    originalPrice: 4499,
    category: "Women",
    categorySlug: "women",
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=900&q=80",
      "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=900&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900&q=80",
    ],
    description:
      "Luxuriously soft mulberry silk blouse with a fluid drape. Perfect for transitioning from office to evening — pair with tailored trousers or your favorite jeans.",
    details: [
      "100% Grade 6A mulberry silk",
      "Relaxed fit with side slits",
      "Mother-of-pearl buttons",
      "French seam finishing",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F5F0EB" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
  },
  {
    id: 4,
    name: "Pleated Italian Wool Trousers",
    price: 3999,
    originalPrice: 5299,
    category: "Men",
    categorySlug: "men",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&q=80",
    ],
    description:
      "Impeccably tailored trousers with a modern slim fit. Crafted from Italian wool blend for a structured yet comfortable silhouette that takes you from boardroom to bar.",
    details: [
      "70% wool, 28% polyester, 2% elastane",
      "Italian milled fabric",
      "Slim tapered fit",
      "Hidden clasp closure",
      "Dry clean recommended",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Gray", hex: "#808080" },
    ],
    isBestseller: true,
  },
  {
    id: 5,
    name: "Artisan Leather Crossbody Bag",
    price: 5999,
    originalPrice: 7999,
    category: "Accessories",
    categorySlug: "accessories",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=900&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=80",
    ],
    description:
      "Hand-crafted from full-grain Italian leather, this crossbody bag is the perfect everyday companion. Spacious enough for essentials, sleek enough for any outfit.",
    details: [
      "Full-grain Italian vegetable-tanned leather",
      "Adjustable crossbody strap",
      "Interior zip pocket + card slots",
      "Gold-tone hardware",
      "Develops rich patina over time",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Brown", hex: "#8B4513" },
    ],
    isNew: true,
  },
  {
    id: 6,
    name: "Acid Wash Oversized Hoodie",
    price: 2499,
    originalPrice: 4499,
    category: "Streetwear",
    categorySlug: "streetwear",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a30?w=900&q=80",
    ],
    description:
      "Ultimate comfort meets street style. Our oversized hoodie is made from heavyweight organic cotton fleece — perfect for layering or lounging.",
    details: [
      "100% organic cotton fleece, 450 GSM",
      "Drop-shoulder oversized relaxed fit",
      "Ribbed cuffs and hem",
      "Kangaroo pocket with hidden coin pouch",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Cream", hex: "#F5F0EB" },
      { name: "Olive", hex: "#556B2F" },
    ],
    isBestseller: true,
    isSpecialDeal: true,
    discountBadge: "45% OFF",
  },
  {
    id: 7,
    name: "Resort Linen Vacation Shirt",
    price: 2499,
    originalPrice: 3199,
    category: "Men",
    categorySlug: "men",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=900&q=80",
    ],
    description:
      "Breathable European linen shirt, perfect for warm weather. Relaxed fit with a slightly textured hand-feel that softens beautifully with every wash.",
    details: [
      "100% European flax linen",
      "Relaxed regular fit",
      "Coconut shell buttons",
      "Cuban camp collar",
      "Machine washable, air dry",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Blue", hex: "#4169E1" },
      { name: "Olive", hex: "#556B2F" },
    ],
    isNew: true,
  },
  {
    id: 8,
    name: "Monochrome Chunky Runner Sneakers",
    price: 4999,
    originalPrice: 8999,
    category: "Footwear",
    categorySlug: "footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=80",
    ],
    description:
      "Bold, architectural sneakers that make every outfit unforgettable. Premium leather upper with a cushioned sole for all-day comfort and undeniable style.",
    details: [
      "Premium full-grain leather and mesh upper",
      "Memory foam dual-density insole",
      "Sculpted rubber outsole with traction grip",
      "Padded collar and tongue",
      "Wipe clean with damp cloth",
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [
      { name: "Red", hex: "#C41E3A" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    isBestseller: true,
    isSpecialDeal: true,
    discountBadge: "45% OFF",
  },
  {
    id: 9,
    name: "Double-Breasted Wool Overcoat",
    price: 8999,
    originalPrice: 11999,
    category: "Winterwear",
    categorySlug: "winterwear",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80",
    ],
    description:
      "A tailored double-breasted coat constructed with heavy melton wool. Structured peak lapels and a sleek silhouette designed for extreme cold and high fashion.",
    details: [
      "80% Wool, 20% Cashmere blend",
      "Full satin lining",
      "Deep interior breast pockets",
      "Horn buttons",
      "Dry clean only",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Tan", hex: "#D2B48C" },
      { name: "Charcoal", hex: "#333333" },
    ],
    isNew: true,
  },
  {
    id: 10,
    name: "Relaxed Boxy Graphic Tee",
    price: 1799,
    originalPrice: 2299,
    category: "Streetwear",
    categorySlug: "streetwear",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=900&q=80",
    ],
    description:
      "Streetwear essential boxy tee featuring subtle typographic screenprint on the back and tonal embroidered FW chest logo.",
    details: [
      "100% Combed ring-spun cotton, 240 GSM",
      "Drop shoulders with wide sleeves",
      "Distressed vintage wash",
      "High density plastisol print",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Olive", hex: "#556B2F" },
    ],
    isNew: true,
  },
  {
    id: 11,
    name: "Classic Chelsea Leather Boots",
    price: 5499,
    originalPrice: 9499,
    category: "Footwear",
    categorySlug: "footwear",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=900&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&q=80",
    ],
    description:
      "Handcrafted Goodyear-welted Chelsea boots in rich calfskin leather. Built with elasticated side gussets and pull tabs for timeless urban elegance.",
    details: [
      "Top-grain oiled calfskin leather",
      "Goodyear welt construction",
      "Dainite rubber sole for wet grip",
      "Reinforced rear pull tab",
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    isBestseller: true,
    isSpecialDeal: true,
    discountBadge: "42% OFF",
  },
  {
    id: 12,
    name: "Satin Evening Slip Dress",
    price: 3199,
    originalPrice: 5699,
    category: "Women",
    categorySlug: "women",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
    ],
    description:
      "Bias-cut satin slip dress that drapes naturally along the silhouette. Featuring delicate spaghetti straps and a subtle cowl neckline.",
    details: [
      "High-grade heavy silk-satin blend",
      "Adjustable shoulder straps",
      "Side slit for ease of movement",
      "Floor-grazing midi length",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Cream", hex: "#F5F0EB" },
      { name: "Red", hex: "#C41E3A" },
    ],
    isNew: true,
    isSpecialDeal: true,
    discountBadge: "44% OFF",
  },
  {
    id: 13,
    name: "24k Gold Filament Cashmere Bomber",
    price: 24999,
    originalPrice: 29999,
    category: "Exclusive",
    categorySlug: "exclusive",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=900&q=80",
    ],
    description:
      "Limited Vault Drop: Numbered bespoke bomber jacket woven with Mongolian grade-1 cashmere and subtle 24k gold filament embroidery. Only 50 units crafted worldwide.",
    details: [
      "100% Mongolian Cashmere with 24k Gold Thread",
      "Swiss Riri gold-plated two-way zip",
      "Numbered interior brass authenticity plate",
      "Handmade in limited atelier batches",
      "Includes bespoke velvet garment bag",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
      { name: "Gold", hex: "#C9A96E" },
    ],
    isExclusive: true,
    edition: "Batch 01 • 50 Pieces Only",
    rarity: "Ultra Rare",
  },
  {
    id: 14,
    name: "Hand-Burnished Italian Leather Weekender",
    price: 18499,
    originalPrice: 22999,
    category: "Exclusive",
    categorySlug: "exclusive",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=900&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80",
    ],
    description:
      "Limited Vault Drop: Cut from vegetable-tanned Tuscan saddle leather, hand-burnished for 40 hours to achieve an incomparable museum patina.",
    details: [
      "Full-grain Tuscan saddle leather",
      "Solid cast-brass buckles and rivets",
      "Reinforced base with metal protective feet",
      "Includes personalized monogram luggage tag",
    ],
    sizes: ["One Size (45L)"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Brown", hex: "#8B4513" },
    ],
    isExclusive: true,
    edition: "Batch 01 • 75 Pieces Only",
    rarity: "Collectors Item",
  },
  {
    id: 15,
    name: "Raw Kurabo Selvedge Haori Kimono",
    price: 14999,
    originalPrice: 17999,
    category: "Exclusive",
    categorySlug: "exclusive",
    image:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
    ],
    description:
      "Limited Vault Drop: Traditional Japanese Haori silhouette reimagined in 16oz raw indigo Kurabo selvedge denim with natural horn toggle fastenings.",
    details: [
      "16oz Kojima-milled Japanese selvedge denim",
      "Hand-dyed natural indigo warp",
      "Traditional kimono sleeve cut",
      "Sashiko reinforcement stitching",
    ],
    sizes: ["S/M", "L/XL"],
    colors: [
      { name: "Blue", hex: "#1B2A4A" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    isExclusive: true,
    edition: "Batch 01 • 100 Pieces Only",
    rarity: "Limited Edition",
  },
  {
    id: 16,
    name: "Sculpted Titanium Pilot Sunglasses",
    price: 11999,
    originalPrice: 14499,
    category: "Exclusive",
    categorySlug: "exclusive",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=900&q=80",
    ],
    description:
      "Limited Vault Drop: Aerospace-grade Japanese beta-titanium frames paired with scratch-resistant polarized 24k mirror lenses. Ultra-lightweight at only 18 grams.",
    details: [
      "Aerospace beta-titanium wire construction",
      "24k mirror polarized CR-39 lenses with 100% UV400",
      "Custom micro-hinge without screws",
      "Handmade in Sabae, Japan",
    ],
    sizes: ["Standard Fit (52-19-145)"],
    colors: [
      { name: "Gold", hex: "#C9A96E" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    isExclusive: true,
    edition: "Batch 01 • 120 Pieces Only",
    rarity: "Limited Edition",
  },
  {
    id: 17,
    name: "Merino Wool Ribbed Knit Turtleneck",
    price: 2499,
    originalPrice: 4999,
    category: "Winterwear",
    categorySlug: "winterwear",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=900&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80",
    ],
    description:
      "Special Deal • 50% Off: Ultra-fine 19.5-micron Australian merino wool knitted in a tailored ribbed structure. Thermal warmth with a buttery soft feel.",
    details: [
      "100% Extra-fine Australian Merino Wool",
      "Ribbed collar, cuffs, and hem",
      "Naturally odor-resistant and breathable",
      "Hand wash cold, dry flat",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Cream", hex: "#F5F0EB" },
    ],
    isSpecialDeal: true,
    discountBadge: "50% OFF",
  },
  {
    id: 18,
    name: "Suede Leather Penny Loafers",
    price: 3999,
    originalPrice: 7999,
    category: "Footwear",
    categorySlug: "footwear",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80",
    ],
    description:
      "Special Deal • 50% Off: Hand-stitched penny loafers crafted from Italian water-resistant split calf suede. Features padded latex footbed for clouds of comfort.",
    details: [
      "Italian split calf suede upper",
      "Flexible Blake-stitched leather sole with rubber island",
      "Memory foam cushioned insole",
      "Breathable leather lining",
    ],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Navy", hex: "#1B2A4A" },
    ],
    isSpecialDeal: true,
    discountBadge: "50% OFF",
  },
  {
    id: 19,
    name: "Hand-Pleated Georgette Tiered Dress",
    price: 2999,
    originalPrice: 5499,
    category: "Women",
    categorySlug: "women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80",
    ],
    description:
      "Special Deal • 45% Off: Lightweight georgette tiered maxi dress featuring micro-accordion pleats and delicate balloon sleeves with elasticated smocked cuffs.",
    details: [
      "Featherweight crêpe georgette",
      "Full inner breathable lining",
      "Concealed side zipper",
      "Dry clean recommended",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Black", hex: "#0A0A0A" },
      { name: "Cream", hex: "#F5F0EB" },
    ],
    isSpecialDeal: true,
    discountBadge: "45% OFF",
  },
  {
    id: 20,
    name: "Structured Double-Cloth Trench Coat",
    price: 4999,
    originalPrice: 9999,
    category: "Winterwear",
    categorySlug: "winterwear",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&q=80",
    ],
    description:
      "Special Deal • 50% Off: Timeless belted trench coat in double-woven water-repellent gabardine. Gun flap, storm shield, and custom horn belt buckle.",
    details: [
      "Heavyweight water-resistant cotton-poly gabardine",
      "Detachable tie belt with D-rings",
      "Deep storm pockets",
      "Back storm flap ventilation",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#0A0A0A" },
    ],
    isSpecialDeal: true,
    discountBadge: "50% OFF",
  },
];

export const collections: Record<
  string,
  { name: string; tag: string; description: string; image: string }
> = {
  sale: {
    name: "Special Deals & Sale",
    tag: "Up to 50% OFF",
    description:
      "Limited-time high discount pieces. Discover premium outerwear, footwear, and essentials at exceptional prices in INR.",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1920&q=80",
  },
  exclusive: {
    name: "The Exclusive Vault",
    tag: "Numbered Limited Drops",
    description:
      "Bespoke haute-couture and rare numbered editions crafted in strictly limited quantities for FW Wears collectors.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1920&q=80",
  },
  men: {
    name: "Men's Collection",
    tag: "Refined & Tailored",
    description:
      "Refined essentials for the modern gentleman. From tailored basics to statement pieces, every item is crafted for confidence.",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1920&q=80",
  },
  women: {
    name: "Women's Collection",
    tag: "Timeless & Empowering",
    description:
      "Elegant pieces that empower. Designed for confidence and crafted for comfort — from mulberry silk to tailored cuts.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80",
  },
  streetwear: {
    name: "Streetwear & Oversized",
    tag: "Urban & Contemporary",
    description:
      "Heavyweight silhouettes, drop shoulders, and modern casual cuts designed for unapologetic style and daily ease.",
    image:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1920&q=80",
  },
  winterwear: {
    name: "Outerwear & Jackets",
    tag: "Structured Warmth",
    description:
      "Heavy selvedge denim, wool overcoats, and structured jackets engineered to withstand the elements in style.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1920&q=80",
  },
  footwear: {
    name: "Footwear & Sneakers",
    tag: "Architectural Footwear",
    description:
      "From Goodyear-welted leather Chelsea boots to chunky runners, engineered for comfort and elevated aesthetics.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80",
  },
  accessories: {
    name: "Luxury Accessories",
    tag: "Handcrafted Accents",
    description:
      "Complete the look with our curated selection of vegetable-tanned leather bags, belts, and timeless finishing touches.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&q=80",
  },
};

export const formatPriceINR = (price: number): string => {
  return `₹${price.toLocaleString("en-IN")}`;
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Mumbai, India",
    rating: 5,
    text: "The quality of FW Wears is unmatched. Every piece feels like international luxury without the pretentious price tag. My go-to for essentials.",
    initials: "SM",
  },
  {
    id: 2,
    name: "Arjun Verma",
    location: "Bengaluru, India",
    rating: 5,
    text: "Finally found a brand that understands modern minimalism. The tailored trousers fit perfectly and the fabric quality is outstanding.",
    initials: "AV",
  },
  {
    id: 3,
    name: "Pooja Hegde",
    location: "Delhi, India",
    rating: 5,
    text: "From ordering to delivery, the experience was seamless. The silk blouse exceeded my expectations — it's now my absolute favorite piece.",
    initials: "PH",
  },
];
