import React, { useState, useEffect } from "react";

const getAssetPath = (path: string): string => {
  if (process.env.NODE_ENV !== "production") {
    //return `https://general-static-assets.nyc3.digitaloceanspaces.com/website-assets${path}`;
    // TODO: reverse these comments to test DO images on localhost:
    return path;
  }
  return `https://general-static-assets.nyc3.digitaloceanspaces.com/website-assets${path}`;
};

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
  const lowQualityUrl = getAssetPath(lowQualitySrc);
  const highQualityUrl = getAssetPath(highQualitySrc);

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
