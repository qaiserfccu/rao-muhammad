import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from '@/components/layout/Layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A professional portfolio showcasing expertise and achievements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-sky-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-sky-900/20`}
      >
        <div className="fixed inset-0 bg-[url('/images/grid.png')] bg-center [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"></div>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
