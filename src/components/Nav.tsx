"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation"; // Add this import
import Link from "next/link";
import Logo from "@/components/Logo";
import Hamburger from "@/components/HamburgerMenu";
import ExternalLink from "@/components/ExternalLink";

export default function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolledDown, setIsScrolledDown] = useState(true); // Start visible
  const [elementColor, setElementColor] = useState("black"); // Start with black

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolledDown(true);
      setElementColor("black");
    } else {
      // On homepage, check scroll position immediately
      const handleScroll = () => {
        const navbarHeight =
          (document.getElementById("topNav") as HTMLElement)
            ?.offsetHeight || 0;
        const heroHeight = (
          document.querySelector(".top-hero") as HTMLElement
        )?.offsetHeight;
        const scrolledPast =
          window.scrollY > heroHeight - (navbarHeight - 20);
        setIsScrolledDown(scrolledPast);
        scrolledPast
          ? setElementColor("black")
          : setElementColor("white");
      };

      handleScroll(); // Check position immediately

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname, isHomePage]); // Respond to pathname changes

  return (
    <div
      id="topNav"
      className={`
    flex absolute top-0 justify-between items-center w-full pl-4 h-[64px]
    before:absolute before:inset-0 before:transition-all before:duration-200 before:ease-in-out
    before:-z-10
    ${
      isScrolledDown
        ? "before:translate-y-0 before:bg-[#EEE] before:shadow-md"
        : "before:-translate-y-full before:bg-transparent"
    }
  `}
    >
      <div className="flex container mx-auto max-w-opfn lg:px-2 items-center justify-between">
        <Link
          id="headLogo"
          href="/"
          className={`
      inline-block text-lg hover:text-gray-600 text-center
                transition-all duration-200 ease-in-out
    ${isScrolledDown ? "opacity-100 visible" : "opacity-0 invisible"}

      `}
        >
          <Logo size={30} color="black" />
        </Link>
        <Hamburger color={elementColor}>
          <nav id="site-nav" className="space-y-4">
            <div className="text-right pr-3 pt-3">
              <Link href="">
                <button
                  className="relative w-[32px] h-[32px] bg-[#EEE]"
                  aria-label="Close menu"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-[32px] h-[32px]">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 rotate-45"></div>
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2 -rotate-45"></div>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
            <Link
              href="/"
              className="block text-lg hover:text-gray-600 text-center"
            >
              <Logo size={50} color="black" className="mx-auto" />
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
    </div>
  );
}
