"use client";

import { HomeHero } from "@/components/HomeHero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { ProductCardProps } from "@/components/ProductCard";

const saleProducts: ProductCardProps[] = [
  {
    id: "1",
    name: "Men's Premium Hoodie",
    price: 2500,
    originalPrice: 5000,
    image: "/hoodie.avif",
    category: "Hoodies",
    badge: { text: "SALE", variant: "destructive" },
    href: "/product/1",
  },
  {
    id: "2",
    name: "Leather Belt - Brown",
    price: 1200,
    originalPrice: 2000,
    image: "/leather-belt.webp",
    category: "Accessories",
    badge: { text: "SALE", variant: "destructive" },
    href: "/product/2",
  },
  {
    id: "3",
    name: "Men's Casual Sneakers",
    price: 3500,
    originalPrice: 6000,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "SALE", variant: "destructive" },
    href: "/product/3",
  },
  {
    id: "4",
    name: "Classic Baseball Cap",
    price: 800,
    originalPrice: 1500,
    image: "/cap.webp",
    category: "Accessories",
    badge: { text: "SALE", variant: "destructive" },
    href: "/product/4",
  },
  {
    id: "5",
    name: "Men's Denim Jacket",
    price: 4500,
    originalPrice: 8000,
    image: "/t-shirt.webp",
    category: "Jackets",
    badge: { text: "SALE", variant: "destructive" },
    href: "/product/5",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Unique full-screen hero — only on homepage */}
      <HomeHero />

      {/* Category Cards Section */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-4 pb-0">
        <CategoryShowcase />
      </section>

      {/* Sale Products Carousel */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-4 pb-8">
        <ProductCarousel
          subtitle="RECOMMENDED"
          title="Sale Products"
          products={saleProducts}
        />
      </section>
    </main>
  );
}
