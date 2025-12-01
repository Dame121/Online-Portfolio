import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damewan Bareh - AI/ML Developer & Full-Stack Engineer",
  description: "Portfolio of Damewan Bareh - Passionate Software Developer specializing in Full-Stack Development, AI/ML Integration, and Cloud Technologies. Building scalable, production-ready applications.",
  keywords: ["Damewan Bareh", "AI Developer", "Machine Learning", "Full-Stack Developer", "Python", "React", "JavaScript", "Web Development", "Portfolio"],
  authors: [{ name: "Damewan Bareh" }],
  openGraph: {
    title: "Damewan Bareh - AI/ML Developer & Full-Stack Engineer",
    description: "Portfolio showcasing projects in AI/ML, Full-Stack Development, and Cloud Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damewan Bareh - AI/ML Developer & Full-Stack Engineer",
    description: "Portfolio showcasing projects in AI/ML, Full-Stack Development, and Cloud Technologies",
  },
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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
