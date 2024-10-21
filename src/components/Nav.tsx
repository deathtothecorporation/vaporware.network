import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="flex flex-col sticky top-0 z-50 bg-white pt-4 pb-2 mx-auto md:max-w-xl md:px-0 px-8"
      id="nav"
    >
      <div className="flex justify-center text-center items-center">
        <ul>
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
    </nav>
  );
}
