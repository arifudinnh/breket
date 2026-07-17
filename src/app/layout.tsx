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
  metadataBase: new URL("https://briket.id"),
  title: "Briket.id | Briket Arang Premium dari Serang",
  description: "Briket arang batok kelapa kualitas ekspor langsung dari pabrik kami di Serang, Banten. Tahan lama, panas merata, sangat nyaman untuk segala acara bakar-bakar dan kumpul keluarga.",
  openGraph: {
    title: "Briket.id | Briket Arang Premium dari Serang",
    description: "Briket arang batok kelapa kualitas ekspor langsung dari pabrik kami di Serang, Banten.",
    url: "https://briket.id",
    siteName: "Briket.id",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/breket.jpg", width: 1200, height: 630, alt: "Briket Arang Premium Briket.id" }],
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
