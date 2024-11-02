import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Blog Platform",
  description: "Blog Platform",
};

const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} bg-white antialiased font-sans`}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
