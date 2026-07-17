import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  metadataBase: new URL("https://breket.vercel.app"),
  title: "Breket Arang Serang Banten | Briket Arang Premium Kualitas Ekspor",
  description: "Produsen breket arang Serang Banten — briket batok kelapa kualitas ekspor, tahan lama >2 jam, 100% alami. Melayani eceran & grosir seluruh Indonesia.",
  openGraph: {
    title: "Breket Arang Serang Banten | Briket Premium Kualitas Ekspor",
    description: "Produsen breket arang batok kelapa premium dari Serang, Banten. Tahan lama, panas merata, 100% alami. Melayani eceran & grosir.",
    url: "https://breket.vercel.app",
    siteName: "Breket Arang Serang Banten",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/breket.jpg", width: 1200, height: 630, alt: "Breket Arang Serang Banten - Briket Premium" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          <Cart />
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
