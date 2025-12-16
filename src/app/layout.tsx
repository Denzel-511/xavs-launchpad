import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Launchra - Build Real Tech Skills, Create Real Impact",
  description: "Join Launchra, an 8-week hybrid program by XAVS Labs. Learn by building real products with industry mentors. Two tracks: Full-Stack Engineering & AI Automation.",
  icons: {
    icon: '/launchra-favicon.jpeg',
  },
  openGraph: {
    title: "Launchra - Build Real Tech Skills, Create Real Impact",
    description: "Join our community of builders. 8 weeks of hands-on training with real industry projects.",
    images: ['/launchra-favicon.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
