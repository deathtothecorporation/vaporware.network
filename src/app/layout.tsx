import type { Metadata } from "next";
import React from 'react';
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaporware.network",
  description: "About the Vaporware project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
