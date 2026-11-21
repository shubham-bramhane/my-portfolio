import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono, Yellowtail } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vice-script",
});

export const metadata: Metadata = {
  title: "Shubham Bramhane | Senior Full-Stack Architect — GTA VI 3D Edition",
  description:
    "3D GTA VI (Vice City / Leonida Sunset) developer portfolio of Shubham Bramhane — Senior Full-Stack Architect with 5+ years in Laravel, React/Next.js, Python, Redis (+30% velocity), and AI-augmented workflows.",
  keywords:
    "Shubham Bramhane, GTA 6 3D Portfolio, Vice City Sunset, Laravel Developer, Senior Full-Stack Architect, React.js, Next.js, Vue.js, Python, AI Systems, Healthcare Systems",
  authors: [{ name: "Shubham Bramhane" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shubham Bramhane | Senior Full-Stack Architect — GTA VI 3D Edition",
    description:
      "Senior Full-Stack Architect with 5+ years specializing in Laravel, React & Next.js, Python, AI Systems, and pan-India healthcare platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${jetbrains.variable} ${yellowtail.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
