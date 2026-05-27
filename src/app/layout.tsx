import React from "react";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Zenik Studio - Portfolio</title>
        <meta name="description" content="Zenik Studio portfolio and agency website" />
      </head>
      <body className={`${inter.variable} ${caveat.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
