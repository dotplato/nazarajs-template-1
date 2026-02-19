import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  subtitle: string;
  title: string;
  discount: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    subtitle: "Stylish",
    title: "MEN'S SNEAKERS",
    discount: "SALE UP TO 30%",
    image: "/t-shirt.webp",
    href: "/sale",
  },
  {
    subtitle: "Cool",
    title: "MENS JACKETS",
    discount: "SALE UP TO 25%",
    image: "/t-shirt.webp",
    href: "/sale",
  },
  {
    subtitle: "Premium",
    title: "WATCHES",
    discount: "SALE UP TO 40%",
    image: "/t-shirt.webp",
    href: "/sale",
  },
];

export function CategoryShowcase() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="relative overflow-hidden bg-gray-100 border-0 group hover:shadow-xl transition-all duration-300"
          >
            <Link href={category.href} className="block p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {category.subtitle}
                  </p>
                  <h3 className="text-md font-bold mb-4 uppercase">
                    {category.title}
                  </h3>
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
                  >
                    {category.discount}
                  </Button>
                </div>
                <div className="relative w-32 h-32 ml-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
