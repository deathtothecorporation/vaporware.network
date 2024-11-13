import type { Metadata } from "next";
import Script from "next/script";
import Logo from "@/components/Logo";

import Link from "next/link";
import React from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "./globals.css";

const description =
  "An Operating function isn’t a device - it’s a computer defined as software. And it runs everywhere simultaneously.";

const metadataBase = new URL(process.env.BASE_URL as string);

const criticalFonts = [
  {
    path: "/website-assets/fonts/lmmonoproplt10-regular.otf",
    type: "font/otf",
  },
  {
    path: "/website-assets/fonts/BerkeleyMonoVariable-Regular.woff2",
    type: "font/woff2",
  },
  {
    path: "/website-assets/fonts/lmromancaps10-regular.otf",
    type: "font/otf",
  },
];

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  //maximumScale: 1.0,
  //userScalable: "no",
};

export const metadata: Metadata = {
  metadataBase,
  title: "The Operating Function Company",
  description,
  // "image": "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/images/vaporware-devices-preview.png",
  category: "technology",

  twitter: {
    card: "summary_large_image",
    site: "@opfnco",
    creator: "@opfnco",
    title: "The Operating Function Company",
    description,
    images:
      "https://general-static-assets.nyc3.cdn.digitaloceanspaces.com/website-assets/images/twitter-image.jpeg",
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
    title: "The Operating Function Company",
    description,
    url: "https://opfn.co",
    siteName: "opfn.co",
    images:
      "https://general-static-assets.nyc3.cdn.digitaloceanspaces.com/website-assets/images/opengraph-image.jpeg",
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
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {criticalFonts.map((font) => (
          <link
            key={font.path}
            rel="preload"
            href={`https://general-static-assets.nyc3.digitaloceanspaces.com${font.path}`}
            as="font"
            type={font.type}
            crossOrigin="anonymous"
          />
        ))}
      </head>

      <body>
        <noscript>
          {/* Global fallback content for the entire application */}
          <div>
            <p className="mb-2">Reach us at: founders@opfn.co</p>
            <ul>
              <li>
                <a href="https://twitter.com/__vaporware__" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://vaporware.gitbook.io/vaporware"
                  target="_blank"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://blog.vaporware.network" target="_blank">
                  Blog/Podcast
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/deathtothecorporation/pallas"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </noscript>

        <header className="z-30 mx-auto sticky top-0 flex w-full justify-between">
          <Nav></Nav>
        </header>
        {children}
        <Footer></Footer>
      </body>

      <Script id="matomo-analytics">
        {`
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.vaporware.network/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
    </html>
  );
}
