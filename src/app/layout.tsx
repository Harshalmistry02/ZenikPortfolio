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
    default: "Zenik | Custom Software Development & Digital Product Agency",
    template: "%s | Zenik",
  },
  description:
    "We design and build secure, high-performance custom web applications, mobile apps, and automated systems that drive real business growth. Partner with Zenik.",
  keywords: ["web development", "mobile apps", "UI/UX design", "AI", "Next.js", "React", "Zenik Studio", "Zenik"],
  authors: [{ name: "Zenik", url: "https://zenik.studio" }],
  metadataBase: new URL("https://zenik.studio"),
  openGraph: {
    title: "Zenik | Custom Software Development & Digital Product Agency",
    description: "We design and build secure, high-performance custom web applications, mobile apps, and automated systems that drive real business growth. Partner with Zenik.",
    url: "https://zenik.studio",
    siteName: "Zenik",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenik | Custom Software Development & Digital Product Agency",
    description: "We design and build secure, high-performance custom web applications, mobile apps, and automated systems that drive real business growth. Partner with Zenik.",
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
    <html lang="en" className={`${inter.variable} ${caveat.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
