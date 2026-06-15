import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HashScroll from "@/components/HashScroll";
// MuseoModerno self-hosted via Fontsource — Google Fonts URL for this font returns 400
import "@fontsource/museomoderno/400.css";
import "@fontsource/museomoderno/500.css";
import "@fontsource/museomoderno/600.css";
import "@fontsource/museomoderno/700.css";
import "@fontsource/museomoderno/800.css";
import "@fontsource/museomoderno/900.css";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nandita Malhotra — Product Designer",
  description:
    "Product designer creating inclusive digital experiences at the intersection of research, systems thinking, and visual craft.",
  openGraph: {
    title: "Nandita Malhotra — Product Designer",
    description:
      "Product designer creating inclusive digital experiences at the intersection of research, systems thinking, and visual craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <body className="bg-cream text-ink font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <HashScroll />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
