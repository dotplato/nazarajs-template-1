import { CategoryPage } from "@/components/CategoryPage";
import { ProductCardProps } from "@/components/ProductCard";

const products: ProductCardProps[] = [
  {
    id: "s1",
    name: "Men's Oxford Formal Shirt",
    price: 1800,
    originalPrice: 3000,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/8",
  },
  {
    id: "s2",
    name: "Men's Linen Casual Shirt",
    price: 1500,
    originalPrice: 2500,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/8",
  },
  {
    id: "s3",
    name: "Men's Flannel Check Shirt",
    price: 1600,
    originalPrice: 2800,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "43% OFF", variant: "destructive" },
    href: "/product/8",
  },
  {
    id: "s4",
    name: "Men's Denim Shirt",
    price: 2000,
    originalPrice: 3200,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "38% OFF", variant: "destructive" },
    href: "/product/8",
  },
];

export default function ShirtPage() {
  return (
    <CategoryPage
      title="Shirts"
      subtitle="Crisp, clean, and effortlessly stylish — shirts for every occasion."
      sectionLabel="Men's Collection"
      heroBadge="Bestsellers"
      heroImages={["/t-shirt.webp", "/h1.webp", "/h3.jpg"]}
      products={products}
    />
  );
}
