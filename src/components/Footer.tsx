import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
      <footer className="z-50 bg-white pt-2 mx-auto md:max-w-xl md:px-0 px-8">
        <div className="flex flex-row justify-between mb-4">
          <div>
        <ul className="flex flex-col">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/learn-more">Learn More</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
          </div>
          <div>
            <a
              href="https://github.com/deathtothecorporation/pallas"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
  )
}
