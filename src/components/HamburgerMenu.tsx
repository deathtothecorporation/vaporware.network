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
  const addCloseHandler = (children: any): ReactNode[] => {
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

  return (
    <div className="relative right-[4px]">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-100 flex bg-transparent flex-col justify-between w-[64px] py-[20px] h-[64px]"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <>
            <div className={`border-black border-b-2 w-[32px]`}></div>
            <div className={`border-black border-b-2 w-[32px]`}></div>
            <div className={`border-black border-b-2 w-[32px]`}></div>
          </>
        ) : (
          <>
            <div className={`border-${color} border-b-2 w-[32px]`}></div>
            <div className={`border-${color} border-b-2 w-[32px]`}></div>
            <div className={`border-${color} border-b-2 w-[32px]`}></div>
          </>
        )}
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
        className={`bg-[#EEE] fixed z-[50] top-0 right-0 h-full w-full md:w-1/3 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "shadow-lg translate-x-0" : "shadow-none translate-x-full"
        }`}
      >
        <div className="">{addCloseHandler(children)}</div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
