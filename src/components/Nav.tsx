import React from "react";
import Link from "next/link";
import Hambugger from "@/components/HambuggerMenu";

export default function Nav() {
  return (
    <Hambugger>
      <nav className="space-y-4 mt-8">
        <Link
          href="/"
          className="block text-lg hover:text-gray-600 text-center"
        >
          Home
        </Link>
        <Link
          href="/learn-more"
          className="block text-lg hover:text-gray-600 text-center"
        >
          Learn More
        </Link>

        <Link
          href="/about"
          className="block text-lg hover:text-gray-600 text-center"
        >
          About
        </Link>
        <Link
          href="/careers"
          className="block text-lg hover:text-gray-600 text-center"
        >
          Careers
        </Link>
      </nav>
    </Hambugger>
  );
}
