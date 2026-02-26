import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import MainNavbar from "@/components/MainNavbar";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shop Up — Men's Fashion",
  description:
    "Premium men's clothing — T-Shirts, Shirts, Pants, Shoes & Accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <CartProvider>
          <div className="flex flex-col flex-1">
            <TopNavbar />
            <MainNavbar />
            {children}
            <footer className="bg-black text-white mt-auto">
              {/* Main footer grid */}
              <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                  <p className="text-xl font-extrabold tracking-tight mb-3">
                    Shop Up
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Premium men&apos;s fashion — quality clothing, shoes &amp;
                    accessories delivered across Pakistan.
                  </p>
                  <a
                    href="mailto:orders@shopupofficial.com.pk"
                    className="block mt-3 text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    orders@shopupofficial.com.pk
                  </a>
                </div>

                {/* Shop */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Shop
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-gray-300">
                    {[
                      { label: "Store", href: "/store" },
                      { label: "New Arrivals", href: "/new-arrivals" },
                      { label: "Sale", href: "/sale" },
                      { label: "T-Shirts", href: "/t-shirts" },
                      { label: "Shirts", href: "/shirt" },
                    ].map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className="hover:text-white transition-colors"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Categories
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-gray-300">
                    {[
                      { label: "Pants", href: "/pants" },
                      { label: "Shorts", href: "/shorts" },
                      { label: "Hoodies & Jackets", href: "/shirts" },
                      {
                        label: "Shoes & Accessories",
                        href: "/shoes-accessories",
                      },
                    ].map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          className="hover:text-white transition-colors"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Contact
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-gray-300">
                    <li>📦 Free delivery on orders over Rs. 3,000</li>
                    <li>🔁 Easy 7-day returns</li>
                    <li>📞 Customer support via email</li>
                    <li>
                      <a
                        href="mailto:orders@shopupofficial.com.pk"
                        className="hover:text-white transition-colors"
                      >
                        orders@shopupofficial.com.pk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                  <p>© 2025 Shop Up. All rights reserved.</p>
                  <p>Made with ❤️ in Pakistan</p>
                </div>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
