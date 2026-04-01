import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Shubham Bramhane | Laravel Developer & Full-Stack Engineer",
  description:
    "Personal portfolio of Shubham Bramhane — Laravel Developer with 4+ years of experience in PHP, Vue.js, MySQL, and RESTful APIs. Based in Chandrapur, Maharashtra.",
  keywords:
    "Shubham Bramhane, Laravel Developer, PHP, Vue.js, MySQL, Full-Stack, India, Portfolio",
  authors: [{ name: "Shubham Bramhane" }],
  openGraph: {
    title: "Shubham Bramhane | Laravel Developer",
    description:
      "Highly skilled Laravel Developer with 4+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
