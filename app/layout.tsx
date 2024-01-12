import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

const urban = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopzilla",
  description: "A new experience for ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urban.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
