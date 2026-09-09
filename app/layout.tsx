import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { BRAND, pt } from "@/lib/i18n/pt";
import "./globals.css";

export const metadata: Metadata = {
  title: `${BRAND} — respostas automáticas no Instagram`,
  description: pt.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full dark">
      <body className="min-h-full bg-background text-foreground font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
