"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Hamburger from "@/components/HamburgerMenu";
import ExternalLink from "@/components/ExternalLink";

export default function Nav() {
  const [isOnWhite, setIsOnWhite] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const navElement = document.querySelector("#headLogo");
      if (!navElement) return;

      const rect = navElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get all elements at this point
      const elements = document.elementsFromPoint(centerX, centerY);

      // Find the first non-nav element (the background)
      const backgroundElement = elements.find((el) => !el.closest("header"));

      if (backgroundElement) {
        const computedStyle = window.getComputedStyle(backgroundElement);

        // Try different properties to find actual background color
        // const fill = computedStyle.fill; // For SVGs
        // const backgroundColor = computedStyle.backgroundColor;
        // const background = computedStyle.background;
        // const color = computedStyle.color;
        const tagName = backgroundElement.tagName;

        //console.log({
        //element: backgroundElement.tagName,
        //fill,
        //backgroundColor,
        //background,
        //color,
        //});
        setIsOnWhite(tagName !== "IMG");
      }
    };

    // Initial check
    checkBackground();

    // Check on scroll
    window.addEventListener("scroll", checkBackground);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", checkBackground);
    };
  }, []);

  const elementColor = isOnWhite ? "black" : "white";

  return (
    <div className="flex justify-between items-center w-full p-2">
      <div className="">
        <Link
          id="headLogo"
          href="/"
          className="block text-lg hover:text-gray-600 text-center"
        >
          <Logo size={35} color={elementColor} />
        </Link>
      </div>
      <Hamburger color={elementColor}>
        <nav className="space-y-4 mt-10">
          <Link
            href="/"
            className="block text-lg hover:text-gray-600 text-center"
          >
            <Logo size={50} color={elementColor} className="mx-auto" />
          </Link>
          <Link
            href="/learn-more"
            className="block text-lg hover:text-gray-600 text-center"
          >
            Learn More
          </Link>
          <Link
            href="/contribute"
            className="block text-lg hover:text-gray-600 text-center"
          >
            Contribute
          </Link>
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
