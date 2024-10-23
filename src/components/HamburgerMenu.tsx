"use client";

import React, {
  useState,
  Children,
  cloneElement,
  ReactNode,
  ReactElement,
} from "react";

interface HamburgerMenuProps {
  children: ReactNode;
}

const HamburgerMenu = ({ children }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Recursively add click handler to all Link elements
  const addCloseHandler = (children: ReactNode): ReactNode => {
    return Children.map(children, (child) => {
      if (!child || typeof child === "string") return child;

      // Need to type check if it's a valid element
      if (!React.isValidElement(child)) return child;

      // If it has an href prop, it's likely a Link
      if ("href" in child.props) {
        return cloneElement(child as ReactElement, {
          onClick: (e: React.MouseEvent) => {
            // Call the original onClick if it exists
            if (child.props.onClick) {
              child.props.onClick(e);
            }
            toggleMenu();
          },
        });
      }

      // If it has children, recursively process them
      if (child.props?.children) {
        return cloneElement(child as ReactElement, {
          children: addCloseHandler(child.props.children),
        });
      }

      return child;
    });
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-[60] p-2 focus:outline-none ${isOpen ? "bg-black" : "bg-transparent"}`}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-between w-6 h-5">
          <span
            className={`block w-full h-0.5 bg-gray-200 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-gray-200 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-gray-200 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ${
          isOpen
            ? "opacity-50 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Menu Panel */}
      <div
        className={`fixed z-[50] top-0 right-0 h-full w-full md:w-1/3 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "shadow-lg translate-x-0" : "shadow-none translate-x-full"
        }`}
      >
        <div className="p-6">{addCloseHandler(children)}</div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
