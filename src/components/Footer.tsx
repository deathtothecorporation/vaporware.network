import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
      <footer className="z-50 bg-white pt-2 text-[14px] mx-auto md:max-w-xl md:px-0 px-8">
        <div className="flex flex-row justify-between mb-4">
          <div>
            <a href="https://twitter.com/__vaporware__" target="_blank">
              Twitter
            </a>
          </div>
          <div className="flex text-center flex-col">
            <div>
              <a href="https://blog.vaporware.network" target="_blank">
                Blog/Podcast
              </a>
            </div>
            <div>
              <a href="https://vaporware.gitbook.io/vaporware" target="_blank">
                Documentation
              </a>
            </div>
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
