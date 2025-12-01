import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google"
import { Navbar } from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Landing Base - Services Web",
  description: "Landing profesional para mostrar servicios y ejemplos de paginas personalizadas",
};

export default function RootLayout({
  children,
}: {
 children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
