import { CategoryPage } from "@/components/CategoryPage";
import { ProductCardProps } from "@/components/ProductCard";

const products: ProductCardProps[] = [
  {
    id: "p1",
    name: "Men's Slim Chino Pants",
    price: 2200,
    originalPrice: 3500,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "37% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "p2",
    name: "Men's Jogger Pants",
    price: 1800,
    originalPrice: 2800,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "36% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "p3",
    name: "Men's Cargo Pants",
    price: 2800,
    originalPrice: 4500,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "38% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "p4",
    name: "Men's Dress Trousers",
    price: 3200,
    originalPrice: 5000,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "36% OFF", variant: "destructive" },
    href: "/product/7",
  },
];

export default function PantsPage() {
  return (
    <CategoryPage
      title="Pants"
      subtitle="From slim chinos to relaxed joggers — find your perfect fit."
      sectionLabel="Men's Collection"
      heroBadge="New Arrivals"
      heroImages={["/h1.webp", "/t-shirt.webp", "/h3.jpg"]}
      products={products}
    />
  );
}
