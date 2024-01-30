import type { Metadata } from "next";
import React from 'react';
import "./globals.css";

const description = "Vaporware is a progam that runs on a new kind of internet computer, called a ship. Ships are built on a novel virtual machine, called a solid-state interpreter."

export const metadata: Metadata = {
  metadataBase: new URL('https://vaporware.network'),

  title: "Vaporware.network",
  description,
  // "image": "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/images/vaporware-devices-preview.png",
  category: 'technology',

  twitter: {
    "card": "summary",
    "site": "@__vaporware__",
    "creator": "@__vaporware__",
    "title": "Vaporware",
    description,
    // images: ["https://vaporware.network/images/vaporware-devices-30s-preview.jpeg"],
    // "card": "player",
    // "players": {
    //   playerUrl: "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/twitter-player-container",
    //   streamUrl: "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/twitter-player-container",
    //   height: 480,
    //   width: 480,
    // },
  },

  openGraph: {
    title: "Vaporware.network",
    description,
    url: 'https://vaporware.network',
    siteName: 'Vaporware.network',
    // images: ["https://vaporware.network/images/vaporware-devices-30s-preview.jpeg"],
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },

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
