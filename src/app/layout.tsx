import React from "react";
import type { Metadata, Viewport } from "next";
import { Caveat, Inter, JetBrains_Mono } from "next/font/google";
import { AuthProvider } from "./providers";
import { AppShell } from "./app-shell";
import "../index.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zenik Studio — Digital Product Agency",
    template: "%s | Zenik Studio",
  },
  description:
    "Zenik Studio is a UK & USA digital product agency building modern web apps, mobile apps, and AI-powered solutions for ambitious brands.",
  keywords: ["web development", "mobile apps", "UI/UX design", "AI", "Next.js", "React", "Zenik Studio"],
  authors: [{ name: "Zenik Studio", url: "https://zenik.studio" }],
  metadataBase: new URL("https://zenik.studio"),
  openGraph: {
    title: "Zenik Studio — Digital Product Agency",
    description: "We build modern web, mobile, and AI solutions for ambitious brands across the UK & USA.",
    url: "https://zenik.studio",
    siteName: "Zenik Studio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenik Studio — Digital Product Agency",
    description: "We build modern web, mobile, and AI solutions for ambitious brands across the UK & USA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00BFA6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
