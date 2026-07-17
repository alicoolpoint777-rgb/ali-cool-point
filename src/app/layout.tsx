import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Cool Point (SMC-Private) Limited",
  description: "Authorized Pearl Air Conditioners Dealer & Certified Service Centre in Karachi. Specializing in AC Installation, Repairs, Maintenance, Commercial Renovation, Painting, False Ceiling, and Woodwork.",
  keywords: "AC repair Karachi, Pearl AC dealer, AC installation Baldia Town, commercial maintenance, false ceiling, wood work Karachi, painting services, Hasnain Ali, Ali Cool Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
