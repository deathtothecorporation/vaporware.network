import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="site-footer" className="z-50 relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/cove.png"
          alt="Coastal landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="relative z-10 px-4 py-2 flex flex-row justify-between text-center items-center">
        <div>
          <a href="/" className="">
            <Logo size={25} color="white" />
          </a>
        </div>
        <ul className="list-none text-center flex flex-col space-y-2 mb-0 text-white">
          <li>
            <a href="/system-overview" className="">
              System and Uses
            </a>
          </li>
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
        <div>
          <a href="/" className="">
            <Logo size={25} color="white" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
