import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const urban = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopzilla",
  description: "A new experience for ecommerce",
  icons: {
    icon: ["/favicon-1.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urban.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
