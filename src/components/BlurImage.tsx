import React, { useState, useEffect} from "react";

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
  sizes
}: BlurImageProps ) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      console.log('High quality image loaded');
      setIsLoaded(true);
    };
  }, [highQualitySrc]);

  return (
    <div className="absolute w-full h-full">
      <img
        src={lowQualitySrc}
        alt={alt}
        sizes={sizes}
        className={`${className} absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}


      />
      <img
        src={highQualitySrc}
        alt={alt}
        sizes={sizes}
        className={`${className} absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </div>
  );
};

export default BlurImage;
