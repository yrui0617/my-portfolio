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
  title: "Tan Yin Rui | Software Engineering Portfolio",
  description:
    "Tan Yin Rui's portfolio showcasing software engineering, web development, AI applications, and full-stack projects.",
  openGraph: {
    title: "Tan Yin Rui | Software Engineering Portfolio",
    description:
      "Software engineering portfolio featuring web development, AI and full-stack projects.",
    url: "https://my-portfolio-yrui.vercel.app/",

    siteName: "Tan Yin Rui Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tan Yin Rui Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },
};
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
