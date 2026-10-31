import React, { useEffect, useState } from 'react';

interface AwakeningLoaderProps {
  onLoaded: () => void;
}

export const AwakeningLoader: React.FC<AwakeningLoaderProps> = ({ onLoaded }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(onLoaded, 350);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [onLoaded]);

  return (
    <div
      onClick={onLoaded}
      className={`fixed inset-0 z-50 transition-opacity duration-350 select-none cursor-pointer ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`${import.meta.env.BASE_URL}Load%20Page%20Mobile.png`}
        />
        <img
          src={`${import.meta.env.BASE_URL}Load%20Page.png`}
          alt="Loading portfolio"
          className="block h-full w-full object-cover"
        />
      </picture>
    </div>
  );
};
