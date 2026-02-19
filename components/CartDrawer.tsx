"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice } =
    useCart();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        {/* Header */}
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2 text-xl font-bold">
            Shopping Cart
            {totalItems > 0 && (
              <Badge
                variant="destructive"
                className="rounded-full px-2 py-0.5 text-xs"
              >
                {totalItems}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-16">
              <p className="text-5xl">🛒</p>
              <p className="text-lg font-semibold text-gray-700">
                Your cart is empty
              </p>
              <p className="text-sm text-gray-500">
                Add some products to get started
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                {/* Thumbnail */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {item.category}
                  </p>
                  <p className="font-semibold text-sm text-gray-900 truncate">
                    {item.name}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-sm font-bold text-gray-900">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-gray-400">
                        Rs. {item.price.toLocaleString()} each
                      </p>
                    )}
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 rounded-full"
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                    >
                      −
                    </Button>
                    <span className="text-sm font-semibold w-5 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7 rounded-full"
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 ml-auto text-xs px-2 h-7"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <SheetFooter className="flex flex-col gap-3 border-t pt-4">
            <Separator />
            <div className="flex items-center justify-between text-base font-semibold">
              <span>Total</span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <Button
              asChild
              className="w-full rounded-full bg-black text-white hover:bg-gray-800 font-semibold"
              onClick={onClose}
            >
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full border-gray-300 text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
