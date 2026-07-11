import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Cenmill — Architecture Studio",
    template: "%s — Cenmill",
  },
  description:
    "Cenmill is an architecture studio designing residential and mixed-use buildings with a focus on urban housing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-white font-sans font-light text-neutral-900">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-10 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
