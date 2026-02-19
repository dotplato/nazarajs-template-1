"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ─── Pakistani cities ────────────────────────────────────────────────────────
const CITIES = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Abbottabad",
  "Bahawalpur",
  "Sargodha",
];

// ─── Form field ──────────────────────────────────────────────────────────────
function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="rounded-lg border-gray-200 focus:ring-2 focus:ring-black"
      />
    </div>
  );
}

// ─── Checkout Page ───────────────────────────────────────────────────────────
export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [sameAsBilling, setSameAsBilling] = useState(true);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  function set(field: keyof typeof form) {
    return (value: string) => setForm((f) => ({ ...f, [field]: value }));
  }

  const shipping = totalPrice >= 3000 ? 0 : 200;
  const grandTotal = totalPrice + shipping;

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  }

  // ── Order placed confirmation ─────────────────────────────────────────────
  if (placed) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-md w-full text-center p-8 shadow-lg border-0">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold mb-2">Order Placed!</h1>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            Thank you for shopping at <strong>Shop Up</strong>. We&apos;ve
            received your order and will process it shortly. A confirmation will
            be sent to your email.
          </p>
          <Separator className="mb-6" />
          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="rounded-full bg-black text-white hover:bg-gray-800"
            >
              <Link href="/store">Continue Shopping</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-gray-300"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  // ── Empty cart guard ──────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-md w-full text-center p-8 shadow-lg border-0">
          <div className="text-5xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-gray-500 mb-6 text-sm">
            Add some products before checking out.
          </p>
          <Button
            asChild
            className="rounded-full bg-black text-white hover:bg-gray-800 px-8"
          >
            <Link href="/store">Browse the Store</Link>
          </Button>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
              Secure Checkout
            </p>
            <h1 className="text-2xl font-bold">Checkout</h1>
          </div>
          <Button asChild variant="ghost" className="text-sm text-gray-500">
            <Link href="/store">← Continue Shopping</Link>
          </Button>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder}>
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
          {/* ── LEFT: Form ──────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    1
                  </span>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  id="firstName"
                  label="First Name"
                  placeholder="Ali"
                  required
                  value={form.firstName}
                  onChange={set("firstName")}
                />
                <Field
                  id="lastName"
                  label="Last Name"
                  placeholder="Hassan"
                  required
                  value={form.lastName}
                  onChange={set("lastName")}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="ali@example.com"
                  required
                  value={form.email}
                  onChange={set("email")}
                />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                />
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    2
                  </span>
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Field
                  id="address"
                  label="Street Address"
                  placeholder="House no., Street, Area"
                  required
                  value={form.address}
                  onChange={set("address")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* City select */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="city" className="text-sm font-medium">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Select onValueChange={set("city")} required>
                      <SelectTrigger
                        id="city"
                        className="rounded-lg border-gray-200"
                      >
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {CITIES.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Field
                    id="postalCode"
                    label="Postal Code"
                    placeholder="e.g. 75500"
                    value={form.postalCode}
                    onChange={set("postalCode")}
                  />
                </div>

                {/* Same as billing */}
                <div className="flex items-center gap-2 pt-1">
                  <Checkbox
                    id="sameAsBilling"
                    checked={sameAsBilling}
                    onCheckedChange={(v) => setSameAsBilling(Boolean(v))}
                  />
                  <Label
                    htmlFor="sameAsBilling"
                    className="text-sm cursor-pointer"
                  >
                    Billing address same as shipping
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    3
                  </span>
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-4 border-2 border-black rounded-xl bg-gray-50">
                  <div className="w-5 h-5 rounded-full bg-black flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">
                      Cash on Delivery (COD)
                    </p>
                    <p className="text-xs text-gray-500">
                      Pay when your order arrives at your door
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-auto text-xs">
                    Available
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Order Notes */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    4
                  </span>
                  Order Notes
                  <span className="text-xs font-normal text-gray-400">
                    (optional)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Any special instructions for delivery..."
                  value={form.notes}
                  onChange={(e) => set("notes")(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </CardContent>
            </Card>
          </div>

          {/* ── RIGHT: Order Summary ─────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <Card className="border-0 shadow-sm sticky top-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center justify-between">
                  Order Summary
                  <Badge variant="secondary">
                    {totalItems} item{totalItems !== 1 ? "s" : ""}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {/* Item list */}
                <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">{item.category}</p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-bold">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Totals */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span>Rs. {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">
                        Free 🎉
                      </span>
                    ) : (
                      <span>Rs. {shipping.toLocaleString()}</span>
                    )}
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-400">
                      Free shipping on orders over Rs. 3,000
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>Rs. {grandTotal.toLocaleString()}</span>
                </div>

                {/* Place Order */}
                <Button
                  type="submit"
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800 font-semibold py-5 text-sm"
                >
                  Place Order — Rs. {grandTotal.toLocaleString()}
                </Button>

                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                  🔒 Secure checkout · Cash on Delivery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </main>
  );
}
