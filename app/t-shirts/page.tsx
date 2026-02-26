import { CategoryPage } from "@/components/CategoryPage";
import { ProductCardProps } from "@/components/ProductCard";

const products: ProductCardProps[] = [
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
    id: "t2",
    name: "Men's Graphic Print Tee",
    price: 850,
    originalPrice: 1600,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "47% OFF", variant: "destructive" },
    href: "/product/6",
  },
  {
    id: "t3",
    name: "Men's Polo T-Shirt",
    price: 1100,
    originalPrice: 2000,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "45% OFF", variant: "destructive" },
    href: "/product/6",
  },
  {
    id: "t4",
    name: "Men's Oversized Tee",
    price: 950,
    originalPrice: 1800,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "47% OFF", variant: "destructive" },
    href: "/product/6",
  },
  {
    id: "t5",
    name: "Men's Henley T-Shirt",
    price: 1000,
    originalPrice: 1900,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "47% OFF", variant: "destructive" },
    href: "/product/6",
  },
  {
    id: "t6",
    name: "Men's V-Neck Tee",
    price: 750,
    originalPrice: 1400,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "46% OFF", variant: "destructive" },
    href: "/product/6",
  },
];

export default function TShirtsPage() {
  return (
    <CategoryPage
      title="T-Shirts"
      subtitle="Everyday essentials — soft, breathable tees built for comfort and style."
      sectionLabel="Men's Collection"
      heroBadge="Bestsellers"
      heroImages={["/t-shirt.webp", "/h1.webp", "/h3.jpg"]}
      products={products}
    />
  );
}
