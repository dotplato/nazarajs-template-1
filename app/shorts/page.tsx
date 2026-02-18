import { CategoryPage } from "@/components/CategoryPage";
import { ProductCardProps } from "@/components/ProductCard";

const products: ProductCardProps[] = [
  {
    id: "sh1",
    name: "Men's Cargo Shorts",
    price: 1200,
    originalPrice: 2000,
    image: "/t-shirt.webp",
    category: "Shorts",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "sh2",
    name: "Men's Swim Shorts",
    price: 900,
    originalPrice: 1600,
    image: "/t-shirt.webp",
    category: "Shorts",
    badge: { text: "44% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "sh3",
    name: "Men's Chino Shorts",
    price: 1400,
    originalPrice: 2200,
    image: "/t-shirt.webp",
    category: "Shorts",
    badge: { text: "36% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "sh4",
    name: "Men's Athletic Shorts",
    price: 1000,
    originalPrice: 1800,
    image: "/t-shirt.webp",
    category: "Shorts",
    badge: { text: "44% OFF", variant: "destructive" },
    href: "/product/7",
  },
];

export default function ShortsPage() {
  return (
    <CategoryPage
      title="Shorts"
      subtitle="Stay cool and comfortable — the perfect shorts for every season."
      sectionLabel="Men's Collection"
      heroBadge="Summer Picks"
      heroImages={["/h3.jpg", "/t-shirt.webp", "/h1.webp"]}
      products={products}
    />
  );
}
