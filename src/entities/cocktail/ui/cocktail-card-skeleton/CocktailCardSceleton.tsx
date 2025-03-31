import clsx from 'clsx';

import stylesSkeleton from './styles.module.scss';
import styles from '../cocktail-card/styles.module.scss';

export const CocktailCardSkeleton = () => {
  return (
    <div className={clsx(styles.drink)}>
      <div className={styles.drinkInfo}>
        <div
          className={clsx(
            styles.drinkTitle,
            stylesSkeleton.skeletonBlock,
            stylesSkeleton.medium
          )}
        />
        {Array.from({length: 3}).map((_, i) => (
          <div
            className={clsx(stylesSkeleton.skeletonBlock, stylesSkeleton.short)}
            key={i}
          />
        ))}

        <div className={styles.drinkInstructions}>
          <div
            className={clsx(
              styles.drinkLabel,
              stylesSkeleton.skeletonBlock,
              stylesSkeleton.short
            )}
          />
          {Array.from({length: 4}).map((_, i) => (
            <div
              className={clsx(
                stylesSkeleton.skeletonBlock,
                stylesSkeleton.medium
              )}
              key={i}
            />
          ))}
        </div>

        <div className={styles.drinkIngredients}>
          <div
            className={clsx(
              styles.drinkLabel,
              stylesSkeleton.skeletonBlock,
              stylesSkeleton.short
            )}
          />
          <ul>
            {Array.from({length: 5}).map((_, i) => (
              <li
                className={clsx(
                  stylesSkeleton.skeletonBlock,
                  stylesSkeleton.long
                )}
                key={i}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className={clsx(styles.drinkImage, stylesSkeleton.skeletonImage)} />
    </div>
  );
};
