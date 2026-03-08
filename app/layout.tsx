import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Matias Leiva | Fullstack Developer",
  description: "Fullstack Developer specializing in AI-driven systems, web, and mobile applications. Expert in React, Next.js, React Native, AI pipelines, and cloud infrastructure.",
  keywords: ["Matias Leiva", "Fullstack Developer", "AI", "React", "Next.js", "React Native", "TypeScript"],
  authors: [{ name: "Matias Leiva" }],
  openGraph: {
    title: "Matias Leiva | Fullstack Developer",
    description: "Fullstack Developer specializing in AI-driven systems, web, and mobile applications.",
    url: "https://leivamatias.com",
    siteName: "Matias Leiva Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
