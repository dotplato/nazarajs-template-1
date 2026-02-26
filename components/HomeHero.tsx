"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const heroImages = ["/h1.webp", "/t-shirt.webp", "/h3.jpg"];

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white bg-blue-950 overflow-hidden">
      {/* Background image — right-aligned, fills the section height */}
      <div className="absolute inset-0 flex justify-end">
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[index]}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover object-center"
                priority
                quality={100}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Gradient only over the left text area — image on the right stays clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 from-30% via-blue-950/60 via-45% to-transparent to-60% pointer-events-none" />

      {/* Text content — left-aligned, constrained width */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Discover Modern Streetwear
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 font-light">
            Premium T-Shirts. Designed for comfort. Built for confidence.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-white text-black hover:bg-gray-100 font-semibold text-base"
          >
            <Link href="/sale">Shop Now</Link>
          </Button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            size="icon"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 p-0 hover:bg-transparent ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
