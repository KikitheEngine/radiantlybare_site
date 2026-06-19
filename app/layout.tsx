import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Radiantlybare | Wax & Skincare Studio | Hanford, CA",
  description:
    "Professional waxing and skincare services in downtown Hanford, California. Brazilian waxing, eyebrow lamination, lash lifts, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${libreBaskerville.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
