import {memo, useState} from 'react';

import fallbackDrinkImage from 'shared/assets/images/fallback-drink.webp';

export const ImageLazy = memo(
  ({
    src,
    alt,
    className,
    width,
    height
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }) => {
    const [error, setError] = useState(false);

    return (
      <img
        alt={alt}
        className={className}
        height={height}
        loading="lazy"
        onError={() => setError(true)}
        src={error ? fallbackDrinkImage : src}
        width={width}
      />
    );
  }
);

ImageLazy.displayName = 'ImageLazy';
