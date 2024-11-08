"use client";

import React, { ReactNode } from "react";

interface CaseArticleProps {
  number: string;
  title: string;
  children: ReactNode;
  className: string;
  hasBackground?: boolean;
}

export default function CaseArticle({
  number,
  title,
  children,
  className,
  hasBackground = true,
}: CaseArticleProps) {
  return (
    <article className={className}>
      <header className="">
        <div className="number">{number}</div>
        <div className="title">
          <div className="header-line"></div>
          <h2 className="mb-[8px] text-[16px]">{title}</h2>
        </div>
      </header>
      {hasBackground ? (
        <div className="case-area">
          <div className="jungle-bg">
            <img
              src="/images/dithered-jungle.png"
              alt="jungle background image"
              className="jungle-bg-image"
            />
            <div className="jungle-overlay"></div>
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </article>
  );
}
