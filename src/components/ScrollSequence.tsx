"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollSequenceProps {
  frameCount: number;
  width: number;
  height: number;
  className?: string;
  frameDir: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}

const ScrollSequence: React.FC<ScrollSequenceProps> = ({
  frameCount,
  width,
  height,
  className = "",
  frameDir,
  children,
  backgroundImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [backgroundTransform, setBackgroundTransform] = useState({
    scale: 1,
    blur: 0,
  });

  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const requestRef = useRef<number>();

  const FRAME_COUNT = frameCount;

  const getFrameUrl = (index: number) => {
    const paddedIndex = index.toString().padStart(4, "0");
    // TODO: use local images, not CDN. (at least for dev)
    // return `/images/${frameDir}/frame_${paddedIndex}.jpg`;
    return `https://general-static-assets.nyc3.cdn.digitaloceanspaces.com/test-images/${frameDir}/frame_${paddedIndex}.jpg`;
  };

  const handleFrameAnimation = (
    elementTop: number,
    containerHeight: number,
    viewportHeight: number
  ) => {
    if (elementTop <= 0 && elementTop >= -containerHeight + viewportHeight) {
      const scrollProgress =
        Math.abs(elementTop) / (containerHeight - viewportHeight);
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollProgress * FRAME_COUNT)
      );

      const img = imagesRef.current[frameIndex];
      const canvas = canvasRef.current;
      if (img && contextRef.current && canvas) {
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
        contextRef.current.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }
  };

  const handleOverlayFade = (elementTop: number, viewportHeight: number) => {
    let newOpacity = 0;

    if (elementTop <= 0) {
      // Fade in over the first 20% of the scroll
      const fadeInProgress = Math.min(
        1,
        Math.abs(elementTop) / (viewportHeight * 0.2)
      );
      newOpacity = fadeInProgress;

      // Start fade out when nearing the end
      if (elementTop < -(viewportHeight * 0.8)) {
        newOpacity = Math.max(
          0,
          1 - (-elementTop - viewportHeight * 0.8) / (viewportHeight * 0.2)
        );
      }
    }

    setOverlayOpacity(Math.min(1, Math.max(0, newOpacity)));
  };

  const handleBackgroundEffects = (
    elementTop: number,
    containerHeight: number,
    viewportHeight: number
  ) => {
    if (elementTop <= 0 && elementTop >= -containerHeight + viewportHeight) {
      const scrollProgress =
        Math.abs(elementTop) / (containerHeight - viewportHeight);
      // Create a wave effect that peaks in the middle
      const wave = Math.sin(scrollProgress * Math.PI);
      // const scale = 1 + wave * 0.1; // Scale between 1 and 1.1
      const blur = wave * 2; // Blur between 0 and 2px
      const scale = 1 + scrollProgress * 0.1; // Scale between 1 and 1.1

      setBackgroundTransform({
        scale,
        blur,
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    contextRef.current = context;
    canvas.width = width;
    canvas.height = height;

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded((prev) => prev + 1);
          resolve(img);
        };
        img.onerror = (e) => {
          console.error(`Error loading frame ${index}:`, e);
          reject(e);
        };
        img.src = getFrameUrl(index);
        imagesRef.current[index - 1] = img;
      });
    };

    const loadAllImages = async () => {
      try {
        const imagePromises = Array.from({ length: FRAME_COUNT }, (_, i) =>
          loadImage(i + 1)
        );
        await Promise.all(imagePromises);
        setIsLoading(false);

        if (imagesRef.current[0]) {
          context.drawImage(imagesRef.current[0], 0, 0);
        }
      } catch (error) {
        console.error("Error loading frames:", error);
      }
    };

    loadAllImages();

    const handleScroll = () => {
      if (!containerRef.current || requestRef.current) return;

      requestRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        // Get container's position relative to viewport
        const rect = container.getBoundingClientRect();
        const containerTop = rect.top;
        const containerHeight = rect.height;
        const elementTop = rect.top;
        const viewportHeight = window.innerHeight;

        handleFrameAnimation(elementTop, containerHeight, viewportHeight);
        handleOverlayFade(elementTop, viewportHeight);
        handleBackgroundEffects(elementTop, containerHeight, viewportHeight);

        requestRef.current = undefined;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      imagesRef.current = [];
    };
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh]" // Makes this section taller than viewport to allow scrolling
      // lower numbers == snappier animation
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {backgroundImage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={backgroundImage}
              alt="Background"
              className="min-w-full h-full object-cover transition-transform duration-100"
              style={{
                transform: `scale(${backgroundTransform.scale})`,
                filter: `blur(${backgroundTransform.blur}px)`,
                transition: "transform 0.1s ease-out, filter 0.1s ease-out",
              }}
            />
          </div>
        )}

        <canvas
          ref={canvasRef}
          className={`relative z-10 max-w-full max-h-full ${className}`}
        />
        <div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: overlayOpacity,
            transition: "opacity 0.2s ease-out",
          }}
        >
          {children}
        </div>

        {isLoading && (
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        bg-black/80 text-white p-4 rounded-lg z-30"
          >
            Loading frames: {imagesLoaded}/{frameCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollSequence;
