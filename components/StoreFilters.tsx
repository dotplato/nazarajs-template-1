"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  "T-Shirts",
  "Shirts",
  "Pants",
  "Shorts",
  "Jackets",
  "Hoodies",
  "Shoes",
  "Accessories",
];
const PRICE_RANGES = [
  { label: "Under Rs. 1,000", min: 0, max: 1000 },
  { label: "Rs. 1,000 – 2,500", min: 1000, max: 2500 },
  { label: "Rs. 2,500 – 5,000", min: 2500, max: 5000 },
  { label: "Over Rs. 5,000", min: 5000, max: Infinity },
];

export interface FilterState {
  categories: string[];
  priceRange: { min: number; max: number } | null;
  onSaleOnly: boolean;
}

interface StoreFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
}

export function StoreFilters({
  filters,
  onChange,
  totalResults,
}: StoreFiltersProps) {
  function toggleCategory(cat: string) {
    const already = filters.categories.includes(cat);
    onChange({
      ...filters,
      categories: already
        ? filters.categories.filter((c) => c !== cat)
        : [...filters.categories, cat],
    });
  }

  function setPriceRange(range: { min: number; max: number } | null) {
    onChange({ ...filters, priceRange: range });
  }

  function reset() {
    onChange({ categories: [], priceRange: null, onSaleOnly: false });
  }

  const isActive =
    filters.categories.length > 0 ||
    filters.priceRange !== null ||
    filters.onSaleOnly;

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-base uppercase tracking-widest">
          Filters
        </h2>
        {isActive && (
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-gray-500 hover:text-black px-2 h-7"
            onClick={reset}
          >
            Clear all
          </Button>
        )}
      </div>

      <Separator className="mb-5" />

      {/* Results count */}
      <Badge variant="secondary" className="mb-5 text-xs px-3 py-1">
        {totalResults} Products
      </Badge>

      {/* Sale Only */}
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <Checkbox
            id="sale-only"
            checked={filters.onSaleOnly}
            onCheckedChange={(v) =>
              onChange({ ...filters, onSaleOnly: Boolean(v) })
            }
          />
          <label
            htmlFor="sale-only"
            className="text-sm font-medium cursor-pointer select-none"
          >
            On Sale Only
          </label>
        </div>
      </div>

      <Separator className="mb-5" />

      {/* Categories */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Category
        </p>
        <div className="flex flex-col gap-2.5">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={filters.categories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <label
                htmlFor={`cat-${cat}`}
                className="text-sm cursor-pointer select-none"
              >
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-5" />

      {/* Price Range */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
          Price Range
        </p>
        <div className="flex flex-col gap-2.5">
          {PRICE_RANGES.map((range) => {
            const isSelected =
              filters.priceRange?.min === range.min &&
              filters.priceRange?.max === range.max;
            return (
              <div key={range.label} className="flex items-center gap-2">
                <Checkbox
                  id={`price-${range.label}`}
                  checked={isSelected}
                  onCheckedChange={() =>
                    setPriceRange(
                      isSelected ? null : { min: range.min, max: range.max },
                    )
                  }
                />
                <label
                  htmlFor={`price-${range.label}`}
                  className="text-sm cursor-pointer select-none"
                >
                  {range.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
