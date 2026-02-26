"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductGrid } from "@/components/ProductGrid";
import { EmptyState } from "@/components/EmptyState";
import { StoreFilters, FilterState } from "@/components/StoreFilters";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCardProps } from "@/components/ProductCard";

// ─── Store Product Data ───────────────────────────────────────────────────────
const allProducts: ProductCardProps[] = [
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
  {
    id: "5",
    name: "Men's Denim Jacket",
    price: 4500,
    originalPrice: 8000,
    image: "/t-shirt.webp",
    category: "Jackets",
    badge: { text: "44% OFF", variant: "destructive" },
    href: "/product/5",
  },
  {
    id: "6",
    name: "Men's Slim Fit T-Shirt",
    price: 700,
    originalPrice: 1400,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "50% OFF", variant: "destructive" },
    href: "/product/6",
  },
  {
    id: "7",
    name: "Men's Chino Pants",
    price: 2200,
    originalPrice: 3500,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "37% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "8",
    name: "Men's Formal Shirt",
    price: 1800,
    originalPrice: 3000,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/8",
  },
  {
    id: "9",
    name: "Men's Oxford Casual Shirt",
    price: 1600,
    originalPrice: 2800,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "43% OFF", variant: "destructive" },
    href: "/product/8",
  },
  {
    id: "10",
    name: "Men's Cargo Shorts",
    price: 1100,
    originalPrice: 2000,
    image: "/t-shirt.webp",
    category: "Shorts",
    badge: { text: "45% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "11",
    name: "Men's Zip-Up Hoodie",
    price: 2800,
    originalPrice: 4500,
    image: "/hoodie.avif",
    category: "Hoodies",
    badge: { text: "38% OFF", variant: "destructive" },
    href: "/product/1",
  },
  {
    id: "12",
    name: "Men's Leather Loafers",
    price: 4200,
    originalPrice: 7000,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/3",
  },
];

// ─── Store Product Card (vertical + Add to Cart) ─────────────────────────────
function StoreProductCard({ product }: { product: ProductCardProps }) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Card className="group overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="p-0">
        <Link
          href={product.href}
          className="relative block aspect-[4/5] overflow-hidden bg-gray-100"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.badge && (
            <Badge
              variant={product.badge.variant || "default"}
              className="absolute top-3 left-3 z-10"
            >
              {product.badge.text}
            </Badge>
          )}
          {!product.badge && discount > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-3 right-3 z-10"
            >
              -{discount}%
            </Badge>
          )}
        </Link>
      </CardHeader>

      <CardContent className="p-4 flex-1">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <Link href={product.href}>
          <h3 className="font-semibold text-base mb-2 hover:underline line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
          }}
        />
        <Button
          asChild
          variant="outline"
          className="w-full rounded-full border-gray-300 text-sm"
        >
          <Link href={product.href}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

// ─── Store Page ───────────────────────────────────────────────────────────────
export default function StorePage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: null,
    onSaleOnly: false,
  });

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(p.category)
      )
        return false;
      if (
        filters.priceRange &&
        (p.price < filters.priceRange.min || p.price > filters.priceRange.max)
      )
        return false;
      if (filters.onSaleOnly && !p.originalPrice) return false;
      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-white">
      {/* Store Header */}
      <section className="w-full border-b bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Men's Fashion
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">Store</h1>
          </div>
        </div>
        <Separator />
      </section>

      {/* Main layout — sidebar + grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex gap-10">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block w-56 flex-shrink-0">
          <StoreFilters
            filters={filters}
            onChange={setFilters}
            totalResults={filtered.length}
          />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <EmptyState
              title="No products match your filters"
              description="Try adjusting or clearing your filters to see more products."
              actionLabel="Clear Filters"
              actionHref="/store"
            />
          ) : (
            <ProductGrid>
              {filtered.map((product) => (
                <StoreProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          )}
        </div>
      </div>
    </main>
  );
}
