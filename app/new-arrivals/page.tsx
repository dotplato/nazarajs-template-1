import { CategoryPage } from "@/components/CategoryPage";
import { ProductCardProps } from "@/components/ProductCard";

const products: ProductCardProps[] = [
  {
    id: "na1",
    name: "Men's Premium Hoodie",
    price: 2500,
    originalPrice: 5000,
    image: "/hoodie.avif",
    category: "Hoodies",
    badge: { text: "NEW", variant: "default" },
    href: "/product/1",
  },
  {
    id: "na2",
    name: "Men's Denim Jacket",
    price: 4500,
    originalPrice: 8000,
    image: "/t-shirt.webp",
    category: "Jackets",
    badge: { text: "NEW", variant: "default" },
    href: "/product/5",
  },
  {
    id: "na3",
    name: "Men's Slim Fit T-Shirt",
    price: 700,
    originalPrice: 1400,
    image: "/t-shirt.webp",
    category: "T-Shirts",
    badge: { text: "NEW", variant: "default" },
    href: "/product/6",
  },
  {
    id: "na4",
    name: "Men's Formal Shirt",
    price: 1800,
    originalPrice: 3000,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "NEW", variant: "default" },
    href: "/product/8",
  },
  {
    id: "na5",
    name: "Men's Chino Pants",
    price: 2200,
    originalPrice: 3500,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "NEW", variant: "default" },
    href: "/product/7",
  },
  {
    id: "na6",
    name: "Men's Cargo Shorts",
    price: 1200,
    originalPrice: 2000,
    image: "/t-shirt.webp",
    category: "Shorts",
    badge: { text: "NEW", variant: "default" },
    href: "/product/7",
  },
];

export default function NewArrivalsPage() {
  return (
    <CategoryPage
      title="New Arrivals"
      subtitle="Fresh drops, just landed — be the first to wear the latest styles."
      sectionLabel="Just In"
      heroBadge="Just Dropped"
      heroImages={["/h3.jpg", "/h1.webp", "/t-shirt.webp"]}
      products={products}
    />
  );
}
