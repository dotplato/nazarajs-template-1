"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard, ProductCardProps } from "./ProductCard";

export interface ProductCarouselProps {
  title?: string;
  subtitle?: string;
  products: ProductCardProps[];
}

export function ProductCarousel({
  title,
  subtitle,
  products,
}: ProductCarouselProps) {
  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="flex items-end justify-between mb-6">
          <div>
            {subtitle && (
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            )}
          </div>
        </div>
      )}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto px-12"
      >
        <CarouselContent className="-ml-4">
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-[80%] md:basis-1/2 xl:basis-1/3"
            >
              <ProductCard {...product} orientation="horizontal" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </div>
  );
}
