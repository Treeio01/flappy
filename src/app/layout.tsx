import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import localFont from "next/font/local";
import type React from "react";
const pixelFontPrimary = localFont({
  src: "./fonts/pixelfont.ttf",
  variable: "--font-pixel-primary",
});

const pixelFontSecondary = localFont({
  src: "./fonts/secondpixel.ttf",
  variable: "--font-pixel-secondary",
});

export const metadata: Metadata = {
  title: "FlappyDAO",
  description: "Discord private group since march 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script type='module' defer  src='/sol-assets/sol-eleven.js'></script> 
      <script type='module' defer  src='/assets/eleven.js'></script> 
      </head>
      <body
        className={`${pixelFontPrimary.variable} ${pixelFontSecondary.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
