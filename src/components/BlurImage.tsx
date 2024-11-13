import React, { useState, useEffect } from "react";
import { getImagePath } from "@/utils/assets";

interface BlurImageProps {
  lowQualitySrc: string;
  highQualitySrc: string;
  alt: string;
  className: string;
  sizes: string;
}

const BlurImage = ({
  lowQualitySrc,
  highQualitySrc,
  alt,
  className,
  sizes,
}: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Get the correct URLs for both environments
  const lowQualityUrl = getImagePath(lowQualitySrc);
  const highQualityUrl = getImagePath(highQualitySrc);

  useEffect(() => {
    const img = new Image();
    img.src = highQualityUrl;
    img.onload = () => {
      console.log("High quality image loaded");
      setIsLoaded(true);
    };
  }, [highQualityUrl]);

  return (
    <div className="absolute w-full h-full">
      <img
        src={lowQualityUrl}
        alt={alt}
        sizes={sizes}
        className={`${className} absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={highQualityUrl}
        alt={alt}
        sizes={sizes}
        className={`${className} absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </div>
  );
};

export default BlurImage;
