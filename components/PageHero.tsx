"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export interface PageHeroProps {
  /** Images to cycle through in the slideshow */
  images: string[];
  /** Large heading */
  title: string;
  /** Smaller subtitle below the title */
  subtitle?: string;
  /** Small pill badge above the title */
  badge?: string;
  /** Height of the hero — defaults to 55vh */
  height?: string;
}

export function PageHero({
  images,
  title,
  subtitle,
  badge,
  height = "55vh",
}: PageHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full flex items-center justify-center text-white overflow-hidden"
      style={{ height }}
    >
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${title} hero`}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content — constrained width so it doesn't stretch on zoom-out */}
      <div className="relative z-20 text-center px-4 w-full max-w-3xl mx-auto">
        {badge && (
          <Badge className="bg-white/20 text-white border-white/40 text-xs px-4 py-1 mb-4 uppercase tracking-widest backdrop-blur-sm">
            {badge}
          </Badge>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 tracking-tight drop-shadow-lg uppercase leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-200 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
