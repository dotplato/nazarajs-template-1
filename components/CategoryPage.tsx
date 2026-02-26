import { PageHero } from "@/components/PageHero";
import { ProductCard, ProductCardProps } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { EmptyState } from "@/components/EmptyState";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface CategoryPageProps {
  title: string;
  subtitle: string;
  sectionLabel?: string;
  heroBadge?: string;
  heroImages: string[];
  products: ProductCardProps[];
}

export function CategoryPage({
  title,
  subtitle,
  sectionLabel,
  heroBadge,
  heroImages,
  products,
}: CategoryPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <PageHero
        images={heroImages}
        title={title}
        subtitle={subtitle}
        badge={heroBadge}
      />

      {/* Section header */}
      <section className="w-full max-w-7xl mx-auto px-4 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div>
            {sectionLabel && (
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                {sectionLabel}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
          <Badge variant="secondary" className="text-sm px-4 py-2 font-medium">
            {products.length} Products
          </Badge>
        </div>
        <Separator className="mt-6" />
      </section>

      {/* Products Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        {products.length === 0 ? (
          <EmptyState
            title={`No ${title} yet`}
            description={`We're stocking up on ${title.toLowerCase()}. Check back soon!`}
            actionLabel="Back to Home"
            actionHref="/"
          />
        ) : (
          <ProductGrid>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                orientation="vertical"
              />
            ))}
          </ProductGrid>
        )}
      </section>
    </main>
  );
}
