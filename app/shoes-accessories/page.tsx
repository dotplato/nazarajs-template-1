import { CategoryPage } from "@/components/CategoryPage";
import { ProductCardProps } from "@/components/ProductCard";

const products: ProductCardProps[] = [
  {
    id: "sa1",
    name: "Men's Casual Sneakers",
    price: 3500,
    originalPrice: 6000,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "42% OFF", variant: "destructive" },
    href: "/product/3",
  },
  {
    id: "sa2",
    name: "Leather Belt - Brown",
    price: 1200,
    originalPrice: 2000,
    image: "/leather-belt.webp",
    category: "Accessories",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/2",
  },
  {
    id: "sa3",
    name: "Classic Baseball Cap",
    price: 800,
    originalPrice: 1500,
    image: "/cap.webp",
    category: "Accessories",
    badge: { text: "47% OFF", variant: "destructive" },
    href: "/product/4",
  },
  {
    id: "sa4",
    name: "Men's Leather Loafers",
    price: 4200,
    originalPrice: 7000,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/3",
  },
  {
    id: "sa5",
    name: "Men's Canvas Sneakers",
    price: 2800,
    originalPrice: 4500,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "38% OFF", variant: "destructive" },
    href: "/product/3",
  },
  {
    id: "sa6",
    name: "Men's Woven Bracelet",
    price: 450,
    originalPrice: 800,
    image: "/leather-belt.webp",
    category: "Accessories",
    badge: { text: "44% OFF", variant: "destructive" },
    href: "/product/2",
  },
];

export default function ShoesAccessoriesPage() {
  return (
    <CategoryPage
      title="Shoes & Accessories"
      subtitle="Complete your look from head to toe — premium footwear and accessories."
      sectionLabel="Men's Collection"
      heroBadge="Top Picks"
      heroImages={["/h1.webp", "/h3.jpg", "/t-shirt.webp"]}
      products={products}
    />
  );
}
