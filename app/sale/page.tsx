import { PageHero } from "@/components/PageHero";
import { ProductCard, ProductCardProps } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const saleProducts: ProductCardProps[] = [
  {
    id: "1",
    name: "Men's Premium Hoodie",
    price: 2500,
    originalPrice: 5000,
    image: "/hoodie.avif",
    category: "Hoodies",
    badge: { text: "50% OFF", variant: "destructive" },
    href: "/product/1",
  },
  {
    id: "2",
    name: "Leather Belt - Brown",
    price: 1200,
    originalPrice: 2000,
    image: "/leather-belt.webp",
    category: "Accessories",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/2",
  },
  {
    id: "3",
    name: "Men's Casual Sneakers",
    price: 3500,
    originalPrice: 6000,
    image: "/sneakers.webp",
    category: "Shoes",
    badge: { text: "42% OFF", variant: "destructive" },
    href: "/product/3",
  },
  {
    id: "4",
    name: "Classic Baseball Cap",
    price: 800,
    originalPrice: 1500,
    image: "/cap.webp",
    category: "Accessories",
    badge: { text: "47% OFF", variant: "destructive" },
    href: "/product/4",
  },
  {
    id: "5",
    name: "Men's Denim Jacket",
    price: 4500,
    originalPrice: 8000,
    image: "/t-shirt.webp",
    category: "Jackets",
    badge: { text: "44% OFF", variant: "destructive" },
    href: "/product/5",
  },
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
    id: "7",
    name: "Men's Chino Pants",
    price: 2200,
    originalPrice: 3500,
    image: "/t-shirt.webp",
    category: "Pants",
    badge: { text: "37% OFF", variant: "destructive" },
    href: "/product/7",
  },
  {
    id: "8",
    name: "Men's Formal Shirt",
    price: 1800,
    originalPrice: 3000,
    image: "/t-shirt.webp",
    category: "Shirts",
    badge: { text: "40% OFF", variant: "destructive" },
    href: "/product/8",
  },
];

export default function SalePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        images={["/h1.webp", "/t-shirt.webp", "/h3.jpg"]}
        title="SALE"
        subtitle="Up to 50% OFF on selected items — grab your favourites before they're gone"
        badge="Limited Time"
        height="60vh"
      />

      {/* Section header */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
              Deals &amp; Discounts
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Sale Products</h2>
          </div>
          <Badge variant="destructive" className="text-sm px-4 py-2">
            {saleProducts.length} Items on Sale
          </Badge>
        </div>
        <Separator className="mt-6" />
      </section>

      {/* Products Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <ProductGrid>
          {saleProducts.map((product) => (
            <ProductCard key={product.id} {...product} orientation="vertical" />
          ))}
        </ProductGrid>
      </section>
    </main>
  );
}
