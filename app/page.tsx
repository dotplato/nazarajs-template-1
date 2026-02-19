"use client";

import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ProductCarousel } from "@/components/ProductCarousel";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { HomeProductCard } from "@/components/HomeProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCardProps } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// ─── Product Data ─────────────────────────────────────────────────────────────
const saleProducts: ProductCardProps[] = [
  {
    id: "1",
    name: "Men's Premium Hoodie",
    price: 2500,
    originalPrice: 5000,
    image: "/hoodie.avif",
    category: "Hoodies",
    badge: { text: "50% OFF", variant: "destructive" },
    href: "/product/1",
  },
  {
    id: "2",
    name: "Leather Belt - Brown",
    price: 1200,
    originalPrice: 2000,
    image: "/leather-belt.webp",
    category: "Accessories",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/2",
  },
  {
    id: "3",
    name: "Men's Casual Sneakers",
    price: 3500,
    originalPrice: 6000,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "42% OFF", variant: "destructive" },
    href: "/product/3",
  },
  {
    id: "4",
    name: "Classic Baseball Cap",
    price: 800,
    originalPrice: 1500,
    image: "/cap.webp",
    category: "Accessories",
    badge: { text: "47% OFF", variant: "destructive" },
    href: "/product/4",
  },
];

const newArrivals: ProductCardProps[] = [
  {
    id: "5",
    name: "Men's Denim Jacket",
    price: 4500,
    originalPrice: 8000,
    image: "/t-shirt.webp",
    category: "Jackets",
    badge: { text: "NEW", variant: "secondary" },
    href: "/product/5",
  },
  {
    id: "6",
    name: "Men's Slim Fit T-Shirt",
    price: 700,
    originalPrice: 1400,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "NEW", variant: "secondary" },
    href: "/product/6",
  },
  {
    id: "7",
    name: "Men's Chino Pants",
    price: 2200,
    originalPrice: 3500,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "NEW", variant: "secondary" },
    href: "/product/7",
  },
  {
    id: "8",
    name: "Men's Formal Shirt",
    price: 1800,
    originalPrice: 3000,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "NEW", variant: "secondary" },
    href: "/product/8",
  },
];

const storeHighlights: ProductCardProps[] = [
  {
    id: "9",
    name: "Men's Oxford Casual Shirt",
    price: 1600,
    originalPrice: 2800,
    image: "/t-shirt.webp",
    category: "Shirts",
    href: "/product/8",
  },
  {
    id: "10",
    name: "Men's Cargo Shorts",
    price: 1100,
    originalPrice: 2000,
    image: "/t-shirt.webp",
    category: "Shorts",
    href: "/product/7",
  },
  {
    id: "11",
    name: "Men's Zip-Up Hoodie",
    price: 2800,
    originalPrice: 4500,
    image: "/hoodie.avif",
    category: "Hoodies",
    href: "/product/1",
  },
  {
    id: "12",
    name: "Men's Leather Loafers",
    price: 4200,
    originalPrice: 7000,
    image: "/sneakers.webp",
    category: "Shoes",
    href: "/product/3",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <HomeHero />

      {/* Category Showcase */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-4 pb-0">
        <CategoryShowcase />
      </section>

      <Separator className="max-w-7xl mx-auto px-4 my-8" />

      {/* Sale Products — carousel preview */}
      <section className="w-full max-w-7xl mx-auto px-4 pb-4">
        <ProductCarousel
          subtitle="LIMITED TIME"
          title="On Sale Now"
          products={saleProducts}
        />
        <div className="flex justify-center mt-6">
          <Button
            asChild
            className="rounded-full bg-black text-white hover:bg-gray-800 px-8 font-semibold"
          >
            <Link href="/sale">Shop All Sale Items →</Link>
          </Button>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto px-4 my-8" />

      {/* New Arrivals — grid preview */}
      <section className="w-full max-w-7xl mx-auto px-4 py-4">
        <SectionHeader
          subtitle="Just In"
          title="New Arrivals"
          href="/new-arrivals"
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {newArrivals.map((p) => (
            <HomeProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto px-4 my-8" />

      {/* Store Highlights — grid preview */}
      <section className="w-full max-w-7xl mx-auto px-4 py-4 pb-16">
        <SectionHeader
          subtitle="Men's Fashion"
          title="Browse The Store"
          href="/store"
          linkLabel="Visit Store"
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {storeHighlights.map((p) => (
            <HomeProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
