"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Hamburger from "@/components/HamburgerMenu";
import ExternalLink from "@/components/ExternalLink";

export default function Nav() {
  const [isOnWhite, setIsOnWhite] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const [elementColor, setElementColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        document.getElementById("topNav")?.offsetHeight || 0;
      const heroHeight =
        document.querySelector(".top-hero").offsetHeight;
      const scrolledPast = window.scrollY > heroHeight - navbarHeight;
      setIsScrolledDown(scrolledPast);
      scrolledPast
        ? setElementColor("black")
        : setElementColor("white");
    };
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      id="topNav"
      className={`flex absolute top-0 justify-between items-center w-full p-4
            transition-all duration-200 ease-in-out

      ${isScrolledDown ? "bg-[#EEE] shadow-md" : "bg-transparent"}
    `}
    >
      <div className="">
        <Link
          id="headLogo"
          href="/"
          className={`
      block text-lg hover:text-gray-600 text-center
                transition-all duration-200 ease-in-out
    ${isScrolledDown ? "opacity-100 visible" : "opacity-0 invisible"}

      `}
        >
          <Logo size={35} color={elementColor} />
        </Link>
      </div>
      <Hamburger color={elementColor}>
        <nav id="site-nav" className="space-y-4 mt-10">
          <Link
            href="/"
            className="block text-lg hover:text-gray-600 text-center"
          >
            <Logo size={50} color={elementColor} className="mx-auto" />
          </Link>
          <Link
            href="/system-overview"
            className="block text-lg hover:text-gray-600 text-center"
          >
            System and Uses
          </Link>
          <ExternalLink
            href="https://github.com/operating-function/pallas/issues?q=is%3Aissue+is%3Aopen+label%3Acontributor_challenge"
            divClass="text-lg hover:text-gray-600 justify-center flex"
            linkClass="justify-center text-center"
          >
            Contribute
          </ExternalLink>
          <ExternalLink
            href="https://github.com/operating-function/pallas"
            divClass="text-lg hover:text-gray-600 justify-center flex"
            linkClass="justify-center text-center"
          >
            Code
          </ExternalLink>
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
    </div>
  );
}
