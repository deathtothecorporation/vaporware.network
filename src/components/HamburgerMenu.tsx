"use client";

import React, { useState, Children, ReactNode, ReactElement } from "react";

interface HamburgerMenuProps {
  children: ReactNode;
  color?: string;
}

const HamburgerMenu = ({ children, color = "white" }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Recursively add click handler to all Link elements
  const addCloseHandler = (children: ReactNode): ReactNode[] => {
    // Note the return type is now ReactNode[]
    return Children.map(children, (child) => {
      if (!child || typeof child === "string") return child;
      if (!React.isValidElement(child)) return child;

      const childElement = child as ReactElement;

      // Handle nav and other container elements
      const newChildren = childElement.props?.children
        ? addCloseHandler(childElement.props.children)
        : childElement.props.children;

      // If it has an href prop, add the click handler
      if ("href" in childElement.props) {
        return React.cloneElement(childElement, {
          ...childElement.props,
          onClick: (e: React.MouseEvent) => {
            if (childElement.props.onClick) {
              childElement.props.onClick(e);
            }
            toggleMenu();
          },
        });
      }

      // For non-link elements, just clone with new children if they exist
      return React.cloneElement(childElement, {
        ...childElement.props,
        children: newChildren,
      });
    });
  };

  const bgColor = color === "black" ? "bg-black" : "bg-white";
  const buttonColor = color === "black" ? "bg-white" : "bg-black";

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`relative z-[60] top-0 right-4 p-2 focus:outline-none ${isOpen ? "bg-white" : "bg-transparent"}`}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-between w-6 h-5">
          <span
            className={`block w-full h-0.5 ${bgColor} transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 ${bgColor} transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 ${bgColor} transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-opacity-0 transition-opacity duration-300 ${
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
