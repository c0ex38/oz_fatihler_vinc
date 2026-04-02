import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { TransitionProvider } from "@/components/shared/TransitionProvider";
import { SplashLoader } from "@/components/shared/SplashLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Özfatihler Vinç | Sanayi ve Teknoloji",
  description: "Özfatihler Vinç Makine Sanayi - Türkiye'nin öncü vinç üreticisi. Portal, Köprülü, Pergel ve Özel Vinç çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <SplashLoader />
        <Header />
        <TransitionProvider>
          <main className="min-h-screen">
            {children}
          </main>
        </TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
