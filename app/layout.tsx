import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import MainNavbar from "@/components/MainNavbar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        <MainNavbar />
        {children}
        <footer className="footer">
          <p>© 2025 Shop Up. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
