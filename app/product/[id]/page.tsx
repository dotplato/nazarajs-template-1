"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductCard, ProductCardProps } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";

// ─── Product Data ────────────────────────────────────────────────────────────
const allProducts: Record<
  string,
  {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    category: string;
    images: string[];
    badge: string;
    details: string[];
    description: string;
  }
> = {
  "1": {
    id: "1",
    name: "Men's Premium Hoodie",
    price: 2500,
    originalPrice: 5000,
    category: "Hoodies",
    images: ["/hoodie.avif", "/t-shirt.webp", "/h1.webp"],
    badge: "50% OFF",
    description:
      "A premium quality hoodie crafted for comfort and style. Perfect for casual outings or lounging at home.",
    details: [
      "Material: 80% Cotton, 20% Polyester",
      "Fit: Regular Fit",
      "Care: Machine wash cold",
      "Feature: Kangaroo pocket, adjustable drawstring hood",
      "Note: Slight color variation may occur due to screen settings",
    ],
  },
  "2": {
    id: "2",
    name: "Leather Belt - Brown",
    price: 1200,
    originalPrice: 2000,
    category: "Accessories",
    images: ["/leather-belt.webp", "/t-shirt.webp", "/h1.webp"],
    badge: "40% OFF",
    description:
      "Genuine leather belt with a classic buckle. A timeless accessory for formal and casual wear.",
    details: [
      "Material: 100% Genuine Leather",
      "Width: 3.5 cm",
      "Buckle: Stainless steel pin buckle",
      "Sizes: 28–44 inches",
      "Note: Leather may darken slightly with use — this is natural.",
    ],
  },
  "3": {
    id: "3",
    name: "Men's Casual Sneakers",
    price: 3500,
    originalPrice: 6000,
    category: "Shoes",
    images: ["/sneakers.webp", "/t-shirt.webp", "/h1.webp"],
    badge: "42% OFF",
    description:
      "Lightweight and breathable sneakers built for all-day comfort. Pairs well with jeans, chinos, or shorts.",
    details: [
      "Upper: Mesh & synthetic overlay",
      "Sole: Rubber outsole for grip",
      "Insole: Cushioned for comfort",
      "Sizes: 39–45 EU",
      "Note: True to size — order your regular size.",
    ],
  },
  "4": {
    id: "4",
    name: "Classic Baseball Cap",
    price: 800,
    originalPrice: 1500,
    category: "Accessories",
    images: ["/cap.webp", "/t-shirt.webp", "/h1.webp"],
    badge: "47% OFF",
    description:
      "A structured 6-panel baseball cap with an adjustable strap. Ideal for outdoor activities or streetwear looks.",
    details: [
      "Material: 100% Cotton twill",
      "Closure: Adjustable snapback",
      "Brim: Pre-curved",
      "One size fits most",
      "Note: Hand wash only.",
    ],
  },
  "5": {
    id: "5",
    name: "Men's Denim Jacket",
    price: 4500,
    originalPrice: 8000,
    category: "Jackets",
    images: ["/t-shirt.webp", "/h1.webp", "/h3.jpg"],
    badge: "44% OFF",
    description:
      "A classic denim jacket with a modern slim cut. Layer it over tees or hoodies for a versatile look.",
    details: [
      "Material: 100% Cotton denim",
      "Fit: Slim fit",
      "Closure: Button front",
      "Pockets: 2 chest + 2 side pockets",
      "Care: Machine wash cold, tumble dry low.",
    ],
  },
  "6": {
    id: "6",
    name: "Men's Slim Fit T-Shirt",
    price: 700,
    originalPrice: 1400,
    category: "T-Shirts",
    images: ["/t-shirt.webp", "/h1.webp", "/h3.jpg"],
    badge: "50% OFF",
    description:
      "An everyday essential. Soft, breathable, and perfectly fitted for a clean, modern silhouette.",
    details: [
      "Material: 100% Combed Cotton",
      "Fit: Slim fit",
      "Neckline: Crew neck",
      "Care: Machine wash warm",
      "Note: Pre-shrunk fabric.",
    ],
  },
  "7": {
    id: "7",
    name: "Men's Chino Pants",
    price: 2200,
    originalPrice: 3500,
    category: "Pants",
    images: ["/t-shirt.webp", "/h1.webp", "/h3.jpg"],
    badge: "37% OFF",
    description:
      "Versatile chino pants that transition seamlessly from office to weekend. Tailored for a clean, smart look.",
    details: [
      "Material: 98% Cotton, 2% Elastane",
      "Fit: Slim straight",
      "Waist: Flat front with belt loops",
      "Care: Machine wash cold",
      "Note: Slight stretch for added comfort.",
    ],
  },
  "8": {
    id: "8",
    name: "Men's Formal Shirt",
    price: 1800,
    originalPrice: 3000,
    category: "Shirts",
    images: ["/t-shirt.webp", "/h1.webp", "/h3.jpg"],
    badge: "40% OFF",
    description:
      "A crisp formal shirt for the modern professional. Wrinkle-resistant fabric keeps you sharp all day.",
    details: [
      "Material: 60% Cotton, 40% Polyester",
      "Fit: Regular fit",
      "Collar: Spread collar",
      "Care: Machine wash warm, iron medium",
      "Note: Wrinkle-resistant finish.",
    ],
  },
};

const suggestedProducts: ProductCardProps[] = [
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
    id: "2",
    name: "Leather Belt - Brown",
    price: 1200,
    originalPrice: 2000,
    image: "/leather-belt.webp",
    category: "Accessories",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/2",
  },
];

// ─── Countdown Timer ──────────────────────────────────────────────────────────
function SaleTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="bg-rose-100 rounded-xl p-6 text-center my-6">
      <p className="text-sm font-bold uppercase tracking-widest text-rose-700 mb-1">
        🔥 Flash Sale
      </p>
      <p className="text-xs text-rose-500 uppercase tracking-widest mb-4">
        Sale Ends In
      </p>
      <div className="flex items-center justify-center gap-3">
        {[
          { label: "Hours", val: timeLeft.hours },
          { label: "Minutes", val: timeLeft.minutes },
          { label: "Seconds", val: timeLeft.seconds },
        ].map(({ label, val }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-gray-900 leading-none">
                {pad(val)}
              </div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {label}
              </div>
            </div>
            {i < 2 && (
              <span className="text-4xl font-bold text-gray-400 mb-4">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({
  rating = 0,
  max = 5,
}: {
  rating?: number;
  max?: number;
}) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = allProducts[id];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="min-h-screen overflow-x-hidden">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <Link href="/sale">
            <Button>Back to Sale</Button>
          </Link>
        </div>
      </main>
    );
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Breadcrumb */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500 flex gap-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <Link href="/sale" className="hover:underline">
          Sale
        </Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      {/* Main Product Layout */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── LEFT: Image Gallery ── */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              <Badge
                variant="destructive"
                className="absolute top-4 left-4 text-sm px-3 py-1"
              >
                {product.badge}
              </Badge>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                    selectedImage === i
                      ? "border-black scale-[1.02]"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`View ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Sticky Info Panel ── */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="lg:sticky lg:top-6 flex flex-col gap-6">
              {/* Product Name & Price */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-gray-900">
                    Rs. {product.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive">{discount}% OFF</Badge>
                </div>
              </div>

              {/* Qty + Add to Cart */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </Button>
                  <span className="w-10 text-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 rounded-full"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </Button>
                </div>
                <AddToCartButton
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0],
                    category: product.category,
                  }}
                  className="flex-1 h-10"
                />
              </div>

              {/* Buy Now */}
              <Button
                variant="outline"
                className="w-full h-10 rounded-full font-semibold border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                Buy it now
              </Button>

              {/* Suggested / Frequently Bought Together */}
              <div className="border border-gray-200 rounded-2xl p-4">
                <p className="font-semibold text-sm mb-3">
                  Frequently Bought Together
                </p>
                <div className="flex flex-col gap-2">
                  {suggestedProducts
                    .filter((p) => p.id !== id)
                    .map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="flex items-center gap-3 bg-amber-50 hover:bg-amber-100 transition-colors rounded-xl p-2"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-red-600">
                              Rs. {item.price.toLocaleString()}
                            </span>
                            {item.originalPrice && (
                              <span className="text-xs text-gray-400 line-through">
                                Rs. {item.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Sale Countdown Timer */}
              <SaleTimer />

              {/* Product Details */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-bold text-base mb-3">Product Details</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-1">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customer Reviews */}
              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-bold text-base mb-4">Customer Reviews</h3>
                <div className="flex flex-col items-center gap-2 py-4">
                  <StarRating rating={0} />
                  <p className="text-sm text-gray-500">
                    Be the first to write a review
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 rounded-full px-6 border-black hover:bg-black hover:text-white transition-all"
                  >
                    Write a Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
