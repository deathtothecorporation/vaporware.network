import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Hamburger from "@/components/HamburgerMenu";

export default function Nav() {
  return (
    <Hamburger>
      <nav className="space-y-4 mt-10">
        <Link
          href="/"
          className="block text-lg hover:text-gray-600 text-center"
        >
          <Logo size={50} color="black" className="mx-auto" />
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
    </Hamburger>
  );
}
