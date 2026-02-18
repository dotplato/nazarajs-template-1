"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "T-Shirts", href: "/t-shirts" },
  { label: "Shirts", href: "/shirt" },
  { label: "Pants", href: "/pants" },
  { label: "Shorts", href: "/shorts" },
  { label: "Shoes & Accessories", href: "/shoes-accessories" },
  { label: "Sale", href: "/sale" },
  { label: "New Arrivals", href: "/new-arrivals" },
];

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white w-full z-50 relative">
      {/* ── Desktop / Tablet Row ── */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 md:px-6 py-4 gap-4">
        {/* Logo + contact */}
        <div className="flex items-center gap-4 flex-shrink-0 min-w-0">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight whitespace-nowrap"
          >
            Shop Up
          </Link>
          <a
            href="mailto:orders@shopupofficial.com.pk"
            className="hidden xl:block text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap truncate max-w-[220px]"
          >
            Need help? orders@shopupofficial.com.pk
          </a>
        </div>

        {/* Nav links — hidden below lg */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center flex-wrap">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200
                ${
                  pathname === link.href
                    ? "bg-white text-black"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }
                ${link.label === "Sale" ? "text-red-400 hover:text-red-300" : ""}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: search + hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Search — expandable on mobile */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  className="bg-gray-800 text-white text-sm rounded-full py-1.5 px-4 w-40 sm:w-56 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-gray-400 hover:text-white text-lg leading-none"
                  aria-label="Close search"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Open search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Cart icon */}
          <button
            className="p-2 rounded-full hover:bg-white/10 transition-colors relative"
            aria-label="Cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
              <path
                d="M16 10a4 4 0 0 1-8 0"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile / Tablet Dropdown Menu ── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-4 pb-4">
            {/* Help email on mobile */}
            <a
              href="mailto:orders@shopupofficial.com.pk"
              className="block text-xs text-gray-500 py-3 border-b border-white/10 mb-2"
            >
              Need help? orders@shopupofficial.com.pk
            </a>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    pathname === link.href
                      ? "bg-white text-black"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                  ${link.label === "Sale" ? "text-red-400 hover:text-red-300" : ""}
                `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
