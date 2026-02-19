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
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  href: string;
  orientation?: "vertical" | "horizontal";
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  badge,
  href,
  orientation = "vertical",
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  if (orientation === "horizontal") {
    return (
      <Card className="group overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
        <div className="flex flex-col sm:flex-row h-full">
          {/* Top on mobile / Right on sm+ — Image */}
          <div className="relative w-full sm:w-2/5 sm:max-w-[200px] flex-shrink-0 aspect-[4/3] sm:aspect-auto">
            <Link
              href={href}
              className="relative block h-full overflow-hidden bg-gray-100"
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {badge && (
                <Badge
                  variant={badge.variant || "default"}
                  className="absolute top-3 left-3 z-10"
                >
                  {badge.text}
                </Badge>
              )}
            </Link>
          </div>

          {/* Bottom on mobile / Left on sm+ — Content */}
          <div className="flex-1 flex flex-col p-4">
            <div className="flex-1">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                {category}
              </p>
              <Link href={href}>
                <h3 className="font-semibold text-sm mb-2 hover:underline line-clamp-2">
                  {name}
                </h3>
              </Link>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold">
                  Rs. {price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    Rs. {originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <Badge variant="destructive" className="mb-2 text-xs">
                  -{discount}% OFF
                </Badge>
              )}
            </div>
            <Button asChild className="w-full mt-auto" size="sm">
              <Link href={href}>View Details</Link>
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // Vertical Layout (Default)
  return (
    <Card className="group overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="p-0">
        <Link
          href={href}
          className="relative block aspect-[4/5] overflow-hidden bg-gray-100"
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {badge && (
            <Badge
              variant={badge.variant || "default"}
              className="absolute top-3 left-3 z-10"
            >
              {badge.text}
            </Badge>
          )}
          {!badge && discount > 0 && (
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
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {category}
        </p>
        <Link href={href}>
          <h3 className="font-semibold text-lg mb-2 hover:underline line-clamp-2">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">
            Rs. {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              Rs. {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={href}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
