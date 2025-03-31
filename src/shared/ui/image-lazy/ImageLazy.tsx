import {memo, useCallback, useState} from 'react';

import {Blurhash} from 'react-blurhash';

import fallbackDrinkImage from 'shared/assets/images/fallback-drink.webp';

import styles from './styles.module.scss';

type ImageLazyProps = {
  src: string;
  alt: string;
  hash: string;
  width: number;
  height: number;
  className?: string;
};

export const ImageLazy = memo(
  ({src, alt, hash, className, width, height}: ImageLazyProps) => {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const onLoadHandler = useCallback(() => {
      setIsLoaded(true);
    }, []);

    return (
      <div className={`${styles.wrapper} ${className}`} style={{width, height}}>
        {!isLoaded ? (
          <Blurhash
            hash={hash}
            height="100%"
            punch={1}
            resolutionX={32}
            resolutionY={32}
            width="100%"
          />
        ) : null}
        <img
          alt={alt}
          className={className}
          height={height}
          loading="lazy"
          onError={() => setError(true)}
          onLoad={onLoadHandler}
          src={error ? fallbackDrinkImage : src}
          width={width}
        />
      </div>
    );
  }
);

ImageLazy.displayName = 'ImageLazy';
