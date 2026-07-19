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
  metadataBase: new URL("https://briketarangserangbanten.sbs"),
  title: "Briket Arang Serang Banten | Briket Arang Premium Kualitas Ekspor",
  description: "Produsen briket arang Serang Banten — briket batok kelapa kualitas ekspor, tahan lama >2 jam, 100% alami. Melayani eceran & grosir seluruh Indonesia.",
  keywords: ["briket arang", "briket batok kelapa", "arang Serang Banten", "briket premium", "briket ekspor", "arang batok kelapa", "briket Indonesia"],
  openGraph: {
    title: "Briket Arang Serang Banten | Briket Premium Kualitas Ekspor",
    description: "Produsen briket arang batok kelapa premium dari Serang, Banten. Tahan lama, panas merata, 100% alami. Melayani eceran & grosir.",
    url: "https://briketarangserangbanten.sbs",
    siteName: "Briket Arang Serang Banten",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/images/breket.jpg", width: 1200, height: 630, alt: "Briket Arang Serang Banten - Briket Premium" }],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Briket.id - Briket Arang Serang Banten",
                description: "Produsen briket arang batok kelapa premium kualitas ekspor dari Serang, Banten.",
                url: "https://briketarangserangbanten.sbs",
                telephone: "+6281410230548",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Serang",
                  addressRegion: "Banten",
                  addressCountry: "ID",
                },
                image: "https://briketarangserangbanten.sbs/images/breket.jpg",
                openingHours: "Mo-Su 08:00-17:00",
                areaServed: "ID",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Produk Briket",
                  itemListElement: [
                    { "@type": "Product", name: "Briket Kubus Premium", offers: { "@type": "Offer", price: "200000", priceCurrency: "IDR" } },
                    { "@type": "Product", name: "Briket Heksagonal Premium", offers: { "@type": "Offer", price: "200000", priceCurrency: "IDR" } },
                    { "@type": "Product", name: "Briket Kubus Eceran", offers: { "@type": "Offer", price: "20000", priceCurrency: "IDR" } },
                    { "@type": "Product", name: "Briket Heksagonal Eceran", offers: { "@type": "Offer", price: "20000", priceCurrency: "IDR" } },
                  ],
                },
              }),
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
