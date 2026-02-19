
"use client"

export default function TopNavbar() {
  return (
    <div className="bg-green-900 text-white text-center py-2 text-xs sm:text-sm w-full px-4">
      <span className="hidden sm:inline">
        FREE SHIPPING on orders above Rs 2000 &nbsp;|&nbsp; Pay Online For A
        Hassle-Free Delivery
      </span>
      <span className="sm:hidden">FREE SHIPPING on orders above Rs 3000</span>
    </div>
  );
}
