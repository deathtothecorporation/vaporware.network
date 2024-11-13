"use client";
import React from "react";
import Logo from "@/components/Logo";
import BlurImage from "@/components/BlurImage";

export default function Footer() {
  return (
    <footer id="site-footer" className="z-50 container h-[135px] max-w-opfn mx-auto relative">
      <div className="absolute overflow-hidden inset-0 w-full h-full">
        <BlurImage
          highQualitySrc="/images/cove-large.png"
          lowQualitySrc="/images/cove-small.png"
          alt="Cove"
          fill
          className="absolute h-full w-full inset-0 object-cover mx-auto px-4 md:px-0 scale-[1.1]"
          sizes="(max-width: 810px) 100vw,
          (max-width: 1728px) 1200px,
          1800px"
        />
      </div>

      <nav className="relative z-10 px-4 flex flex-row h-full justify-between text-center items-center">
        <div className="flex items-center h-full">
          <a href="/" className="">
            <Logo size={30} color="white" />
          </a>
        </div>
        <ul className="list-none flex flex-col justify-evenly h-full mb-0 text-white py-4">
          <li>
            <a href="https://docs.opfn.co" target="_blank" className="">
              Documentation
            </a>
          </li>
          <li>
            <a href="/careers" className="">
              Careers
            </a>
          </li>
          <li>
            <a href="/about" className="">
              About
            </a>
          </li>
        </ul>
        <div className="flex items-center h-full">
          <a href="/" className="">
            <Logo size={30} color="white" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
