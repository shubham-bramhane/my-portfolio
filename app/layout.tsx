import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Shubham Bramhane | Laravel Developer & Full-Stack Engineer",
  description:
    "Portfolio of Shubham Bramhane — Full Stack Developer with over 5 years of experience specializing in the Laravel ecosystem, AI-assisted workflows (GitHub Copilot, GPT-4, Antigravity), healthcare systems, and scalable CRM solutions.",
  keywords:
    "Shubham Bramhane, Laravel Developer, Full-Stack Engineer, PHP, React.js, Vue.js, Next.js, MySQL, PostgreSQL, Healthcare Systems, Chandrapur, Maharashtra, Portfolio",
  authors: [{ name: "Shubham Bramhane" }],
  openGraph: {
    title: "Shubham Bramhane | Laravel Developer & Full-Stack Engineer",
    description:
      "Full Stack Developer with over 5 years of experience specializing in the Laravel ecosystem, AI workflows, and healthcare systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
