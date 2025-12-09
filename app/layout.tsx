import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./src/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Mathieu Pernot",
  description: "Mon site portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
<html lang="fr">
  <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
    style={{
      backgroundImage: "url('/background.png')",
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      backgroundPosition: "center",
    }}
  >
    <Header />
    
    <main className="pt-20 flex-1">
      {children}
    </main>

    <footer className="text-center py-6 text-gray-500">
      © 2025 Pernot Mathieu
    </footer>
  </body>
</html>
  );
}

