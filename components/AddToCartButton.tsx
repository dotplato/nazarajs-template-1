"use client";

import { useState } from "react";
import { useCart, CartItem } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
  product: Omit<CartItem, "quantity">;
  className?: string;
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <Button
      onClick={handleAdd}
      className={`w-full rounded-full font-semibold transition-all duration-300 ${
        added
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "bg-black hover:bg-gray-800 text-white"
      } ${className ?? ""}`}
    >
      {added ? "✓ Added!" : "Add to Cart"}
    </Button>
  );
}
