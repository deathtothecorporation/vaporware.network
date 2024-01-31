import type { Metadata } from "next";
import React from 'react';
import "./globals.css";

const description = "What if every token had a cloud computer?"

const metadataBase = new URL(process.env.BASE_URL as string)

export const metadata: Metadata = {
  metadataBase,
  title: "Vaporware",
  description,
  // "image": "https://vaporware-network-git-relaunch-2024-vaporware.vercel.app/images/vaporware-devices-preview.png",
  category: 'technology',

  twitter: {
    "card": "summary_large_image",
    "site": "@__vaporware__",
    "creator": "@__vaporware__",
    "title": "Vaporware",
    description,
    images: '/twitter-image.jpeg',
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
    title: "Vaporware",
    description,
    url: 'https://vaporware.network',
    siteName: 'Vaporware.network',
    images: '/opengraph-image.jpeg',
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
      <body>
        <noscript>
          {/* Global fallback content for the entire application */}
          <div className="max-w-lg mx-auto">
            <video
              className="mx-auto"
              width="194"
              height="194"
              poster="/images/vaporware-appliances-30s-200x200-preview.jpg"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src='/images/vaporware-appliances-30s-200x200.mp4' type="video/mp4" />
              <source src='/images/vaporware-appliances-30s-200x200.webm' type="video/webm" />
              Your browser does not support the video tag.
            </video>

              <h1 className="mt-4 mb-8">
# This website is vaporware, a web application running on a Solid-State Interpreter Virtual Machine.
              </h1>

            <p className="mb-2">
        Vaporware is a progam that runs on a new kind of internet computer, called a <span className="key-term">ship</span>. Ships are built on a novel virtual machine, called a <a href="https://media.urbit.org/whitepaper.pdf" target="_blank">solid-state interpreter</a>.
            </p>

            <p className="mb-2">
        Ships combine the functionality of wallets, large file storage, encrypted p2p networking, and full stack web applications into a single framework. They are designed to run in the cloud, but are owned cryptographically by people. Ships are <span className="key-term">internet appliances</span>.
            </p>

            <h2 className="my-8">
## The system
            </h2>

            <p className="mb-2">
The Vaporware ship is composed of three closely related systems:
            </p>
            <ul>
              <li>
                a purely functional virtual machine
              </li>
              <li>
    a tokenized application and package registry
  </li>
  <li>
    an app store and package management program
  </li>
</ul>

            <p className="mb-2">
        Vaporware is developed as <em>Free and Open Source Software</em> and respects the <a href="https://www.gnu.org/philosophy/free-sw.en.html" target="_blank">four essential freedoms</a>.
            </p>

            <h2 className="my-8">
## The device
</h2>

            <p className="mb-2">
        Like the EVM, the virtual machine used by Vaporware has been designed as infrastructure for a decentralized internet. It is a <a href="https://web.archive.org/web/20030524195418id_/http://courses.cs.vt.edu:80/~cs5314/Spring00/LanguagePresentations/Papers/slotta-hudak_extract.pdf" target="_blank">purely functional system</a> and is ultra-minimal. Unlike the EVM, it supports fast parallel computation and can store large amounts of data, cheaply. It does not provide global consensus.
            </p>

            <p className="mb-2">
        Vaporware uses the VM to replace developer-hosted web services with <a href="https://arxiv.org/pdf/2306.08168.pdf" target="_blank">non-custodial web apps</a> &mdash; web apps owned by users.
            </p>

            <h2 className="my-8">
## The registry
</h2>

            <p className="mb-2">
        Every ship has a unique <span className="key-term">identity</span>. NFTs can be registered with the protocol and used as a network handle. Ships encrypt and sign all of their messages by default. The owner of a ship can register the ship’s content onchain and share it with others. Identities are used to control access to registered content.
            </p>

            <p className="mb-2">
        Vaporware is a <a href="https://arxiv.org/pdf/2205.14927.pdf" target="_blank">decentralized file storage</a> network, but can also be used to distribute and run full stack software applications. Registration binds content to an NFT, so users can trustlessly monetize their data and apps.
            </p>

            <h2 className="my-8">
## The agora
</h2>

            <p className="mb-2">
The agora is the economic bootloader for the Vaporware network. It is the default protocol, owned by every user, providing unfiltered access to purchasable content and software.
            </p>

            <p className="mb-2">
Vaporware has no “app store” qua “app store” to host and monetize apps. Instead, users are able to self-host their own access point to a purely p2p, onchain, content distribution system. Tokens provide censorship resistant payment rails and the agora provides censorship resistant distribution.
            </p>

            <hr className="my-4" />

            <p className="mb-2">
For whitelist access,
mint a free Vaporware appliance:
<a href="#">(Mint coming soon)</a>
            </p>

            <p className="mb-2">
Reach us at: founders@vaporware.network
</p>
<ul>
      <li><a href="https://twitter.com/__vaporware__" target="_blank">Twitter</a></li>
      <li><a href="https://warpcast.com/vaporware" target="_blank">Farcaster</a></li>
      <li><a href="https://github.com/deathtothecorporation/" target="_blank">GitHub</a></li>
</ul>
</div>

        </noscript>
        {children}
      </body>
    </html>
  );
}
