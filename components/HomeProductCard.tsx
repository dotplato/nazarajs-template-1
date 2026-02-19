"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCardProps } from "@/components/ProductCard";

export function HomeProductCard({ product }: { product: ProductCardProps }) {
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
      <CardContent className="p-3 flex-1">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <Link href={product.href}>
          <h3 className="font-semibold text-sm hover:underline line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-sm">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
          }}
        />
      </CardFooter>
    </Card>
  );
}
